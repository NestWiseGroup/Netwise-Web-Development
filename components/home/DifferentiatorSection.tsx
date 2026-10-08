"use client";

import React from "react";
import Image from "next/image";
import { BarChart3, Users, ShieldCheck, FileText } from "@/components/shared/Icons";

export default function DifferentiatorSection() {
  const features = [
    {
      icon: BarChart3,
      title: "AI-Driven Market Intelligence",
      description:
        "We analyze local demand, comparable properties, seasonality, events and booking trends to make smarter pricing decisions.",
    },
    {
      icon: Users,
      title: "Hands-On Property Operations",
      description:
        "Our local team handles guests, cleaners, maintenance, vendors and property readiness.",
    },
    {
      icon: ShieldCheck,
      title: "Property Care & Oversight",
      description:
        "Regular turnovers and operational oversight help keep your property clean, competitive and well maintained.",
    },
    {
      icon: FileText,
      title: "Performance Transparency",
      description:
        "Owners receive clear reports on bookings, revenue, occupancy and expenses.",
    },
  ];

  return (
    <section
      id="differentiator"
      className="py-16 sm:py-20 lg:py-24 bg-[#FDFAF5] border-b border-[#E6DCB8]/60 relative overflow-hidden"
      aria-label="The NestWise Difference"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Luxury Card Container */}
        <div className="bg-white rounded-3xl border border-[#E6DCB8] shadow-luxury overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">

            {/* Left Column: Scenic Luxury Living Room Visual */}
            <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[420px] lg:min-h-full">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85"
                alt="Luxury lakefront residence operated by NestWise Group in Washington"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              {/* Subtle Warm Vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10 pointer-events-none" />
            </div>

            {/* Right Column: 2x2 Clean Feature Grid */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                {/* Overline in Warm Gold */}
                <div className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#B8860B] mb-2 select-none">
                  The NestWise Difference
                </div>

                {/* Primary Heading */}
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-[#1E3A8A] tracking-tight leading-[1.16] mb-8">
                  Smart Technology. Real People. <br className="hidden sm:inline" />
                  Local Operations.
                </h2>

                {/* 2x2 Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-7">
                  {features.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3.5 group">
                        {/* Royal Navy Rounded Square Badge with Gold Icon */}
                        <div className="w-11 h-11 rounded-xl bg-[#1E3A8A] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 group-hover:bg-[#152a65] transition-all">
                          <IconComponent className="w-5 h-5 text-[#D4AF37]" aria-hidden="true" />
                        </div>

                        {/* Title & Description */}
                        <div className="space-y-1">
                          <h3 className="font-serif text-sm sm:text-base font-bold text-[#1E3A8A] leading-snug">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Tagline */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-sm sm:text-base font-serif font-bold text-[#1E3A8A]">
                  Technology behind the decisions.{" "}
                  <span className="text-[#B8860B]">People behind the service.</span>
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
