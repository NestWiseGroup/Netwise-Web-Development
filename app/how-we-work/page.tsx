"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Layers, Check } from "@/components/shared/Icons";
import ComparisonMatrix from "@/components/shared/ComparisonMatrix";
import EarningsPotentialCard from "@/components/shared/EarningsPotentialCard";

// Extracted phase data outside component for better performance
const PHASES = [
  {
    id: "phase-01",
    phase: "Phase 01",
    tag: "5–7 Business Days",
    title: "Rapid Onboarding, Staging & Smart Hardware",
    subtitle: "Transforming your residence into a high-converting, secure asset with zero downtime.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    badge: "Zero Onboarding Fees",
    standout: "Zero Out-of-Pocket Setup: NestWise covers all professional 3D Matterport & commercial smart hardware costs upfront.",
    details: [
      {
        lead: "Architectural HDR Media:",
        text: "Full aerial drone photography, twilight captures, and 3D Matterport digital twin walkthroughs.",
      },
      {
        lead: "Commercial Smart Hardware:",
        text: "Installation of keyless digital locks with time-sensitive guest PIN codes that automatically expire upon checkout.",
      },
      {
        lead: "100% Privacy-Safe Telemetry:",
        text: "Minut noise & occupancy monitors protecting your property 24/7 without invasive interior cameras.",
      },
      {
        lead: "Turnkey Staging & Compliance:",
        text: "Comprehensive inventory audit, smoke/CO2 safety checks, and luxury five-star linen staging.",
      },
    ],
  },
  {
    id: "phase-02",
    phase: "Phase 02",
    tag: "Automated & Daily",
    title: "AI Dynamic Pricing & Multi-Channel Distribution",
    subtitle: "Dominating search algorithms across Airbnb, VRBO, and Booking.com simultaneously.",
    image: "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?auto=format&fit=crop&w=1200&q=80",
    badge: "Hourly Re-Indexing",
    standout: "60-Minute Dynamic Curve: Algorithmic rate recalculation captures Seattle event surges without human lag.",
    details: [
      {
        lead: "60-Minute Rate Recalculation:",
        text: "Algorithmic pricing engine tracks King County flight volume, hotel compression, and local venue tickets every hour.",
      },
      {
        lead: "Bi-Directional Calendar Sync:",
        text: "Instant API synchronization across Airbnb, VRBO, and direct booking channels to eliminate double-booking risk permanently.",
      },
      {
        lead: "Top 1% Algorithmic SEO:",
        text: "Keyword-engineered titles and photo taxonomy optimized for first-page ranking in Greater Seattle searches.",
      },
      {
        lead: "High-Margin Stay Controls:",
        text: "Dynamic minimum stay rules tuned for tech summits (Microsoft/AWS) and high-demand summer lakefront weekends.",
      },
    ],
  },
  {
    id: "phase-03",
    phase: "Phase 03",
    tag: "24/7/365 Local Execution",
    title: "Vetted Guest Screening & White-Glove Care",
    subtitle: "Five-star hospitality backed by strict asset preservation and rapid physical response.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    badge: "4.97★ Guest Satisfaction",
    standout: "< 3-Minute Response SLA: Bellevue operations desk responds 24/7/365 with local emergency dispatch under 30 minutes.",
    details: [
      {
        lead: "Mandatory 25+ Age Screening:",
        text: "Government ID verification, prior host review vetting, and strict party prevention protocols before key issuance.",
      },
      {
        lead: "Sub-3-Minute Guest SLA:",
        text: "Lightning-fast inquiry resolution around the clock, driving Superhost and Premier Host top tier placement.",
      },
      {
        lead: "Hospital-Grade Turnovers:",
        text: "Dedicated local housekeeping crews executing 70-point checklists with photographic, time-stamped inspection logs.",
      },
      {
        lead: "Bellevue Rapid Response:",
        text: "Immediate on-site dispatch capability from our Bellevue command desk to resolve any physical issue fast.",
      },
    ],
  },
  {
    id: "phase-04",
    phase: "Phase 04",
    tag: "Monthly on the 5th",
    title: "Radical Accounting & Direct Bank Payouts",
    subtitle: "Transparent financial reporting with zero surprise charges or sneaky expense markups.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    badge: "Owner Retains 78% Gross",
    standout: "Owner Retains 78% of Gross: Predictable 22% flat fee with zero linen markups or pass-through surcharges.",
    details: [
      {
        lead: "Guaranteed Deposit on the 5th:",
        text: "Direct ACH bank transfers deposited cleanly on the 5th of every month with zero settlement delays.",
      },
      {
        lead: "Itemized Financial Statements:",
        text: "Clear, transparent ledger breaking down gross booking revenues, cleaning reimbursements, and King County lodging taxes.",
      },
      {
        lead: "Transparent 22% Flat Fee:",
        text: "Zero linen fees, credit card processing surcharges, administrative fees, or maintenance markups.",
      },
      {
        lead: "24/7 Live Owner Portal:",
        text: "Continuous access to real-time calendar reservations, daily realized rates, and historical statements.",
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A132C]/80 via-transparent to-transparent" />
          
          {/* Floating Badge with Pulse Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="absolute top-5 left-5 px-4 py-1.5 rounded-full bg-[#0A132C]/80 backdrop-blur-md border border-[#B8860B]/50 text-[#D4AF37] text-xs font-bold shadow-lg"
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E3A8A]/5 border border-[#B8860B]/30">
              <Layers className="w-3.5 h-3.5 text-[#B8860B]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B8860B]">
                END-TO-END EXECUTION
              </span>
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

      {/* Comparison Section */}
      <section className="py-20 lg:py-24 bg-white border-y border-[#E6DCB8]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ComparisonMatrix 
            variant="full"
            title="The Concrete Industry Comparison"
            subtitle="Zero confusion: Compare our local co-hosting model against national corporate franchises and the hidden exhaustion of DIY management."
          />
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