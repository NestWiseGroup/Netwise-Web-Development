"use client";

import React, { useState, useMemo } from "react";
import { Calendar, X } from "@/components/shared/Icons";

interface CalendlyEmbedProps {
  url?: string;
  prefillName?: string;
  prefillEmail?: string;
  hostName?: string;
  hostTitle?: string;
  className?: string;
  onClose?: () => void;
}

export default function CalendlyEmbed({
  url,
  prefillName = "",
  prefillEmail = "",
  hostName = "NestWise Group Team",
  hostTitle = "Free 30-Minute Property Consultation",
  className = "",
  onClose,
}: CalendlyEmbedProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Configured Calendly URL (supports Vercel env variable NEXT_PUBLIC_CALENDLY_URL)
  const defaultCalendlyUrl =
    url ||
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/hellonestwiseco/30min";

  // Build full URL with query parameters for prefilling and clean embedding
  const calendlySrc = useMemo(() => {
    try {
      const parsed = new URL(defaultCalendlyUrl);
      parsed.searchParams.set("hide_gdpr_banner", "1");
      parsed.searchParams.set("primary_color", "1e3a8a");
      parsed.searchParams.set("text_color", "1f2937");
      if (prefillName) {
        parsed.searchParams.set("name", prefillName);
      }
      if (prefillEmail) {
        parsed.searchParams.set("email", prefillEmail);
      }
      if (typeof window !== "undefined") {
        parsed.searchParams.set("embed_domain", window.location.hostname);
        parsed.searchParams.set("embed_type", "Inline");
      }
      return parsed.toString();
    } catch {
      return defaultCalendlyUrl;
    }
  }, [defaultCalendlyUrl, prefillName, prefillEmail]);

  return (
    <div
      className={`rounded-2xl border border-[#E6DCB8] bg-white overflow-hidden flex flex-col shadow-luxury ${className}`}
    >
      {/* Header Bar - Compact for laptop viewports */}
      <div className="bg-[#1E3A8A] text-white px-4 py-2.5 sm:px-5 sm:py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-[#B8860B]/30">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-white/10 text-[#D4AF37] border border-white/20 flex items-center justify-center font-serif font-bold text-xs shrink-0">
            <Calendar className="w-4 h-4 text-[#D4AF37]" />
          </div>
          <div>
            <div className="font-serif font-bold text-sm sm:text-base text-white leading-tight">
              {hostTitle}
            </div>
            <div className="text-[11px] text-slate-300 flex items-center gap-1.5 mt-0.5">
              <span>{hostName}</span>
              <span>•</span>
              <span className="text-[#D4AF37]">Local Timezone</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 sm:self-center">
          <a
            href={calendlySrc}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-semibold text-slate-200 hover:text-white underline hover:no-underline flex items-center gap-1 transition-colors"
          >
            <span>Open in new tab</span>
            <span aria-hidden="true">↗</span>
          </a>

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer flex items-center justify-center"
              aria-label="Close modal"
              title="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Calendly Interactive Embed Frame */}
      <div className="relative w-full h-[490px] sm:h-[520px] md:h-[540px] bg-[#FAFAF8]">
        {!iframeLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-2.5 z-10 bg-[#FAFAF8]">
            <div className="w-7 h-7 border-2 border-[#1E3A8A] border-t-transparent rounded-full animate-spin" />
            <p className="text-xs font-semibold text-[#1E3A8A]">
              Loading NestWise consultation calendar...
            </p>
            <p className="text-[11px] text-[#6B7280]">
              If it takes a moment, you can{" "}
              <a
                href={calendlySrc}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B8860B] underline font-bold"
              >
                book directly on Calendly
              </a>{" "}
              or call us at{" "}
              <a href="tel:+14254146819" className="text-[#1E3A8A] font-bold">
                (425) 414-6819
              </a>
              .
            </p>
          </div>
        )}

        <iframe
          src={calendlySrc}
          title="NestWise Consultation Scheduling"
          className="w-full h-full border-0"
          onLoad={() => setIframeLoaded(true)}
          allow="camera; microphone; autoplay; clipboard-write; encrypted-media"
        />
      </div>
    </div>
  );
}
