"use client";

import React from "react";
import Link from "next/link";
import {
  Search,
  Globe,
  TrendingUp,
  MessageSquare,
  Sparkles,
  Wrench,
  ShieldCheck,
  FileText,
  ArrowRight,
} from "@/components/shared/Icons";

export default function MarketOperationsSection() {
  const operations = [
    {
      step: "01",
      title: "Market analysis",
      description:
        "Continuous evaluation of neighborhood comparables and seasonal demand to position your home for maximum yield.",
      icon: Search,
    },
    {
      step: "02",
      title: "Listing optimization",
      description:
        "Channel-tailored photography, amenity tagging, and copy designed to boost algorithm rankings on Airbnb, Vrbo, and direct channels.",
      icon: Globe,
    },
    {
      step: "03",
      title: "Dynamic pricing",
      description:
        "Intelligent nightly rate adjustments informed by local events, competitor pacing, and seasonality rather than static rates.",
      icon: TrendingUp,
    },
    {
      step: "04",
      title: "Guest experience",
      description:
        "Responsive 24/7 guest communication from initial inquiry through checkout, protecting your reviews and personal time.",
      icon: MessageSquare,
    },
    {
      step: "05",
      title: "Cleaning and turnover",
      description:
        "Professional turnover scheduling with mandatory photo-verified checklists before every incoming guest.",
      icon: Sparkles,
    },
    {
      step: "06",
      title: "Maintenance",
      description:
        "Direct dispatch of trusted local technicians to resolve repairs promptly without taking over your day.",
      icon: Wrench,
    },
    {
      step: "07",
      title: "Property oversight",
      description:
        "Routine physical inspections and condition checkpoints during turnovers to catch issues early and safeguard the asset.",
      icon: ShieldCheck,
    },
    {
      step: "08",
      title: "Owner reporting",
      description:
        "Clear, transparent monthly financial statements detailing revenue, occupancy, and expenses in one straightforward view.",
      icon: FileText,
    },
  ];

  return (
    <section
      id="market-operations"
      className="py-20 lg:py-28 bg-[#FDFAF5] border-b border-[#E6DCB8]/60 relative overflow-hidden"
      aria-labelledby="market-ops-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header: Single Cohesive Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8860B] select-none">
            FULL-SERVICE MARKET OPERATIONS
          </div>

          <h2
            id="market-ops-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] tracking-tight leading-[1.15]"
          >
            Full-Service Market &amp; Property Operations
          </h2>

          <p className="text-base sm:text-lg text-[#374151] leading-relaxed max-w-2xl mx-auto font-normal">
            Every component of your rental business coordinated as a cohesive operating system under one experienced management team.
          </p>
        </div>

        {/* Cohesive List Under Single Heading */}
        <ol
          role="list"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          aria-label="Eight-part market operations services"
        >
          {operations.map((item) => {
            const IconComponent = item.icon;
            return (
              <li
                key={item.step}
                className="bg-white rounded-2xl p-6 border border-[#E6DCB8] shadow-sm hover:border-[#B8860B] hover:shadow-luxury transition-all duration-300 flex flex-col group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-sm font-extrabold text-[#B8860B]" aria-hidden="true">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FDFAF5] border border-[#E6DCB8] flex items-center justify-center text-[#B8860B] group-hover:bg-[#1E3A8A] group-hover:text-[#D4AF37] transition-colors">
                      <IconComponent className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#1E3A8A] mb-2 capitalize">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Bottom Cohesive Reassurance Banner */}
        <div className="mt-14 max-w-4xl mx-auto p-6 sm:p-7 rounded-2xl bg-white border border-[#E6DCB8] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="font-serif text-base sm:text-lg font-bold text-[#1E3A8A]">
              One Property. Multiple Booking Channels. One Management Team.
            </div>
            <p className="text-xs text-[#6B7280] mt-0.5">
              Coordinated from listing creation to monthly statement without owner interruptions.
            </p>
          </div>

          <Link
            href="/audit"
            className="btn-gold py-2.5 px-6 rounded-xl font-serif font-bold text-xs uppercase tracking-wider whitespace-nowrap shadow-md flex items-center gap-2"
          >
            <span>Analyze My Property</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  );
}
