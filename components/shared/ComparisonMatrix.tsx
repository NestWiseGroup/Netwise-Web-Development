"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Zap, ArrowRight, ShieldCheck, Clock, TrendingUp, Sparkles } from "@/components/shared/Icons";

interface ComparisonMatrixProps {
  variant?: "full" | "condensed";
  showTitle?: boolean;
  title?: string;
  subtitle?: string;
  className?: string;
  id?: string;
}

export default function ComparisonMatrix({
  variant = "full",
  showTitle = true,
  title,
  subtitle,
  className = "",
  id = "comparison",
}: ComparisonMatrixProps) {
  const [activeTab, setActiveTab] = useState<"cards" | "table">("cards");

  const comparisonData = [
    {
      metric: "Management Fee",
      icon: TrendingUp,
      nestwise: { title: "22% Flat Rate", detail: "Single fee. Zero hidden deductions or markups." },
      legacy: { title: "28% – 35% Surcharges", detail: "Padded with linen replacement & admin fees." },
      diy: { title: "0% Cash Fee", detail: "Hidden cost: 20+ hours per week of owner burnout." },
    },
    {
      metric: "Contract Freedom",
      icon: Clock,
      nestwise: { title: "Month-to-Month", detail: "30-day exit. We earn your partnership each month." },
      legacy: { title: "12-Month Lock-in", detail: "Hefty penalty fees & mandatory calendar forfeiture." },
      diy: { title: "No Contract", detail: "Total personal responsibility with 100% stress." },
    },
    {
      metric: "Dynamic Pricing",
      icon: Sparkles,
      nestwise: { title: "Hourly AI Curve", detail: "Automated recalibration for local King County surges." },
      legacy: { title: "Static Seasonal", detail: "Manual weekly adjustments that miss event rate peaks." },
      diy: { title: "Manual Guesswork", detail: "Underpriced peak weekends and missed revenue." },
    },
    {
      metric: "Guest Response SLA",
      icon: Clock,
      nestwise: { title: "< 3 Minutes (Bellevue)", detail: "Local operations desk responding 24/7/365." },
      legacy: { title: "Hours (Offshore)", detail: "Remote call center with zero local market knowledge." },
      diy: { title: "Whenever Free", detail: "Late-night lockouts interrupt your sleep and life." },
    },
    {
      metric: "Asset Protection",
      icon: ShieldCheck,
      nestwise: { title: "$3M Shield + Sensors", detail: "Minut decibel monitors & 25+ age screening." },
      legacy: { title: "Basic Minimums", detail: "Standard platform limits with slow claim approvals." },
      diy: { title: "100% Personal Risk", detail: "Self-insured exposure to unauthorized parties." },
    },
    {
      metric: "Municipal Compliance",
      icon: ShieldCheck,
      nestwise: { title: "Turnkey Filings", detail: "Full management of Seattle SMC 6.600 & Bellevue permits." },
      legacy: { title: "Owner Burden", detail: "Franchises disclaim all regulatory responsibility." },
      diy: { title: "Complex Paperwork", detail: "High penalty risks for licensing non-compliance." },
    },
  ];

  const rows = variant === "condensed" ? comparisonData.slice(0, 5) : comparisonData;

  return (
    <div id={id} className={`w-full ${className}`}>
      {showTitle && (
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A8A]/5 border border-[#B8860B]/30"
          >
            <Zap className="w-3.5 h-3.5 text-[#B8860B]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B8860B]">
              THE HEAD-TO-HEAD COMPARISON
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] tracking-tight"
          >
            {title || "Why Luxury Owners Choose NestWise"}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-[#475569] max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle ||
              "Clutter-free clarity: See the exact operational differences between our dedicated Bellevue model, corporate franchises, and solo management."}
          </motion.p>

          {/* Interactive View Switcher (Declutters information for skimmers) */}
          <div className="flex items-center justify-center pt-2">
            <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200">
              <button
                onClick={() => setActiveTab("cards")}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "cards"
                    ? "bg-white text-[#1E3A8A] shadow-xs"
                    : "text-[#64748B] hover:text-[#1E3A8A]"
                }`}
              >
                Featured Breakdown
              </button>
              <button
                onClick={() => setActiveTab("table")}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "table"
                    ? "bg-white text-[#1E3A8A] shadow-xs"
                    : "text-[#64748B] hover:text-[#1E3A8A]"
                }`}
              >
                Full Side-by-Side Matrix
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Comparative View */}
      <AnimatePresence mode="wait">
        {activeTab === "cards" ? (
          /* Cards View: Decluttered, Special, High-Visual Hierarchy */
          <motion.div
            key="cards"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
          >
            {/* Card 1: Legacy Franchises */}
            <div className="rounded-3xl p-6 sm:p-8 bg-white border border-slate-200 shadow-sm flex flex-col justify-between order-2 lg:order-1 opacity-90 hover:opacity-100 transition-opacity">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
                    Outdated Model
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-800 mt-2">
                    Legacy Franchises
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">Vacasa, Evolve & National Chains</p>
                </div>

                <div className="space-y-4 pt-2 divide-y divide-slate-100">
                  {rows.map((row, idx) => (
                    <div key={idx} className={idx === 0 ? "" : "pt-3.5"}>
                      <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                        {row.metric}
                      </span>
                      <div className="flex items-start gap-2 text-xs font-bold text-rose-600 mt-1">
                        <X className="w-4 h-4 shrink-0 mt-0.5" />
                        <div>
                          <span>{row.legacy.title}</span>
                          <p className="text-[11px] font-normal text-slate-500 mt-0.5">{row.legacy.detail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 text-center">
                <span className="text-xs text-slate-500 italic">High commissions & locked calendars</span>
              </div>
            </div>

            {/* Card 2: NestWise Group (Featured, Special, Hero Spotlight) */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl p-7 sm:p-9 bg-linear-to-b from-[#1e3a8a] via-[#1e3a8a] to-[#1e3a8a] text-white shadow-2xl border-2 border-[#B8860B] relative overflow-hidden flex flex-col justify-between order-1 lg:order-2 ring-4 ring-[#B8860B]/20"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8860B]/20 rounded-bl-full pointer-events-none blur-2xl" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-linear-to-r from-[#B8860B] to-[#D4AF37] px-3 py-1 rounded-full shadow-xs">
                    ★ Partner Choice
                  </span>
                  <span className="text-xs font-bold text-[#D4AF37]">Bellevue HQ</span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight">
                    NestWise Group
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Bespoke Luxury Co-Hosting & AI Yield Management
                  </p>
                </div>

                <div className="space-y-4 pt-2 divide-y divide-white/10">
                  {rows.map((row, idx) => (
                    <div key={idx} className={idx === 0 ? "" : "pt-3.5"}>
                      <span className="text-[11px] font-semibold text-[#D4AF37] block uppercase tracking-wider">
                        {row.metric}
                      </span>
                      <div className="flex items-start gap-2 text-xs sm:text-sm font-bold text-white mt-1">
                        <div className="w-4 h-4 rounded-full bg-[#B8860B] text-white flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <div>
                          <span>{row.nestwise.title}</span>
                          <p className="text-[11px] font-normal text-slate-300 mt-0.5">{row.nestwise.detail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 space-y-3 relative z-10">
                <Link
                  href="/audit"
                  className="btn-gold w-full py-3.5 rounded-xl font-serif font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-md hover:shadow-gold-glow transition-all"
                >
                  <span>Request Free Property Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-[11px] text-center text-slate-300">
                  Zero onboarding fees · Month-to-month freedom
                </p>
              </div>
            </motion.div>

            {/* Card 3: DIY Self-Hosting */}
            <div className="rounded-3xl p-6 sm:p-8 bg-white border border-slate-200 shadow-sm flex flex-col justify-between order-3 opacity-90 hover:opacity-100 transition-opacity">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                    Solo Management
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-800 mt-2">
                    DIY Self-Hosting
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">Solo Landlord on Airbnb / VRBO</p>
                </div>

                <div className="space-y-4 pt-2 divide-y divide-slate-100">
                  {rows.map((row, idx) => (
                    <div key={idx} className={idx === 0 ? "" : "pt-3.5"}>
                      <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                        {row.metric}
                      </span>
                      <div className="flex items-start gap-2 text-xs font-semibold text-slate-700 mt-1">
                        <div className="w-4 h-4 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                          —
                        </div>
                        <div>
                          <span>{row.diy.title}</span>
                          <p className="text-[11px] font-normal text-slate-500 mt-0.5">{row.diy.detail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 text-center">
                <span className="text-xs text-slate-500 italic">Zero cash fee, but constant burnout</span>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Table View: Spacious, Uncluttered, Elegant */
          <motion.div
            key="table"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden rounded-3xl border border-[#E6DCB8] shadow-luxury bg-white"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-[#E6DCB8]/80 bg-[#FDFAF5]">
                    <th className="py-5 px-6 font-serif text-xs font-bold text-[#1E3A8A] w-1/4 uppercase tracking-wider">
                      Dimension
                    </th>
                    <th className="py-5 px-6 font-serif text-sm font-extrabold text-white bg-[#1E3A8A] w-[32%] relative">
                      <div className="flex items-center gap-2">
                        <span>NestWise Group</span>
                        <span className="text-[10px] font-sans font-bold bg-[#B8860B] text-white px-2 py-0.5 rounded-full uppercase tracking-wider">
                          Partner Choice
                        </span>
                      </div>
                    </th>
                    <th className="py-5 px-6 font-serif text-xs font-semibold text-[#64748B] w-1/4">
                      Legacy Franchises
                    </th>
                    <th className="py-5 px-6 font-serif text-xs font-semibold text-[#64748B] w-1/4">
                      DIY Self-Hosting
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {rows.map((row, index) => (
                    <tr key={index} className="hover:bg-[#FDFAF5]/80 transition-colors">
                      <td className="py-5 px-6 font-bold text-[#1E3A8A]">
                        {row.metric}
                      </td>
                      <td className="py-5 px-6 font-semibold text-[#1E3A8A] bg-[#1E3A8A]/5 border-x border-[#1E3A8A]/10">
                        <div className="flex items-start gap-2">
                          <div className="w-4 h-4 rounded-full bg-[#B8860B] text-white flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <div>
                            <strong className="block text-[#1E3A8A]">{row.nestwise.title}</strong>
                            <span className="text-xs text-[#64748B] font-normal">{row.nestwise.detail}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-5 px-6 text-[#64748B]">
                        <div className="flex items-start gap-2 text-rose-600">
                          <X className="w-4 h-4 shrink-0 mt-0.5" />
                          <div>
                            <strong className="block text-slate-800">{row.legacy.title}</strong>
                            <span className="text-xs text-slate-500 font-normal">{row.legacy.detail}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-5 px-6 text-[#64748B]">
                        <div>
                          <strong className="block text-slate-800">{row.diy.title}</strong>
                          <span className="text-xs text-slate-500 font-normal">{row.diy.detail}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-5 bg-[#FDFAF5] border-t border-[#E6DCB8]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#475569]">
                <strong className="text-[#1E3A8A]">Summary:</strong> NestWise guarantees direct owner access, 78% net earnings, and zero contractual lock-in.
              </span>
              <Link
                href="/audit"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8860B] hover:text-[#8C6508] transition-colors"
              >
                <span>Audit your property vs. these metrics</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
