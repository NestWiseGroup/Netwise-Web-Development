import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, address, propertyType, bedrooms, listingUrl, turnstileToken } = body;

    // 1. Basic Server-Side Validation
    if (!fullName || !email || !phone || !address) {
      return NextResponse.json(
        { success: false, message: "Missing required fields: fullName, email, phone, or address." },
        { status: 400 }
      );
    }

    // Email format regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid professional email address." },
        { status: 400 }
      );
    }

    // 2. Bot Protection Token Validation (Cloudflare Turnstile or reCAPTCHA)
    // If a secret key exists in process.env.TURNSTILE_SECRET_KEY, verify against Cloudflare endpoint
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret && turnstileToken) {
      try {
        const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `secret=${encodeURIComponent(turnstileSecret)}&response=${encodeURIComponent(turnstileToken)}`,
        });
        const verifyData = await verifyRes.json();
        if (!verifyData.success) {
          return NextResponse.json(
            { success: false, message: "Bot verification failed. Please refresh and try again." },
            { status: 403 }
          );
        }
      } catch (err) {
        console.error("Cloudflare verification network error:", err);
      }
    }

    // 3. Forward Payload to Make.com / Zapier / HubSpot Webhook if configured
    const webhookUrl = process.env.MAKE_WEBHOOK_URL || process.env.AUDIT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            source: "NestWise Group Landing Page - 48-Hour Audit Request",
            timestamp: new Date().toISOString(),
            lead: {
              fullName,
              email,
              phone,
              address,
              propertyType: propertyType || "Single Family Estate",
              bedrooms: bedrooms || "4",
              listingUrl: listingUrl || "N/A",
            },
          }),
        });
      } catch (webhookErr) {
        console.error("Failed to forward lead to webhook:", webhookErr);
      }
    }

    // Return success response to client
    return NextResponse.json(
      {
        success: true,
        message: "Your 48-Hour Property Revenue Audit request has been received.",
        data: {
          submittedAt: new Date().toISOString(),
          referenceCode: `NW-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Audit API handler exception:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error processing audit request." },
      { status: 500 }
    );
  }
}
