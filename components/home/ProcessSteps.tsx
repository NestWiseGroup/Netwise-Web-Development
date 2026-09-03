"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Send, FileSearch, Calendar, ArrowRight, CheckCircle2 } from "@/components/shared/Icons";

export default function ProcessSteps() {
  const steps = [
    {
      step: "01",
      title: "Submit Property Details",
      time: "2 Minutes",
      description:
        "Provide your Seattle or Bellevue property address and any existing listing URLs through our encrypted intake form.",
      icon: <Send className="w-5 h-5 text-[#B8860B]" />,
    },
    {
      step: "02",
      title: "Receive AI-Assisted Audit",
      time: "Within 48 Hours",
      description:
        "Our analytics desk delivers a branded 5-section PDF benchmarking your asset against 12 peer comps with dynamic ADR curve projections.",
      icon: <FileSearch className="w-5 h-5 text-[#B8860B]" />,
    },
    {
      step: "03",
      title: "Executive Review & Strategy",
      time: "Executive Review",
      description:
        "Review your 5-point report directly with our Bellevue team. Choose to act on the roadmap independently, or have NestWise execute end-to-end.",
      icon: <Calendar className="w-5 h-5 text-[#B8860B]" />,
    },
  ];

  return (
    <section id="how-we-work" className="py-20 lg:py-28 bg-[#FDFAF5] border-b border-[#E6DCB8]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A8A]/5 border border-[#B8860B]/30">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B8860B]">
              HOW IT WORKS
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] tracking-tight">
            Three Simple Steps to Complete Clarity
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Zero friction. No credit cards or long-term commitments required. Just raw, actionable portfolio intelligence.
          </p>
        </motion.div>

        {/* 3 Step Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] as const }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white rounded-3xl p-8 border border-[#E6DCB8] shadow-luxury flex flex-col justify-between relative group hover:border-[#B8860B] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-3xl font-extrabold text-[#B8860B]">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#FDFAF5] border border-[#E6DCB8] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                </div>

                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-[#FDFAF5] text-[#1E3A8A] border border-[#E6DCB8] inline-block mb-3">
                  {item.time}
                </span>

                <h3 className="font-serif text-xl font-bold text-[#1E3A8A] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#B8860B]">
                <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0" />
                <span>Zero Obligation Guarantee</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Unified Primary Action Link & Secondary Phone Link */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center space-y-3"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
            <Link
              href="/audit"
              className="btn-gold px-8 py-4 rounded-xl font-serif font-bold text-xs sm:text-sm uppercase tracking-wider inline-flex items-center gap-2 shadow-luxury hover:shadow-gold-glow transition-all"
            >
              <span>Request Free Property Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <div className="text-xs text-[#6B7280]">
            Prefer a direct phone discussion?{" "}
            <a href="tel:+14254146819" className="text-[#1E3A8A] font-semibold hover:underline">
              Call our Bellevue desk at (425) 414-6819
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
