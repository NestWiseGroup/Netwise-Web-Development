"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "@/components/shared/Icons";
import Link from "next/link";

// Authentic Brand Logos for OTA & Direct Channels
function AirbnbLogo() {
  return (
    <svg viewBox="0 0 32 32" className="w-7 h-7" fill="#FF385C" aria-label="Airbnb">
      <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.479.96 3.095.143 1.765-.453 3.402-1.636 4.493-1.156 1.066-2.73 1.629-4.321 1.547-2.091-.107-3.951-1.282-5.101-3.21l-.431-.762-.431.762c-1.15 1.928-3.01 3.103-5.101 3.21-1.591.082-3.165-.481-4.321-1.547-1.183-1.091-1.779-2.728-1.636-4.493.05-.616.293-1.504.96-3.095l.145-.353c.986-2.296 5.146-11.006 7.1-14.836l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.298 0-2.316.637-3.414 2.658l-.485.932C10.158 10.323 6.03 18.96 5.074 21.19l-.134.327c-.596 1.423-.797 2.146-.837 2.645-.102 1.258.324 2.417 1.157 3.187.81.748 1.905 1.144 3.019 1.086 1.558-.08 2.97-.991 3.864-2.492l.707-1.222.707 1.222c.894 1.501 2.306 2.412 3.864 2.492 1.114.058 2.209-.338 3.019-1.086.833-.77 1.259-1.929 1.157-3.187-.04-.499-.241-1.222-.837-2.645l-.134-.327c-.956-2.23-5.084-10.867-7.027-14.599l-.485-.932C18.316 3.637 17.298 3 16 3zm0 11a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z" />
    </svg>
  );
}

function VrboLogo() {
  return (
    <svg viewBox="0 0 68 24" className="h-5 w-auto" fill="none" aria-label="Vrbo">
      <path d="M7.6 20.4L0 3.8h4.5l5.4 12.4L15.3 3.8h4.5l-7.6 16.6H7.6z" fill="#1C3F73" />
      <path d="M22.5 8.6h3.8v2.1c.9-1.5 2.5-2.4 4.5-2.4h.9v4.1h-1.4c-2.4 0-4 1.5-4 4.3v3.7h-3.8V8.6z" fill="#1C3F73" />
      <path d="M33.2 2.5h3.8v6.7c1-1.2 2.6-1.9 4.6-1.9 3.6 0 6.4 2.8 6.4 6.6s-2.8 6.7-6.4 6.7c-2 0-3.6-.7-4.6-1.9v1.7h-3.8V2.5zm7.3 8.3c-2.1 0-3.7 1.6-3.7 3.7s1.6 3.7 3.7 3.7 3.7-1.6 3.7-3.7-1.6-3.7-3.7-3.7z" fill="#1C3F73" />
      <path d="M57.6 7.3c4 0 7.2 3.1 7.2 6.9s-3.2 6.9-7.2 6.9-7.2-3.1-7.2-6.9 3.2-6.9 7.2-6.9zm0 3.5c-2.1 0-3.7 1.5-3.7 3.4s1.6 3.4 3.7 3.4 3.7-1.5 3.7-3.4-1.6-3.4-3.7-3.4z" fill="#1C3F73" />
      <circle cx="65.5" cy="5.5" r="2.2" fill="#00B2D6" />
    </svg>
  );
}

function BookingLogo() {
  return (
    <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" aria-label="Booking.com">
      <rect width="32" height="32" rx="7" fill="#003580" />
      <path d="M8 8h7.2c2.5 0 4.3 1.5 4.3 3.6 0 1.4-.8 2.6-2.1 3.1 1.7.5 2.7 1.8 2.7 3.5 0 2.4-1.9 4.1-4.7 4.1H8V8zm3.6 2.8v3h3.2c1.2 0 2-.6 2-1.5s-.8-1.5-2-1.5h-3.2zm0 5.4v3.3h3.6c1.3 0 2.2-.7 2.2-1.65s-.9-1.65-2.2-1.65h-3.6z" fill="#FFFFFF" />
      <circle cx="24" cy="20.5" r="2" fill="#006CE4" />
    </svg>
  );
}

function GoogleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" aria-label="Google">
      <path
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
        fill="#4285F4"
      />
      <path
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.25 21.36 7.35 24 12 24z"
        fill="#34A853"
      />
      <path
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.94 0 12s.46 3.84 1.26 5.42l4.02-3.15z"
        fill="#FBBC05"
      />
      <path
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.25 2.64 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
        fill="#EA4335"
      />
    </svg>
  );
}

function AgodaLogo() {
  return (
    <svg viewBox="0 0 36 32" className="w-7 h-6" fill="none" aria-label="Agoda">
      <circle cx="18" cy="7" r="4.5" fill="#FF4742" />
      <circle cx="6.5" cy="14" r="4" fill="#53B548" />
      <circle cx="29.5" cy="14" r="4" fill="#00AEEF" />
      <circle cx="11.5" cy="24.5" r="4" fill="#FBAF18" />
      <circle cx="24.5" cy="24.5" r="4" fill="#92278F" />
    </svg>
  );
}

function DirectLogo() {
  return (
    <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" aria-label="Direct Booking">
      <rect width="32" height="32" rx="7" fill="#1E3A8A" />
      <path d="M16 6L24 12V23C24 24.1 23.1 25 22 25H10C8.9 25 8 24.1 8 23V12L16 6Z" stroke="#D4AF37" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="16" cy="16" r="2.5" fill="#D4AF37" />
      <path d="M16 18.5V22" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function ChannelsSection() {
  const channels = [
    {
      name: "Airbnb",
      category: "Global Network",
      tag: "Full Integration",
      detail: "Optimized title, verified amenities, and synchronized availability.",
      logo: <AirbnbLogo />,
    },
    {
      name: "Vrbo",
      category: "Family & Vacation",
      tag: "Premier Placement",
      detail: "Attracting high-value multi-night family stays and vacationers.",
      logo: <VrboLogo />,
    },
    {
      name: "Booking.com",
      category: "International & Corporate",
      tag: "Global Audience",
      detail: "Reaching worldwide travelers and corporate visitors coming to Washington.",
      logo: <BookingLogo />,
    },
    {
      name: "Google",
      category: "Listed on Google",
      tag: "Search Reach",
      detail: "Your home appears in Google Travel and Google Maps search results.",
      logo: <GoogleLogo />,
    },
    {
      name: "Agoda",
      category: "Pacific & Global Markets",
      tag: "Extended Reach",
      detail: "Capturing high-intent international travel traffic into Greater Seattle.",
      logo: <AgodaLogo />,
    },
    {
      name: "Direct Booking Site",
      category: "0% Platform Commission",
      tag: "Maximum Profit",
      detail: "Your own dedicated booking page where repeat guests book with zero platform cuts.",
      logo: <DirectLogo />,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#E6DCB8]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          {/* Minimal Kicker without pill container */}
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8860B] select-none">
            WHERE YOUR PROPERTY GETS SEEN
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] tracking-tight leading-[1.15]">
            One property. Every booking site.{" "}
            <span className="text-[#B8860B] block sm:inline">No double-bookings.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto font-normal">
            Airbnb guests and Booking.com guests are often different travelers. We list your home on six channels and sync one calendar, so you reach more of them without the risk of two bookings on the same night.
          </p>
        </motion.div>

        {/* 6 Channel Cards with Brand Logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((ch, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#FDFAF5] p-6 rounded-2xl border border-[#E6DCB8] shadow-sm hover:border-[#B8860B] hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E6DCB8] flex items-center justify-center shadow-xs shrink-0 group-hover:border-[#B8860B]/80 group-hover:shadow-sm transition-all">
                      {ch.logo}
                    </div>
                    <div>
                      <span className="font-serif text-lg sm:text-xl font-bold text-[#1E3A8A] block leading-tight">
                        {ch.name}
                      </span>
                      <span className="text-[11px] font-semibold text-[#B8860B]">
                        {ch.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white text-[#B8860B] border border-[#E6DCB8] shrink-0">
                    {ch.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  {ch.detail}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E6DCB8]/60 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Synchronized live calendar</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Line Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-[#1E3A8A] text-white shadow-xl max-w-3xl mx-auto">
            <div className="text-left flex-1 space-y-1">
              <p className="font-serif text-base sm:text-lg font-bold text-[#FDF6E2]">
                More places to book means fewer empty nights.
              </p>
              <p className="text-xs text-slate-300">
                One calendar keeps every site synchronized without double-bookings.
              </p>
            </div>
            <Link
              href="/audit"
              className="btn-gold py-3 px-6 rounded-xl font-serif font-bold text-xs uppercase tracking-wider whitespace-nowrap shadow-md flex items-center gap-2"
            >
              <span>See Your Free Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
