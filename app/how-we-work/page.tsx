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
    tag: "5–7 business days",
    title: "Setup: photos, smart locks and listings",
    subtitle: "We get your home ready to book and listed everywhere, for a one-time $600 fee.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    badge: "$600 One-Time Setup",
    standout: "Professional photos, a keyless smart lock, and live listings on six channels with one synced calendar.",
    details: [
      {
        lead: "Professional photos:",
        text: "Interior, exterior and detail shots that show your home at its best.",
      },
      {
        lead: "Keyless smart lock:",
        text: "Each guest gets a unique code that expires at checkout.",
      },
      {
        lead: "Safety and inventory check:",
        text: "Smoke and carbon-monoxide alarms tested, required safety information posted, guest essentials stocked.",
      },
      {
        lead: "Listings on six channels:",
        text: "Airbnb, Vrbo, Booking.com, Google, Agoda and your direct booking site.",
      },
      {
        lead: "City rules check:",
        text: "We confirm your home can be rented short-term and help you get the licenses your city requires.",
      },
    ],
  },
  {
    id: "phase-02",
    phase: "Phase 02",
    tag: "Ongoing",
    title: "Daily pricing and channel management",
    subtitle: "Your nightly rate is reset every day using live market data.",
    image: "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?auto=format&fit=crop&w=1200&q=80",
    badge: "Daily Rate Updates",
    standout: "Prices that rise for Seattle events and busy weekends, and drop to fill quiet nights.",
    details: [
      {
        lead: "Daily rate updates:",
        text: "Based on nearby listings, Seattle and Eastside demand, and the season.",
      },
      {
        lead: "One synced calendar:",
        text: "A booking on any channel blocks the dates everywhere else, reducing the risk of double bookings.",
      },
      {
        lead: "Listing quality:",
        text: "Clear titles, accurate amenities and strong photos to help your listing rank in search.",
      },
      {
        lead: "Minimum-stay rules:",
        text: "Different minimums for weekends and weekdays, so short gaps between bookings still get filled.",
      },
    ],
  },
  {
    id: "phase-03",
    phase: "Phase 03",
    tag: "Every stay",
    title: "Guest screening, fast replies and cleaning",
    subtitle: "Every guest is screened, every message answered quickly, and every clean checked with photos.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    badge: "Local support, day and night",
    standout: "A local team answering guests day and night, typically within 15 minutes.",
    details: [
      {
        lead: "Guest screening:",
        text: "ID verification, review history, and house rules that prohibit parties.",
      },
      {
        lead: "Fast replies:",
        text: "Friendly, quick answers to guest questions, which protects your ratings.",
      },
      {
        lead: "Background-checked cleaners:",
        text: "Booked through Turno, with photos uploaded after each clean.",
      },
      {
        lead: "Local help on call:",
        text: "When a guest is locked out at 11pm, someone nearby picks up. Feet on the ground, not a phone tree.",
      },
    ],
  },
  {
    id: "phase-04",
    phase: "Phase 04",
    tag: "By the 5th",
    title: "Monthly statements and direct payouts",
    subtitle: "One clear statement a month. Your only job is to read it.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    badge: "Paid by the 5th",
    standout: "A deposit by the 5th, and a statement showing every booking, every expense and our 22% fee.",
    details: [
      {
        lead: "Paid by the 5th:",
        text: "Direct ACH deposit to your bank account for the previous month’s earnings.",
      },
      {
        lead: "Clear statement:",
        text: "Nights booked, rates achieved, cleaning costs, taxes collected and our fee, line by line.",
      },
      {
        lead: "One fee, no markups:",
        text: "22% of booking revenue. No markups on linens, cleaning, card processing or repairs.",
      },
      {
        lead: "Month-to-month:",
        text: "Cancel with 30 days’ notice.",
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

        {/* What You Get Callout */}
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
                What you get
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
              How we work
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] tracking-tight">
              From handing over the keys to <span className="text-[#B8860B]">money in your account.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto">
              Four steps, one local team. You won’t answer late-night guest messages, book cleaners or chase permits again.
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