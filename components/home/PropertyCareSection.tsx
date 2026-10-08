"use client";

import React from "react";
import Image from "next/image";
import { Home, ShieldCheck, Wrench, Eye } from "@/components/shared/Icons";

export default function PropertyCareSection() {
  const pillars = [
    {
      title: "Property Care",
      icon: Home,
      description: "Rigorous turnover coordination and hospitality readiness checks before every guest arrival.",
    },
    {
      title: "Safety & Security",
      icon: ShieldCheck,
      description: "Guest vetting, smart lock integration, and documented operational standards for every stay.",
    },
    {
      title: "Maintenance",
      icon: Wrench,
      description: "Proactive inspections and trusted local technician dispatch whenever attention is required.",
    },
    {
      title: "Owner Visibility",
      icon: Eye,
      description: "Transparent real-time portal updates on maintenance resolutions, expenses, and asset condition.",
    },
  ];

  return (
    <section
      id="property-care"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E6DCB8]/60 relative overflow-hidden"
      aria-label="Property Care and Asset Management"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Luxury Card Container: Left Text, Right Imagery */}
        <div className="bg-[#FDFAF5] rounded-3xl border border-[#E6DCB8] shadow-luxury overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">

            {/* Left Column: Messaging & 4 Operational Pillars */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between order-2 lg:order-1">
              <div>
                {/* Two-Line Tagline: Line 1 in one single row + Line 2 Underlined in one row */}
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[30px] xl:text-[36px] font-extrabold tracking-tight leading-[1.25] mb-4">
                  <span className="text-[#1E3A8A] block lg:whitespace-nowrap">
                    Your property is more than a booking.
                  </span>
                  <span className="text-[#B8860B] block mt-1 underline decoration-[#B8860B]/70 decoration-2 underline-offset-8 lg:whitespace-nowrap">
                    We manage it like an investment.
                  </span>
                </h2>

                {/* Concise, Scannable Narrative */}
                <p className="text-sm sm:text-base text-[#374151] leading-relaxed max-w-2xl mb-8 font-normal pt-2">
                  Regular cleanings and turnovers provide continuous opportunities to spot concerns early. We preserve property condition and standards so you retain long-term asset value without handling day-to-day issues.
                </p>

                {/* 4 Pillars with Uniform Brand Palette (Navy & Gold - No Green) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                  {pillars.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3.5 group">
                        {/* Consistent Royal Navy Circular Badge with Gold Accent */}
                        <div className="w-11 h-11 rounded-full bg-[#1E3A8A] flex items-center justify-center text-[#D4AF37] shrink-0 shadow-xs group-hover:scale-105 group-hover:bg-[#152a65] transition-all">
                          <IconComponent className="w-5 h-5 text-[#D4AF37]" aria-hidden="true" />
                        </div>

                        <div className="space-y-0.5">
                          <h3 className="font-serif text-sm sm:text-base font-bold text-[#1E3A8A] leading-snug">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-[13px] text-[#4B5563] leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Subtle Trust Accent */}
              <div className="mt-8 pt-6 border-t border-[#E6DCB8]/60 flex items-center justify-between text-xs text-[#6B7280]">
                <span>Documented Turnover Audits • Licensed Local Trades</span>
                <span className="hidden sm:inline font-semibold text-[#1E3A8A]">Bellevue &amp; Greater Seattle</span>
              </div>
            </div>

            {/* Right Column: Architectural Photography */}
            <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[420px] lg:min-h-full order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=85"
                alt="Luxury bedroom overlooking lake and mountains managed by NestWise Group"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-black/10 pointer-events-none" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
