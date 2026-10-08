"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Sparkles,
  Home,
  CheckCircle2,
  Calendar,
} from "@/components/shared/Icons";
import BookingModal from "@/components/shared/BookingModal";

export default function OwnerSegmentationSection() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const paths = [
    {
      id: "long-term",
      tag: "Currently Long-Term",
      title: "Currently a Long-Term Rental",
      summary:
        "Evaluate whether a professionally operated short-term or mid-term rental strategy beats your current monthly lease income.",
      ctaText: "Analyze My Property",
      ctaHref: "/audit?segment=long-term",
      icon: Home,
      highlights: [
        "STR vs. fixed lease revenue comparison",
        "Local Washington zoning & regulation review",
        "Zero obligation to switch",
      ],
      featured: false,
    },
    {
      id: "existing-str",
      tag: "Existing Host",
      title: "Already an Airbnb Host",
      summary:
        "Hand off 11pm messages, daily pricing adjustments, cleaner scheduling, and maintenance to our local team.",
      ctaText: "Improve My Performance",
      ctaHref: "/audit?segment=existing-str",
      icon: TrendingUp,
      highlights: [
        "End midnight guest interruptions & lockouts",
        "Daily demand-informed algorithmic pricing",
        "Verified turnovers with local teams",
      ],
      featured: true,
    },
    {
      id: "vacant-investment",
      tag: "Vacant / Second Home",
      title: "Vacant or Investment Home",
      summary:
        "Launch a high-performing, turnkey rental business without taking on a second job—with full flexibility for personal stays.",
      ctaText: "Explore Property Potential",
      ctaHref: "/audit?segment=vacant",
      icon: Sparkles,
      highlights: [
        "Turnkey listing launch & setup guidance",
        "Flexible owner calendar for personal use",
        "Hands-on local Washington operations",
      ],
      featured: false,
    },
  ];

  return (
    <section
      id="owner-segmentation"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E6DCB8]/60 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#B8860B] select-none">
            OWNER PATHWAYS
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] tracking-tight leading-[1.16]">
            Which Property Owner <span className="text-[#B8860B]">Are You?</span>
          </h2>

          <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-xl mx-auto font-normal">
            Select your current situation below to see your tailored operational strategy and revenue forecast.
          </p>
        </div>

        {/* 3 Streamlined Column Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {paths.map((path) => {
            const IconComponent = path.icon;
            return (
              <div
                key={path.id}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 relative group ${
                  path.featured
                    ? "bg-[#1E3A8A] text-white shadow-xl border-2 border-[#B8860B] lg:-translate-y-1.5"
                    : "bg-[#FDFAF5] text-slate-900 border border-[#E6DCB8] shadow-sm hover:border-[#B8860B] hover:shadow-md"
                }`}
              >
                {/* Popular Badge for Featured Host Path */}
                {path.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#B8860B] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider py-0.5 px-3.5 rounded-full shadow-md whitespace-nowrap">
                    Most Common for Active Hosts
                  </div>
                )}

                <div className="space-y-4">
                  {/* Top Bar with Icon and Category Tag */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                        path.featured
                          ? "bg-white/10 text-[#D4AF37] border border-white/20"
                          : "bg-white text-[#B8860B] border border-[#E6DCB8] group-hover:border-[#B8860B]"
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                        path.featured
                          ? "bg-white/10 text-[#D4AF37] border border-white/20"
                          : "bg-white text-[#B8860B] border border-[#E6DCB8]"
                      }`}
                    >
                      {path.tag}
                    </span>
                  </div>

                  {/* Title & Short Scannable Summary */}
                  <div>
                    <h3
                      className={`font-serif text-lg sm:text-xl font-bold mb-2 leading-snug ${
                        path.featured ? "text-white" : "text-[#1E3A8A]"
                      }`}
                    >
                      {path.title}
                    </h3>

                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        path.featured ? "text-slate-200" : "text-[#4B5563]"
                      }`}
                    >
                      {path.summary}
                    </p>
                  </div>

                  {/* Concise Checklist (3 Bullet Points) */}
                  <div
                    className={`pt-4 border-t space-y-2 text-xs font-medium ${
                      path.featured ? "border-white/10 text-slate-100" : "border-[#E6DCB8]/60 text-[#374151]"
                    }`}
                  >
                    {path.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            path.featured ? "text-[#D4AF37]" : "text-[#B8860B]"
                          }`}
                        />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-5 mt-5 border-t border-slate-100/60">
                  <Link
                    href={path.ctaHref}
                    className={`w-full py-3 px-5 rounded-xl font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      path.featured
                        ? "btn-gold text-white shadow-md hover:shadow-gold-glow"
                        : "bg-[#1E3A8A] text-white hover:bg-[#B8860B] shadow-xs"
                    }`}
                  >
                    <span>{path.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Consultation Link */}
        <div className="mt-10 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-3 px-5 rounded-xl bg-[#FDFAF5] border border-[#E6DCB8] text-xs text-[#4B5563]">
            <span>Not sure which category fits your situation best?</span>
            <button
              type="button"
              onClick={() => setBookingModalOpen(true)}
              className="text-[#1E3A8A] font-bold hover:text-[#B8860B] underline flex items-center gap-1 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>Book a Free 30-Minute Consultation Call</span>
            </button>
          </div>
        </div>

      </div>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </section>
  );
}
