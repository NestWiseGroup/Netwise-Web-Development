"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "@/components/shared/Icons";
import EarningsPotentialCard from "@/components/shared/EarningsPotentialCard";

// Extracted phase data outside component for better performance
const PHASES = [
  {
    id: "phase-01",
    phase: "Phase 01",
    tag: "5–7 Business Days",
    title: "Onboarding, Photography & Smart Locks",
    subtitle: "Setting up your home for maximum booking appeal and security with a stated one-time $600 fee.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    badge: "$600 One-Time Setup",
    standout: "Transparent $600 Onboarding: Covers professional photography, digital listing setup across 5+ channels, and master calendar sync.",
    details: [
      {
        lead: "Professional Photography:",
        text: "Curated high-resolution interior, exterior, and detail shots showcasing your home at its best.",
      },
      {
        lead: "Keyless Smart Locks:",
        text: "Installation of keyless digital locks with time-sensitive guest PIN codes that expire upon checkout.",
      },
      {
        lead: "Safety & Inventory Check:",
        text: "Comprehensive inventory audit, smoke and CO detector safety checks, and guest essential staging.",
      },
      {
        lead: "Multi-Platform Syndication:",
        text: "Synchronized listing creation across Airbnb, Vrbo, Booking.com, Google Vacation Rentals, and Agoda.",
      },
    ],
  },
  {
    id: "phase-02",
    phase: "Phase 02",
    tag: "Updated Daily",
    title: "Daily Dynamic Pricing & Channel Management",
    subtitle: "Setting your nightly price using live market data, updated daily.",
    image: "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?auto=format&fit=crop&w=1200&q=80",
    badge: "Daily Price Recalibration",
    standout: "Daily Dynamic Pricing: Nightly rates updated daily from live local comp data to capture Washington event surges without guessing.",
    details: [
      {
        lead: "Daily Rate Recalibration:",
        text: "Nightly prices adjusted daily based on live competitor pricing, local Seattle and Eastside demand, and seasonal patterns.",
      },
      {
        lead: "Synchronized Calendar Sync:",
        text: "Instant API synchronization across all booking channels to eliminate double-booking risk permanently.",
      },
      {
        lead: "Search Optimization:",
        text: "Carefully worded titles and verified amenity tags to ensure your listing ranks high in local traveler searches.",
      },
      {
        lead: "Minimum Stay Optimization:",
        text: "Adjusting minimum nights between weekends and weekdays to capture high-margin bookings without awkward calendar gaps.",
      },
    ],
  },
  {
    id: "phase-03",
    phase: "Phase 03",
    tag: "24/7/365 Local Support",
    title: "Guest Vetting, Rapid Response & Turno Cleaners",
    subtitle: "Answering every guest within three minutes, with photo-verified cleanings after every stay.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    badge: "< 3-Min Response Time",
    standout: "< 3-Minute Response Time: Our Washington-based team answers inquiries around the clock with local care.",
    details: [
      {
        lead: "Guest Verification:",
        text: "Identity verification, prior review screening, and strict house rules against unauthorized parties.",
      },
      {
        lead: "Under 3-Minute Response:",
        text: "Fast, friendly guest communication 24/7/365 to resolve guest questions and protect high ratings.",
      },
      {
        lead: "Turno Professional Cleaners:",
        text: "Vetted professional cleaners booked through Turno, with photos uploaded after every departure.",
      },
      {
        lead: "Local Washington Support:",
        text: "When a guest is locked out at 11pm, someone nearby picks up. Feet on the ground, not a phone tree.",
      },
    ],
  },
  {
    id: "phase-04",
    phase: "Phase 04",
    tag: "Monthly on the 5th",
    title: "Clear Monthly Accounting & Direct Payouts",
    subtitle: "Sending you one clear, itemized report on the 5th of every month. Your job is to read the report.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    badge: "Owner Retains 78% Gross",
    standout: "Owner Retains 78% of Gross: Clean 22% flat fee with zero linen markups, hidden fees, or surprise deductions.",
    details: [
      {
        lead: "Deposit on the 5th:",
        text: "Direct ACH bank transfers deposited cleanly on the 5th of every month for the prior month's earnings.",
      },
      {
        lead: "Clear Financial Report:",
        text: "A straightforward monthly statement showing gross nights, realized rates, cleaning distributions, and taxes.",
      },
      {
        lead: "Transparent 22% Flat Fee:",
        text: "Zero linen replacement fees, credit card surcharges, or maintenance markups.",
      },
      {
        lead: "30-Day Notice Freedom:",
        text: "Month-to-month flexibility. If your plans change, you can walk away with simple 30 days notice.",
      },
    ],
  },
];

// Extracted PhaseCard component for better readability and reusability
const PhaseCard = ({ 
  phase, 
  index, 
  isEven 
}: { 
  phase: typeof PHASES[0]; 
  index: number; 
  isEven: boolean;
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.16, 1, 0.3, 1] as const,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center`}
    >
      {/* Visual Block */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`lg:col-span-6 relative ${isEven ? "lg:order-2" : "lg:order-1"}`}
      >
        <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden shadow-2xl border border-[#E6DCB8]/60 group">
          <Image
            src={phase.image}
            alt={`${phase.title} - NestWise property management phase illustration`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/80 via-transparent to-transparent" />
          
          {/* Floating Badge with Pulse Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="absolute top-5 left-5 px-4 py-1.5 rounded-full bg-[#1e3a8a]/80 backdrop-blur-md border border-[#B8860B]/50 text-[#D4AF37] text-xs font-bold shadow-lg"
          >
            {phase.badge}
          </motion.div>

          {/* Phase Step Label */}
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37]">
              {phase.phase} · {phase.tag}
            </span>
            <h4 className="font-serif text-lg sm:text-xl font-bold line-clamp-1">
              {phase.title}
            </h4>
          </div>
        </div>
      </motion.div>

      {/* Text Content */}
      <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
        <div className="space-y-2">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-serif text-2xl font-extrabold text-[#B8860B]">
              {phase.phase}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] border border-[#1E3A8A]/10">
              {phase.tag}
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E3A8A] leading-tight">
            {phase.title}
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            {phase.subtitle}
          </p>
        </div>

        {/* Standout Fact Callout */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="p-4 rounded-2xl bg-gradient-to-r from-[#B8860B]/10 via-[#1E3A8A]/5 to-transparent border-l-4 border-[#B8860B] shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#B8860B] text-white flex items-center justify-center shrink-0 text-xs font-bold mt-0.5 shadow-md">
              ★
            </div>
            <div>
              <span className="font-serif text-[10px] font-bold text-[#B8860B] uppercase tracking-wider block">
                Standout Proof Point
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#1E3A8A] leading-snug">
                {phase.standout}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Bullet Points */}
        <ul className="space-y-3 pt-1" role="list">
          {phase.details.map((point, pointIdx) => (
            <motion.li 
              key={pointIdx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + pointIdx * 0.05, duration: 0.3 }}
              className="flex items-start gap-3"
            >
              <div className="w-5 h-5 rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 text-[#B8860B]" />
              </div>
              <span className="text-sm text-[#334155] leading-relaxed">
                <strong className="font-bold text-[#0F172A]">{point.lead}</strong>{" "}
                {point.text}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default function HowWeWorkPage() {

  return (
    <div className="min-h-screen bg-[#FDFAF5]">

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-[#FDFAF5]" aria-label="Our 4-phase process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-2 text-xs font-semibold text-[#64748B] mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[#1E3A8A] transition-colors duration-200">
              Home
            </Link>
            <span className="text-[#B8860B]" aria-hidden="true">/</span>
            <span className="text-[#1E3A8A]">How We Work</span>
          </motion.nav>

          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8860B] select-none">
              END-TO-END EXECUTION
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] tracking-tight">
              From Key Handover to <span className="text-[#B8860B]">Flawless Deposits</span>
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto">
              Every detail is engineered so you never have to answer a late-night guest message, 
              coordinate cleaners, or stress over municipal permits.
            </p>
          </motion.div>

          {/* Phase Cards with Stagger Animation */}
          <div className="space-y-16 lg:space-y-24">
            {PHASES.map((phase, idx) => (
              <PhaseCard
                key={phase.id}
                phase={phase}
                index={idx}
                isEven={idx % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Potential Section */}
      <section className="py-16 sm:py-20 bg-[#FDFAF5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <EarningsPotentialCard />
        </div>
      </section>

    </div>
  );
}