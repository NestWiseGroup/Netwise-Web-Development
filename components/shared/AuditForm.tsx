"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Calendar, Phone, CheckCircle2, AlertCircle } from "@/components/shared/Icons";
import BookingModal from "./BookingModal";
import CustomSelect, { SelectOption } from "./CustomSelect";

const USAGE_OPTIONS: SelectOption[] = [
  { value: "long-term", label: "Long-term rental (occupied or tenant lease)" },
  { value: "existing-str", label: "Active short-term rental (Airbnb / VRBO)" },
  { value: "vacant", label: "Vacant, second home, or investment property" },
  { value: "primary", label: "Primary residence (planning to rent out)" },
  { value: "other", label: "Other / Transitioning use" },
];

const PROPERTY_TYPE_OPTIONS: SelectOption[] = [
  { value: "Single Family Home", label: "Single Family Home" },
  { value: "Townhome", label: "Townhome / Rowhouse" },
  { value: "Condo / Apartment", label: "Condo / Apartment" },
  { value: "Waterfront Property", label: "Waterfront / Lake Property" },
  { value: "Multi-Unit Portfolio", label: "Multi-Unit STR Portfolio" },
];

const BEDROOM_OPTIONS: SelectOption[] = [
  { value: "Studio", label: "Studio" },
  { value: "1", label: "1 Bedroom" },
  { value: "2", label: "2 Bedrooms" },
  { value: "3", label: "3 Bedrooms" },
  { value: "4", label: "4 Bedrooms" },
  { value: "5+", label: "5+ Bedrooms" },
];

const BATHROOM_OPTIONS: SelectOption[] = [
  { value: "1", label: "1 Bathroom" },
  { value: "1.5", label: "1.5 Bathrooms" },
  { value: "2", label: "2 Bathrooms" },
  { value: "2.5", label: "2.5 Bathrooms" },
  { value: "3", label: "3 Bathrooms" },
  { value: "3.5", label: "3.5 Bathrooms" },
  { value: "4+", label: "4+ Bathrooms" },
];

interface AuditFormProps {
  variant?: "card" | "embedded" | "full";
  title?: string;
  subtitle?: string;
  buttonText?: string;
  className?: string;
}

function AuditFormInner({
  variant = "card",
  title = "Request Your Free 48-Hour Property Revenue Audit",
  subtitle = "We benchmark your property against comparable rentals nearby across Greater Seattle & the Eastside.",
  buttonText = "Get My Free Property Audit",
  className = "",
}: AuditFormProps) {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    currentUsage: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    listingUrl: "",
    consent: false,
    honeypot: "",
  });

  const [turnstileToken, setTurnstileToken] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);

  // Read ?segment= from URL or fallback to localStorage
  useEffect(() => {
    const segmentParam = searchParams?.get("segment");
    let initialUsage = "";

    if (segmentParam) {
      const s = segmentParam.toLowerCase();
      if (s.includes("long-term")) initialUsage = "long-term";
      else if (s.includes("existing") || s.includes("str") || s.includes("airbnb")) initialUsage = "existing-str";
      else if (s.includes("vacant") || s.includes("second")) initialUsage = "vacant";
      else if (s.includes("primary")) initialUsage = "primary";
      else initialUsage = "other";
    } else {
      try {
        const saved = localStorage.getItem("nestwise_owner_segment");
        if (saved) {
          if (saved === "long-term") initialUsage = "long-term";
          else if (saved === "existing-str") initialUsage = "existing-str";
          else if (saved === "vacant") initialUsage = "vacant";
        }
      } catch {}
    }

    if (initialUsage) {
      const frame = requestAnimationFrame(() => {
        setFormData((prev) => ({
          ...prev,
          currentUsage: prev.currentUsage || initialUsage,
        }));
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [searchParams]);

  // Real Cloudflare Turnstile integration if NEXT_PUBLIC_TURNSTILE_SITE_KEY exists
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  useEffect(() => {
    if (!turnstileSiteKey || typeof window === "undefined") return;

    const renderTurnstile = () => {
      const turnstile = (window as unknown as { turnstile?: { render: (el: HTMLElement, opts: Record<string, unknown>) => string; reset: (id: string) => void } })?.turnstile;
      if (turnstile && turnstileContainerRef.current && !turnstileWidgetId.current) {
        try {
          turnstileWidgetId.current = turnstile.render(turnstileContainerRef.current, {
            sitekey: turnstileSiteKey,
            callback: (token: string) => {
              setTurnstileToken(token);
              setErrorMessage("");
            },
            "expired-callback": () => setTurnstileToken(""),
            "error-callback": () => setTurnstileToken(""),
          });
        } catch (err) {
          console.warn("Turnstile render note:", err);
        }
      }
    };

    const scriptId = "cf-turnstile-script";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        renderTurnstile();
      };
      document.head.appendChild(script);
    } else {
      renderTurnstile();
    }
  }, [turnstileSiteKey]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.currentUsage) {
      setErrorMessage("Please select how your property is currently used.");
      setStatus("error");
      return;
    }

    if (!formData.consent) {
      setErrorMessage("Please check the consent box to proceed.");
      setStatus("error");
      return;
    }

    if (turnstileSiteKey && !turnstileToken) {
      setErrorMessage("Please complete the security check below.");
      setStatus("error");
      return;
    }

    setSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          currentUsage: formData.currentUsage,
          propertyType: formData.propertyType,
          bedrooms: formData.bedrooms,
          bathrooms: formData.bathrooms,
          listingUrl: formData.listingUrl,
          consent: formData.consent,
          turnstileToken: turnstileToken || undefined,
          hp_company: formData.honeypot,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(
          data.message ||
            "Unable to deliver your request right now. Please call us directly at (425) 414-6819 or email hellonestwiseco@gmail.com."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "A network connection error occurred while submitting your audit. Please call us directly at (425) 414-6819 or email hellonestwiseco@gmail.com."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setErrorMessage("");
    setTurnstileToken("");
    if (turnstileWidgetId.current) {
      try {
        (window as unknown as { turnstile?: { reset: (id: string) => void } })?.turnstile?.reset(turnstileWidgetId.current);
      } catch {}
    }
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      currentUsage: "",
      propertyType: "",
      bedrooms: "",
      bathrooms: "",
      listingUrl: "",
      consent: false,
      honeypot: "",
    });
  };

  const isFull = variant === "full";

  return (
    <div
      className={`bg-white rounded-2xl sm:rounded-3xl border border-[#E6DCB8] shadow-luxury-lg relative overflow-hidden ${
        isFull ? "p-8 sm:p-12 max-w-3xl mx-auto" : "p-6 sm:p-8"
      } ${className}`}
    >
      {/* Top Gold Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#8C6508]" />

      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1E3A8A]">
            {title}
          </h3>
          <span className="inline-flex self-start text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-[#B8860B]/10 text-[#B8860B] border border-[#B8860B]/20">
            Zero Obligation
          </span>
        </div>
        {subtitle && (
          <p className="text-xs sm:text-sm text-[#4B5563] mt-1.5 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {status === "success" ? (
        <div className="p-6 sm:p-10 bg-[#FDFAF5] rounded-2xl border border-[#B8860B]/40 text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-full bg-[#1E3A8A] text-[#D4AF37] mx-auto flex items-center justify-center shadow-md">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="space-y-2">
            <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E3A8A]">
              Audit Request Confirmed
            </h4>
            <p className="text-sm sm:text-base text-[#374151] max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-[#1E3A8A]">{formData.fullName || "Partner"}</strong>.{" "}
              <strong>Your report will arrive by email within 48 hours</strong> for{" "}
              <span className="font-semibold text-[#1E3A8A]">{formData.address || "your property"}</span>.
            </p>
            <p className="text-xs text-[#6B7280] max-w-md mx-auto">
              We benchmark your property against comparable rentals nearby across Greater Seattle and the Eastside.
            </p>
          </div>

          {/* Calendly Booking Next Step */}
          <div className="p-5 sm:p-6 bg-white rounded-2xl border border-[#E6DCB8] max-w-lg mx-auto space-y-3 shadow-xs text-left">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#B8860B]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#1E3A8A]">
                Prefer to discuss your property now?
              </span>
            </div>
            <p className="text-xs text-[#4B5563] leading-relaxed">
              Skip the 48-hour wait and schedule a Free 30-Minute Property Consultation directly with our local team.
            </p>
            <button
              type="button"
              onClick={() => setBookingModalOpen(true)}
              className="w-full btn-gold py-3 px-5 rounded-xl font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Call on Calendly</span>
            </button>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs">
            <button
              onClick={handleReset}
              className="font-semibold text-[#B8860B] hover:text-[#1E3A8A] underline cursor-pointer"
            >
              Submit another property for audit
            </button>
            <span className="hidden sm:inline text-slate-300">•</span>
            <a
              href="tel:+14254146819"
              className="font-semibold text-[#1E3A8A] hover:text-[#B8860B] flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>Direct line: (425) 414-6819</span>
            </a>
          </div>

          <BookingModal
            isOpen={bookingModalOpen}
            onClose={() => setBookingModalOpen(false)}
            prefillName={formData.fullName}
            prefillEmail={formData.email}
          />
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot hidden input for spam protection */}
          <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
            <label htmlFor="b_company">Company</label>
            <input
              type="text"
              id="b_company"
              name="b_company"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            />
          </div>

          {/* Prominent Error Banner with phone fallback */}
          {status === "error" && (
            <div className="p-4 bg-red-50 border-2 border-red-300 text-red-900 text-xs sm:text-sm rounded-xl space-y-2">
              <div className="flex items-start gap-2.5">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold text-red-800">
                    We could not submit your audit request online.
                  </strong>
                  <p className="text-red-700 mt-0.5">
                    {errorMessage || "Please call us directly at (425) 414-6819 or email hellonestwiseco@gmail.com and we'll prepare your report immediately."}
                  </p>
                </div>
              </div>
              <div className="pt-2 border-t border-red-200 flex flex-wrap items-center gap-3">
                <a
                  href="tel:+14254146819"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 text-white font-bold text-xs hover:bg-red-700 transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call (425) 414-6819</span>
                </a>
                <a
                  href="mailto:hellonestwiseco@gmail.com"
                  className="text-xs font-semibold text-red-800 underline hover:text-red-950"
                >
                  hellonestwiseco@gmail.com
                </a>
              </div>
            </div>
          )}

          {/* Field 1: Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-bold uppercase tracking-wider text-[#1F2937] mb-1.5"
            >
              Full Name <span className="text-[#B8860B]">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              required
              placeholder="e.g. Eleanor Vance"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-[#D1D5DB] bg-[#FDFAF5]/60 text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition-all"
            />
          </div>

          {/* Field 2 & 3: Email and Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold uppercase tracking-wider text-[#1F2937] mb-1.5"
              >
                Email <span className="text-[#B8860B]">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="e.g. eleanor@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-[#D1D5DB] bg-[#FDFAF5]/60 text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-bold uppercase tracking-wider text-[#1F2937] mb-1.5"
              >
                Mobile Phone Number <span className="text-[#B8860B]">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                required
                placeholder="e.g. (206) 555-0194"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-[#D1D5DB] bg-[#FDFAF5]/60 text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Field 4: Property Address */}
          <div>
            <label
              htmlFor="address"
              className="block text-xs font-bold uppercase tracking-wider text-[#1F2937] mb-1.5"
            >
              Property Address <span className="text-[#B8860B]">*</span>
            </label>
            <input
              id="address"
              type="text"
              required
              placeholder="Street address, city"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-[#D1D5DB] bg-[#FDFAF5]/60 text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition-all"
            />
          </div>

          {/* Field 5: How is the property used today? (Pre-filled from ?segment=) */}
          <div>
            <label
              htmlFor="currentUsage"
              className="block text-xs font-bold uppercase tracking-wider text-[#1F2937] mb-1.5"
            >
              How is the property used today? <span className="text-[#B8860B]">*</span>
            </label>
            <CustomSelect
              id="currentUsage"
              name="currentUsage"
              required
              value={formData.currentUsage}
              onChange={(val) => setFormData({ ...formData, currentUsage: val })}
              options={USAGE_OPTIONS}
              placeholder="Select current property use…"
            />
          </div>

          {/* Extended Fields: Property Type, Bedrooms & Bathrooms */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="propertyType"
                className="block text-xs font-bold uppercase tracking-wider text-[#1F2937] mb-1.5"
              >
                Property Type
              </label>
              <CustomSelect
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={(val) => setFormData({ ...formData, propertyType: val })}
                options={PROPERTY_TYPE_OPTIONS}
                placeholder="Select property type…"
              />
            </div>

            <div>
              <label
                htmlFor="bedrooms"
                className="block text-xs font-bold uppercase tracking-wider text-[#1F2937] mb-1.5"
              >
                Bedrooms
              </label>
              <CustomSelect
                id="bedrooms"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={(val) => setFormData({ ...formData, bedrooms: val })}
                options={BEDROOM_OPTIONS}
                placeholder="Select bedrooms…"
              />
            </div>

            <div>
              <label
                htmlFor="bathrooms"
                className="block text-xs font-bold uppercase tracking-wider text-[#1F2937] mb-1.5"
              >
                Bathrooms
              </label>
              <CustomSelect
                id="bathrooms"
                name="bathrooms"
                value={formData.bathrooms}
                onChange={(val) => setFormData({ ...formData, bathrooms: val })}
                options={BATHROOM_OPTIONS}
                placeholder="Select bathrooms…"
              />
            </div>
          </div>

          {/* Optional Listing URL */}
          <div>
            <label
              htmlFor="listingUrl"
              className="block text-xs font-bold uppercase tracking-wider text-[#1F2937] mb-1.5"
            >
              Existing Listing URL{" "}
              <span className="text-[#9CA3AF] font-normal lowercase">(optional)</span>
            </label>
            <input
              id="listingUrl"
              type="url"
              placeholder="e.g. https://www.airbnb.com/rooms/12345678"
              value={formData.listingUrl}
              onChange={(e) => setFormData({ ...formData, listingUrl: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-[#D1D5DB] bg-[#FDFAF5]/60 text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition-all"
            />
          </div>

          {/* Consent Tick Box */}
          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                required
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#1E3A8A] focus:ring-[#B8860B] shrink-0"
              />
              <span className="text-xs text-[#4B5563] leading-relaxed">
                I agree to receive my property revenue report and follow-up communications from NestWise Group. No obligation.
              </span>
            </label>
          </div>

          {/* Real Cloudflare Turnstile container if site key is configured */}
          {turnstileSiteKey && (
            <div className="pt-1">
              <div ref={turnstileContainerRef} className="my-1 min-h-[65px]" />
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="w-full btn-gold py-4 px-6 rounded-xl font-serif font-bold text-base sm:text-lg tracking-wide uppercase flex items-center justify-center gap-3 shadow-luxury cursor-pointer disabled:opacity-75"
            >
              {submitting ? (
                <span className="inline-flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Preparing Your Property Audit...
                </span>
              ) : (
                <>
                  <span>{buttonText}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>

          {/* Submission Meta Wording */}
          <p className="text-[11px] text-[#6B7280] text-center leading-normal pt-1">
            We&apos;ll only use your details to prepare your report. No obligation.
          </p>
        </form>
      )}
    </div>
  );
}

export default function AuditForm(props: AuditFormProps) {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center text-xs text-[#64748B]">
          Loading audit form...
        </div>
      }
    >
      <AuditFormInner {...props} />
    </Suspense>
  );
}
