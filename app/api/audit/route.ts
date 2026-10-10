import { NextResponse } from "next/server";

// Security Configuration Limits
const MAX_REQUEST_SIZE_BYTES = 32 * 1024; // 32 KB
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 6; // Max 6 submissions per IP per 10 mins
const DUPLICATE_COOLDOWN_MS = 60 * 1000; // 60 seconds duplicate protection
const FETCH_TIMEOUT_MS = 8000; // 8 second timeout for external calls

// In-Memory Rate Limiting & Duplicate Cache with automatic cleanup
interface RateLimitRecord {
  count: number;
  resetAt: number;
}
const ipRateLimitMap = new Map<string, RateLimitRecord>();
const duplicateSubmissionMap = new Map<string, number>();

// Periodic memory cleanup (runs safely on active serverless instance)
function cleanupMemoryCache() {
  const now = Date.now();
  for (const [ip, record] of ipRateLimitMap.entries()) {
    if (now > record.resetAt) {
      ipRateLimitMap.delete(ip);
    }
  }
  for (const [key, timestamp] of duplicateSubmissionMap.entries()) {
    if (now - timestamp > DUPLICATE_COOLDOWN_MS) {
      duplicateSubmissionMap.delete(key);
    }
  }
}

// Extract client IP address safely from request headers
function getClientIp(request: Request): string {
  const xForwardedFor = request.headers.get("x-forwarded-for");
  if (xForwardedFor) {
    // The first IP in the chain is the original client IP
    const firstIp = xForwardedFor.split(",")[0].trim();
    if (firstIp) return firstIp;
  }
  const xRealIp = request.headers.get("x-real-ip");
  if (xRealIp?.trim()) return xRealIp.trim();
  const cfConnectingIp = request.headers.get("cf-connecting-ip");
  if (cfConnectingIp?.trim()) return cfConnectingIp.trim();
  return "unknown-ip";
}

// Sanitize string inputs to prevent injection and strip control characters
function sanitizeString(input: unknown, maxLength: number): string {
  if (typeof input !== "string") return "";
  return input
    .trim()
    .replace(/[<>]/g, "") // Strip brackets to neutralize HTML tags
    .slice(0, maxLength);
}

// Standard security headers for all API responses
const SECURITY_HEADERS = {
  "Cache-Control": "no-store, no-cache, must-revalidate",
  "X-Content-Type-Options": "nosniff",
  Pragma: "no-cache",
};

export async function POST(request: Request) {
  cleanupMemoryCache();
  const clientIp = getClientIp(request);
  const now = Date.now();

  try {
    // 1. Request Size Validation (DoS protection)
    const contentLengthHeader = request.headers.get("content-length");
    if (contentLengthHeader) {
      const parsedLength = parseInt(contentLengthHeader, 10);
      if (!isNaN(parsedLength) && parsedLength > MAX_REQUEST_SIZE_BYTES) {
        return NextResponse.json(
          { success: false, message: "Request payload exceeds allowed limit." },
          { status: 413, headers: SECURITY_HEADERS }
        );
      }
    }

    // 2. Client IP Rate Limiting
    const rateRecord = ipRateLimitMap.get(clientIp);
    if (rateRecord) {
      if (now < rateRecord.resetAt) {
        if (rateRecord.count >= RATE_LIMIT_MAX_REQUESTS) {
          const retryAfterSec = Math.ceil((rateRecord.resetAt - now) / 1000);
          return NextResponse.json(
            {
              success: false,
              message: "Too many audit requests submitted. Please wait a few minutes before trying again or call (425) 414-6819.",
            },
            {
              status: 429,
              headers: {
                ...SECURITY_HEADERS,
                "Retry-After": retryAfterSec.toString(),
              },
            }
          );
        }
        rateRecord.count += 1;
      } else {
        ipRateLimitMap.set(clientIp, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
      }
    } else {
      ipRateLimitMap.set(clientIp, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    }

    // 3. Parse JSON Body Safely
    let body: Record<string, unknown>;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid JSON format in request." },
        { status: 400, headers: SECURITY_HEADERS }
      );
    }

    const {
      fullName,
      email,
      phone,
      address,
      currentUsage,
      propertyType,
      bedrooms,
      bathrooms,
      listingUrl,
      consent,
      turnstileToken,
      hp_company,
      honeypot,
      b_company,
    } = body;

    // 4. Honeypot Bot Detection
    if (hp_company || honeypot || b_company) {
      console.warn("Spam detected via honeypot trap from IP:", clientIp);
      return NextResponse.json(
        { success: false, message: "Spam check failed." },
        { status: 400, headers: SECURITY_HEADERS }
      );
    }

    // 5. Strict Server-Side Field Validation
    const cleanName = sanitizeString(fullName, 100);
    const cleanEmail = sanitizeString(email, 254).toLowerCase();
    const cleanPhone = sanitizeString(phone, 30);
    const cleanAddress = sanitizeString(address, 250);
    const cleanUsage = sanitizeString(currentUsage, 100);
    const cleanPropType = sanitizeString(propertyType, 100);
    const cleanBeds = sanitizeString(bedrooms, 50);
    const cleanBaths = sanitizeString(bathrooms, 50);
    let cleanUrl = sanitizeString(listingUrl, 500);

    // Required fields check
    if (!cleanName || cleanName.length < 2) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid full name (at least 2 characters)." },
        { status: 400, headers: SECURITY_HEADERS }
      );
    }

    // Email RFC format validation
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400, headers: SECURITY_HEADERS }
      );
    }

    // Phone format check (must contain at least 7 digits)
    const digitsOnly = cleanPhone.replace(/\D/g, "");
    if (!cleanPhone || digitsOnly.length < 7 || digitsOnly.length > 15) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid phone number with area code." },
        { status: 400, headers: SECURITY_HEADERS }
      );
    }

    if (!cleanAddress || cleanAddress.length < 5) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid property address and city." },
        { status: 400, headers: SECURITY_HEADERS }
      );
    }

    // Consent checkbox must be strictly true
    if (consent !== true) {
      return NextResponse.json(
        { success: false, message: "Please agree to the consent confirmation before submitting." },
        { status: 400, headers: SECURITY_HEADERS }
      );
    }

    // URL validation if provided
    if (cleanUrl) {
      try {
        const parsedUrl = new URL(cleanUrl);
        if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
          cleanUrl = "";
        }
      } catch {
        cleanUrl = "";
      }
    }

    // 6. Duplicate Submission Protection (60-second cooldown per email+address)
    const duplicateKey = `${cleanEmail}::${cleanAddress.toLowerCase()}`;
    const lastSubmitted = duplicateSubmissionMap.get(duplicateKey);
    if (lastSubmitted && now - lastSubmitted < DUPLICATE_COOLDOWN_MS) {
      return NextResponse.json(
        {
          success: false,
          message: "A duplicate submission was received in the last 60 seconds. Your audit request is already being processed.",
        },
        { status: 409, headers: SECURITY_HEADERS }
      );
    }

    // 7. Server-Side Cloudflare Turnstile Verification
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret) {
      const cleanToken = typeof turnstileToken === "string" ? turnstileToken.trim() : "";
      if (!cleanToken) {
        return NextResponse.json(
          { success: false, message: "Security verification required. Please complete the check." },
          { status: 403, headers: SECURITY_HEADERS }
        );
      }

      try {
        const turnstileParams = new URLSearchParams();
        turnstileParams.append("secret", turnstileSecret);
        turnstileParams.append("response", cleanToken);
        if (clientIp && clientIp !== "unknown-ip") {
          turnstileParams.append("remoteip", clientIp);
        }

        const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: turnstileParams.toString(),
          signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
        });

        const verifyData = await verifyRes.json().catch(() => null);
        if (!verifyData || !verifyData.success) {
          console.warn("Cloudflare Turnstile rejected token for IP:", clientIp, verifyData?.["error-codes"]);
          return NextResponse.json(
            { success: false, message: "Security verification check failed. Please refresh and try again." },
            { status: 403, headers: SECURITY_HEADERS }
          );
        }
      } catch (err) {
        console.error("Turnstile verification network exception:", err instanceof Error ? err.message : err);
        return NextResponse.json(
          { success: false, message: "Security service temporarily unreachable. Please retry or call (425) 414-6819." },
          { status: 503, headers: SECURITY_HEADERS }
        );
      }
    }

    // Record submission timestamp for duplicate prevention
    duplicateSubmissionMap.set(duplicateKey, now);

    // 8. Generate Audit Reference Code & Standard Payload
    const referenceCode = `NW-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    const timestampIso = new Date(now).toISOString();

    const webhookPayload = {
      event: "audit_requested",
      timestamp: timestampIso,
      source: "website_audit_form",
      lead: {
        fullName: cleanName,
        email: cleanEmail,
        phone: cleanPhone,
        propertyAddress: cleanAddress,
        currentUsage: cleanUsage || "Not specified",
        propertyType: cleanPropType || "Not specified",
        bedrooms: cleanBeds || "Not specified",
        bathrooms: cleanBaths || "Not specified",
        existingListingUrl: cleanUrl,
        consent: true,
      },
      metadata: {
        referenceCode,
        clientIp: clientIp !== "unknown-ip" ? clientIp : undefined,
        userAgent: request.headers.get("user-agent")?.slice(0, 200) || "",
        referer: request.headers.get("referer")?.slice(0, 200) || "",
      },
    };

    // 9. Forward to Zapier (or Make.com) Webhook securely from server-side environment variable
    const webhookUrl =
      process.env.ZAPIER_WEBHOOK_URL ||
      process.env.MAKE_WEBHOOK_URL ||
      process.env.HUNTER_WEBHOOK_URL ||
      process.env.AUDIT_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("Lead intake webhook URL is not configured in server environment variables.");
      return NextResponse.json(
        {
          success: false,
          message: "Our automated audit intake is temporarily offline. Please call us directly at (425) 414-6819 or email hellonestwiseco@gmail.com and we'll prepare your report immediately.",
        },
        { status: 503, headers: SECURITY_HEADERS }
      );
    }

    try {
      const webhookRes = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "NestWise-Audit-Intake/1.0",
        },
        body: JSON.stringify(webhookPayload),
        signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      });

      // ONLY display success if the webhook returns a 2xx success status code
      if (!webhookRes.ok) {
        console.error("Webhook destination returned non-2xx status code:", webhookRes.status);
        return NextResponse.json(
          {
            success: false,
            message: "Unable to confirm delivery with our property audit intake. Please call us directly at (425) 414-6819 or email hellonestwiseco@gmail.com.",
          },
          { status: 502, headers: SECURITY_HEADERS }
        );
      }
    } catch (webhookErr) {
      console.error("Failed to forward lead to webhook endpoint:", webhookErr instanceof Error ? webhookErr.message : webhookErr);
      return NextResponse.json(
        {
          success: false,
          message: "Network issue connecting to audit intake. Please contact us directly at (425) 414-6819 or email hellonestwiseco@gmail.com.",
        },
        { status: 502, headers: SECURITY_HEADERS }
      );
    }

    // 10. Success Response (Returned ONLY after upstream confirmation)
    return NextResponse.json(
      {
        success: true,
        message: "Your 48-Hour Property Revenue Audit request has been received.",
        data: {
          submittedAt: timestampIso,
          referenceCode,
        },
      },
      { status: 200, headers: SECURITY_HEADERS }
    );
  } catch (error) {
    console.error("Unexpected error in /api/audit handler:", error instanceof Error ? error.message : error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal error processing audit request. Please reach us at (425) 414-6819 or hellonestwiseco@gmail.com.",
      },
      { status: 500, headers: SECURITY_HEADERS }
    );
  }
}
