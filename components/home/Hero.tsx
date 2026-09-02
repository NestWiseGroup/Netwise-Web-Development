"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Sparkles } from "@/components/shared/Icons";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 500, y: 300 });
  const [isHovered, setIsHovered] = useState(false);

  // Dynamic interactive pointer tracking for Antigravity-style grid illumination
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsHovered(true);
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 bg-[#FDFAF5] border-b border-[#E6DCB8]/60 overflow-hidden cursor-default select-none"
    >
      {/* 
        Hero Grid: Completely HIDDEN by default. 
        ONLY visible and illuminated around the cursor when hovered (Bigger 56px grid size) 
      */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: `radial-gradient(480px circle at ${mousePos.x}px ${mousePos.y}px, rgba(184, 134, 11, 0.16) 0%, rgba(30, 58, 138, 0.06) 50%, transparent 80%)`,
        }}
      />

      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
          isHovered ? "opacity-90" : "opacity-0"
        }`}
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(184, 134, 11, 0.35) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(184, 134, 11, 0.35) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          maskImage: `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, black 25%, transparent 75%)`,
          WebkitMaskImage: `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, black 25%, transparent 75%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Ultra-Concise, High-Impact Copy & CTA */}
          <div className="lg:col-span-6 flex flex-col space-y-5 text-left animate-in fade-in slide-in-from-bottom-4 duration-700">
            
            {/* Small Overline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A8A]/5 border border-[#B8860B]/30 self-start shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#B8860B]">
                PREMIUM AI CO-HOSTING
              </span>
            </div>

            {/* Clear, Punchy Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] leading-[1.12] tracking-tight">
              Maximize Earning. Erase Effort.
            </h1>

            {/* Concise Value Proposition (Direct & To The Point) */}
            <p className="text-base sm:text-lg text-[#374151] leading-relaxed font-normal max-w-lg">
              Full-scale luxury property operations across Airbnb and VRBO for a flat <strong className="text-[#1E3A8A] font-bold">22% fee</strong>. Zero lock-in contracts. Complete local accountability.
            </p>

            {/* Trust & Location */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#4B5563] font-medium">
              <MapPin className="w-4 h-4 text-[#B8860B] shrink-0" />
              <span>Headquartered in <strong className="text-[#1E3A8A]">Bellevue, WA</strong> · Greater Seattle & Eastside</span>
            </div>

            {/* CTA Button & Exact Sub-Mention */}
            <div className="pt-2 flex flex-col items-start gap-2">
              <Link
                href="/audit"
                className="btn-gold py-4 px-8 rounded-xl font-serif font-bold text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-3 shadow-luxury hover:shadow-gold-glow transition-all"
              >
                <span>Request Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-xs font-semibold text-[#B8860B] tracking-wide pl-1">
                Get your free 48-hour revenue audit
              </span>
            </div>

          </div>

          {/* Right Column: Clean Luxury Architecture Photo (No Overlays) with Entrance Animation */}
          <div className="lg:col-span-6 relative animate-in fade-in zoom-in-95 duration-700 delay-150">
            <div className="relative rounded-3xl overflow-hidden border border-[#E6DCB8] shadow-luxury-lg bg-white p-2.5 hover:border-[#B8860B] transition-all duration-500 hover:shadow-2xl">
              <div className="relative h-[360px] sm:h-[440px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85"
                  alt="Modern Luxury Property Co-Hosted by NestWise Group in Bellevue WA"
                  fill
                  priority
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
