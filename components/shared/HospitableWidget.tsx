"use client";

import React, { useEffect } from "react";
import { Calendar, ShieldCheck, CheckCircle2 } from "@/components/shared/Icons";

interface HospitableWidgetProps {
  propertyId?: string;
  widgetId?: string;
  className?: string;
}

/**
 * Hospitable Direct Booking Widget Wrapper
 * 
 * When Hospitable is active:
 * - Pass `propertyId` or `widgetId` to render the interactive live booking widget.
 * - Direct bookings eliminate OTA platform commissions (0% platform cut to Airbnb/Vrbo).
 * 
 * In setup/planning mode (propertyId not yet supplied):
 * - Displays a branded, responsive direct booking placeholder ready for instant activation.
 */
export default function HospitableWidget({
  propertyId,
  widgetId,
  className = "",
}: HospitableWidgetProps) {
  useEffect(() => {
    if (!propertyId && !widgetId) return;

    // Dynamically inject Hospitable embed script once account credentials are configured
    const scriptId = "hospitable-booking-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://embed.hospitable.com/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [propertyId, widgetId]);

  if (propertyId || widgetId) {
    return (
      <div className={`w-full rounded-2xl overflow-hidden border border-[#E6DCB8] bg-white shadow-md ${className}`}>
        <div
          className="hospitable-booking-widget"
          data-property-id={propertyId}
          data-widget-id={widgetId}
        />
      </div>
    );
  }

  // Pre-configured Direct Booking Container (Ready for Hospitable Account Activation)
  return (
    <div
      className={`rounded-3xl border border-[#E6DCB8] bg-white p-8 shadow-luxury text-center space-y-5 max-w-xl mx-auto ${className}`}
    >
      <div className="w-12 h-12 rounded-2xl bg-[#1E3A8A]/5 border border-[#B8860B]/30 text-[#B8860B] mx-auto flex items-center justify-center">
        <Calendar className="w-6 h-6" />
      </div>

      <div className="space-y-2">
        <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#B8860B] select-none">
          Direct Booking Engine · Powered by Hospitable
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#1E3A8A]">
          Direct Reservation Portal
        </h3>
        <p className="text-xs sm:text-sm text-[#4B5563] max-w-md mx-auto leading-relaxed">
          Book directly with NestWise to save on guest OTA service fees. Includes instant calendar synchronization and secure payment processing.
        </p>
      </div>

      <div className="pt-2 grid grid-cols-2 gap-3 text-left">
        <div className="p-3 rounded-xl bg-[#FDFAF5] border border-[#E6DCB8] flex items-center gap-2 text-xs font-semibold text-[#1E3A8A]">
          <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0" />
          <span>0% Platform Commission</span>
        </div>
        <div className="p-3 rounded-xl bg-[#FDFAF5] border border-[#E6DCB8] flex items-center gap-2 text-xs font-semibold text-[#1E3A8A]">
          <ShieldCheck className="w-4 h-4 text-[#B8860B] shrink-0" />
          <span>Guaranteed Best Nightly Rate</span>
        </div>
      </div>
    </div>
  );
}
