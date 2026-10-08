"use client";

import React from "react";
import Link from "next/link";
import {
  TrendingUp,
  MessageSquare,
  Sparkles,
  Wrench,
  Globe,
  FileText,
  ArrowRight,
} from "@/components/shared/Icons";

export default function OwnershipSection() {
  const microcopies = [
    {
      title: "Pricing",
      icon: TrendingUp,
      desc: "Dynamic daily rates adjusted for demand, seasonality, and local events.",
    },
    {
      title: "Guests",
      icon: MessageSquare,
      desc: "Prompt 24/7 guest communication from first inquiry through checkout.",
    },
    {
      title: "Cleaning",
      icon: Sparkles,
      desc: "Hotel-grade turnover coordination and restocking before every arrival.",
    },
    {
      title: "Maintenance",
      icon: Wrench,
      desc: "Proactive property oversight and rapid local vendor dispatch.",
    },
    {
      title: "Bookings",
      icon: Globe,
      desc: "Synchronized calendars across Airbnb, Vrbo, and direct channels.",
    },
    {
      title: "Reporting",
      icon: FileText,
      desc: "Transparent owner statements, real-time revenue, and occupancy tracking.",
    },
  ];

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E6DCB8]/60 relative overflow-hidden"
      aria-labelledby="ownership-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. Primary Ownership Headline & Dilemma */}
        <div className="text-center space-y-5 max-w-4xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8860B] select-none">
            OWNERSHIP WITHOUT THE WORKLOAD
          </div>

          <h2
            id="ownership-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] tracking-tight leading-[1.16]"
          >
            Owning Airbnb rental property shouldn&apos;t be{" "}
            <span className="text-[#B8860B] underline decoration-[#B8860B]/40 decoration-wavy underline-offset-8">
              your second job.
            </span>
          </h2>

          <div className="space-y-3 text-base sm:text-lg text-[#374151] leading-relaxed max-w-3xl mx-auto">
            <p>
              A rental property can be a valuable asset, but running one successfully requires constant attention. Guests need answers. Prices need to change with demand. Cleaners need schedules. Calendars need to stay synchronized. Maintenance issues need quick coordination. Reviews need attention. Revenue and expenses need to be understood.
            </p>
            <p className="text-sm sm:text-base text-[#4B5563] font-medium">
              What starts as an investment can quickly become another job. NestWise is built to take that operational workload off the owner&apos;s hands.
            </p>
          </div>
        </div>

        {/* 2. Coordinated Operating System Pivot */}
        <div className="mt-14 p-7 sm:p-9 rounded-3xl bg-[#FDFAF5] border border-[#E6DCB8] shadow-sm max-w-4xl mx-auto text-center space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[#B8860B]">
            ONE MANAGEMENT TEAM RESPONSIBLE FOR THE ENTIRE OPERATION
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1E3A8A]">
            You keep the property. We manage the difficult operations part.
          </h3>
          <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-3xl mx-auto">
            Our team brings pricing, guests, cleaning, maintenance, bookings, property oversight, and reporting into one coordinated operating system. Instead of managing multiple vendors, platforms, messages, and calendars yourself, you have one management team responsible for keeping the operation moving.
          </p>
        </div>

        {/* 3. Suggested Six-Icon Microcopy Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {microcopies.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#E6DCB8] shadow-xs hover:border-[#B8860B] hover:shadow-md transition-all flex flex-col group"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-[#FDFAF5] border border-[#E6DCB8] flex items-center justify-center text-[#B8860B] group-hover:bg-[#1E3A8A] group-hover:text-[#D4AF37] transition-colors">
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  </div>

                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#1E3A8A] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contextual Link */}
        <div className="mt-10 text-center">
          <Link
            href="/audit"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-serif font-bold uppercase tracking-wider text-[#1E3A8A] hover:text-[#B8860B] transition-colors"
          >
            <span>Learn how we coordinate your property&apos;s daily operations</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  );
}
