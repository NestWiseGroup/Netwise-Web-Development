"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ShieldAlert, 
  XCircle, 
  Zap, 
  CheckCircle2, 
  Lock, 
  Percent, 
  Headphones, 
  Clock, 
  MapPin, 
  TrendingUp, 
  Sparkles,
  PhoneCall
} from "@/components/shared/Icons";

export default function WhySection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Pain points data (Remote management)
  const painPoints = [
    {
      icon: Headphones,
      title: "Call Centers 2,000 Miles Away",
      desc: "When something goes wrong, guests are routed to a distant call center with no one nearby to visit the property."
    },
    {
      icon: Lock,
      title: "12-Month Lock-in Contracts",
      desc: "Often require 12-month or longer binding agreements with early termination penalties."
    },
    {
      icon: Percent,
      title: "Variable Fees & Surcharges",
      desc: "Commissions that vary widely, often paired with extra linen replacement fees and administrative charges."
    },
    {
      icon: Clock,
      title: "Tickets, Not People",
      desc: "Lockouts and emergencies become support tickets in a queue instead of someone arriving in person to help."
    }
  ];

  // Solutions data (NestWise Group)
  const solutions = [
    {
      icon: PhoneCall,
      title: "Someone Nearby Picks Up",
      desc: "When your guest is locked out at 11pm, someone nearby answers and fixes it in person the same night."
    },
    {
      icon: CheckCircle2,
      title: "22% of Booking Revenue",
      desc: "Our single management fee, plus a stated $600 setup fee. No markups on cleaning, linens, or repairs."
    },
    {
      icon: Sparkles,
      title: "Month-to-Month Agreement",
      desc: "Cancel with 30 days' notice. No long-term contract—we earn your business every month."
    },
    {
      icon: TrendingUp,
      title: "Daily Pricing & Turno Cleaners",
      desc: "Nightly rates updated daily from live local data, and background-checked cleaners booked through Turno with photo proof."
    }
  ];

  return (
    <section 
      id="why" 
      className="py-20 lg:py-28 bg-gradient-to-b from-[#FDFAF5] via-[#FFFBF5] to-[#FDFAF5] border-b border-[#E6DCB8]/60 relative overflow-hidden"
    >
      {/* Ambient Gradient Orbs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#B8860B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#1E3A8A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading - Section 4 CEO Copy */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8860B] select-none">
            WHY LOCAL MATTERS
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] tracking-tight leading-[1.15]">
            We live here.{" "}
            <span className="bg-gradient-to-r from-[#B8860B] to-[#D4A017] bg-clip-text text-transparent">
              That changes the service.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto font-normal">
            When a guest is locked out at 11pm, a national manager opens a ticket. We send someone. Our team lives and works in King County, so problems get solved in person, the same night.
          </p>
        </motion.div>

        {/* 2-Column Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Pain Points Column (Remote Management) */}
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
                    Remote Management
                  </h3>
                  <span className="text-xs text-rose-600 font-semibold flex items-center">
                    National Call Centers &amp; Phone Trees
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
                <span>Unresolved guest delays &amp; lost control</span>
              </span>
              <span className="text-[11px] text-rose-400 font-medium">
                Remote call centers
              </span>
            </div>
          </motion.div>

          {/* Solution Column (NestWise Group) */}
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
                    NestWise, Local Co-Hosting
                  </h3>
                  <span className="text-xs text-[#D4AF37] font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Local People You Can Actually Call
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
                <span>22% of booking revenue · Month-to-month · Local King County team</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full text-white text-[11px]">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Team in Renton, WA
              </span>
            </div>
          </motion.div>

        </div>

        {/* CEO Pull Quote - Section 4 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center max-w-2xl mx-auto"
        >
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E6DCB8] shadow-md">
            <blockquote className="font-serif text-xl sm:text-2xl font-bold text-[#1E3A8A] italic">
              &ldquo;Feet on the ground, not a phone tree.&rdquo;
            </blockquote>
          </div>
        </motion.div>

      </div>
    </section>
  );
}