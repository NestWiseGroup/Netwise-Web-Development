"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Calendar, ShieldCheck, MapPin } from "@/components/shared/Icons";
import BookingModal from "@/components/shared/BookingModal";
import OwnerSegmentationModal from "@/components/shared/OwnerSegmentationModal";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 500, y: 300 });
  const [isHovered, setIsHovered] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [segmentationModalOpen, setSegmentationModalOpen] = useState(false);

  // Trigger "Which property owner are you" pop-up immediately after website loads
  useEffect(() => {
    setSegmentationModalOpen(true);
  }, []);

  // Dynamic pointer tracking for grid illumination
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
      aria-label="NestWise Hero"
    >
      {/* 
        Dynamic Interactive Cursor Illumination Effect 
        Follows cursor when hovered across the hero area
      */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: `radial-gradient(540px circle at ${mousePos.x}px ${mousePos.y}px, rgba(184, 134, 11, 0.16) 0%, rgba(30, 58, 138, 0.06) 50%, transparent 80%)`,
        }}
      />

      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
          isHovered ? "opacity-90" : "opacity-0"
        }`}
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(184, 134, 11, 0.30) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(184, 134, 11, 0.30) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          maskImage: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, black 25%, transparent 75%)`,
          WebkitMaskImage: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, black 25%, transparent 75%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Clean, High-Impact Copy */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">

            {/* Small Text Above - Clean Brand & Category Identifier */}
            <div className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#B8860B] select-none flex items-center gap-2 flex-wrap">
              <span>NestWise Group</span>
              <span className="text-[#B8860B]/50" aria-hidden="true">•</span>
              <span>Airbnb Co-Hosting Company</span>
            </div>

            {/* Main Headline: Highlighted & Prominent */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#1E3A8A] leading-[1.12] tracking-tight">
              You own the property. <br className="hidden sm:inline" />
              <span className="text-[#B8860B]">We run everything.</span>
            </h1>

            {/* Crisp, Simple & Engaging Subtitle */}
            <p className="text-base sm:text-lg text-[#374151] leading-relaxed font-normal max-w-2xl">
              NestWise Group coordinates the complete rental operation across Washington—from smart nightly pricing to turnovers and 24/7 guest care—so your property earns more while you stay hands-off.
            </p>

            {/* Clean CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setSegmentationModalOpen(true)}
                className="btn-gold py-3.5 px-7 rounded-xl font-serif font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-luxury hover:shadow-gold-glow transition-all cursor-pointer"
                aria-label="See What My Property Could Earn - Select Owner Path"
              >
                <span>See What My Property Could Earn</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => setBookingModalOpen(true)}
                className="py-3.5 px-6 rounded-xl font-serif font-bold text-xs sm:text-sm text-[#1E3A8A] bg-white border border-[#E6DCB8] hover:border-[#B8860B] hover:bg-[#FDFAF5] transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                aria-label="Book a Free 30-Minute Call"
              >
                <Calendar className="w-4 h-4 text-[#B8860B]" aria-hidden="true" />
                <span>Book a Free 30-Minute Call</span>
              </button>
            </div>

            {/* Clean Trust Indicators without capsule styling */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold text-[#1E3A8A]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#B8860B] shrink-0" aria-hidden="true" />
                <span>Free Property Analysis</span>
              </div>
              <span className="text-[#B8860B] font-bold" aria-hidden="true">•</span>
              <span>No Obligation</span>
              <span className="text-[#B8860B] font-bold" aria-hidden="true">•</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#B8860B] shrink-0" aria-hidden="true" />
                <span>Local Washington Operations</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Architectural Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#E6DCB8] shadow-luxury-lg bg-white p-2.5">
              <div className="relative h-[360px] sm:h-[440px] w-full rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=85"
                  alt="Professionally operated residential property managed by NestWise Group in Washington"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

      <OwnerSegmentationModal
        isOpen={segmentationModalOpen}
        onClose={() => setSegmentationModalOpen(false)}
      />
    </section>
  );
}
