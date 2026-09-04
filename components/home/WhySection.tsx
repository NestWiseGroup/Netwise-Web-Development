"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ShieldAlert, 
  XCircle, 
  Zap, 
  CheckCircle2, 
  Award,
  Lock,
  Percent,
  Headphones,
  Clock,
  MapPin,
  TrendingUp,
  Sparkles
} from "@/components/shared/Icons";

export default function WhySection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Pain points data
  const painPoints = [
    {
      icon: Lock,
      title: "Strict 12-Month Lock-in Penalties",
      desc: "National managers force owners into year-long binding contracts with steep early termination fees and calendar forfeiture."
    },
    {
      icon: Percent,
      title: "28% – 30% Cuts + Hidden Surcharges",
      desc: "Hefty commission rates padded with linen replacement deductions, admin surcharges, and costly maintenance markups."
    },
    {
      icon: Headphones,
      title: "Faceless Out-of-State Call Centers",
      desc: "Guest communications routed to remote agents with zero knowledge of King County geography or local noise ordinances."
    },
    {
      icon: Clock,
      title: "DIY Owner Burnout & Guesswork",
      desc: "Self-hosting forces you to answer midnight lockout messages, schedule cleaners, and manually guess dynamic weekend pricing."
    }
  ];

  // Solutions data
  const solutions = [
    {
      icon: CheckCircle2,
      title: "Transparent 22% Flat Fee",
      desc: "Single, all-inclusive rate on gross bookings. Zero onboarding fees, zero linen markups, and zero hidden line items."
    },
    {
      icon: Sparkles,
      title: "Month-to-Month Freedom (No Lock-in)",
      desc: "We earn your trust every single month. If your goals change, you can walk away anytime with simple 30-day notice."
    },
    {
      icon: MapPin,
      title: "Bellevue-Based Command Desk & < 3 Min SLA",
      desc: "Dedicated local operations team monitoring guest inquiries 24/7/365, ensuring 5-star Superhost status."
    },
    {
      icon: TrendingUp,
      title: "Dynamic Multi-Channel AI Pricing",
      desc: "Nightly rates recalibrated around Seattle concerts, conferences, and supply dips across Airbnb, VRBO, and Booking.com."
    }
  ];


  return (
    <section 
      id="why" 
      className="py-20 lg:py-28 bg-gradient-to-b from-[#FDFAF5] via-[#FFFBF5] to-[#FDFAF5] border-b border-[#E6DCB8]/60 relative overflow-hidden"
    >
      {/* Ambient Gradient Orbs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#B8860B]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#1E3A8A]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E3A8A]/5 border border-[#B8860B]/30 shadow-xs">
            <ShieldAlert className="w-4 h-4 text-[#B8860B]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B8860B]">
              THE VACATION RENTAL DILEMMA
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] tracking-tight leading-[1.15]">
            Why Traditional Property Management{" "}
            <span className="bg-gradient-to-r from-[#B8860B] to-[#D4A017] bg-clip-text text-transparent block sm:inline">
              Fails Luxury Owners
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto">
            Property owners are caught between exhausting self-hosting burnout and predatory national franchises.{" "}
            <span className="font-semibold text-[#1E3A8A]">
              NestWise was engineered as the superior alternative.
            </span>
          </p>
        </motion.div>

        {/* 2-Column Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Pain Points Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            onMouseEnter={() => setHoveredCard("pain")}
            onMouseLeave={() => setHoveredCard(null)}
            className={`lg:col-span-6 bg-white rounded-3xl p-7 sm:p-9 border-2 border-rose-200/80 shadow-xl flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
              hoveredCard === "pain" ? "border-rose-400" : ""
            }`}
          >
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-3 border-b-2 border-rose-100 pb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-50 to-rose-100 text-rose-600 flex items-center justify-center shrink-0 shadow-md">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    The Pain Points of Legacy Management
                  </h3>
                  <span className="text-xs text-rose-600 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-ping" />
                    Rigid Contracts & Eroded Margins
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {painPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-rose-50/60 transition-all duration-200 cursor-default"
                  >
                    <div className="shrink-0 mt-1">
                      <XCircle className="w-5 h-5 text-rose-500" />
                    </div>
                    <div>
                      <strong className="text-slate-900 block font-semibold text-sm">
                        {point.title}
                      </strong>
                      <p className="text-sm text-[#4B5563] leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-5 border-t-2 border-rose-100 text-xs text-rose-600 font-semibold flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span>⚠️</span>
                <span>Result: Sub-optimal revenues & constant stress</span>
              </span>
              <span className="text-[10px] text-rose-400 font-medium">
                No asset control
              </span>
            </div>
          </motion.div>

          {/* Solution Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            onMouseEnter={() => setHoveredCard("solution")}
            onMouseLeave={() => setHoveredCard(null)}
            className={`lg:col-span-6 bg-gradient-to-br from-[#1e3a8a] via-[#1e3a8a] to-[#1e3a8a] text-white rounded-3xl p-7 sm:p-9 border-2 border-[#B8860B]/40 shadow-2xl flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-gold-glow ${
              hoveredCard === "solution" ? "border-[#D4AF37]" : ""
            }`}
          >
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#B8860B]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#B8860B] to-[#D4A017] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#B8860B]/30">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">
                    The NestWise Co-Hosting Solution
                  </h3>
                  <span className="text-xs text-[#D4AF37] font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                    Complete Local Command & Maximum Yield
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {solutions.map((solution, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-200 cursor-default"
                  >
                    <div className="shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <strong className="text-[#FDF6E2] block font-semibold text-sm">
                        {solution.title}
                      </strong>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {solution.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-white/10 text-xs text-[#D4AF37] font-semibold flex items-center justify-between relative z-10">
              <span className="flex items-center gap-2">
                <span>✦</span>
                <span>Owner keeps 78% of gross revenues cleanly</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full text-white text-[11px]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Bellevue Ground Team
              </span>
            </div>
          </motion.div>

        </div>

        {/* Call to Action at Bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#B8860B] bg-white px-6 py-3 rounded-full border border-[#E6DCB8]/60 shadow-md hover:shadow-lg transition-all cursor-default">
            <Award className="w-4 h-4 text-[#B8860B]" />
            <span>Trusted by 200+ Luxury Property Owners across Greater Seattle</span>
            <span className="w-2 h-2 rounded-full bg-[#B8860B] animate-pulse" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}