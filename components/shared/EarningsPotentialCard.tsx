"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight, ShieldCheck, TrendingUp, Sparkles, Phone } from "@/components/shared/Icons";

interface EarningsPotentialCardProps {
  className?: string;
}

export default function EarningsPotentialCard({ className = "" }: EarningsPotentialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`relative rounded-3xl sm:rounded-[36px] overflow-hidden border border-[#E6DCB8]/40 shadow-2xl bg-linear-to-br from-[#070E20] via-[#0E1C42] to-[#081228] text-white p-8 sm:p-12 lg:p-16 ${className}`}
    >
      {/* Background Decorative Ambient Glows */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#B8860B]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#1E3A8A]/30 rounded-full blur-3xl pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#E6DCB8 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-7">
        
        {/* Top Floating Pill */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#B8860B]/40 text-[#D4AF37] text-xs font-bold shadow-xs"
        >
          <Clock className="w-3.5 h-3.5 text-[#B8860B]" />
          <span>Turnkey Onboarding in 5–7 Business Days</span>
        </motion.div>

        {/* Heading */}
        <motion.h3 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.2]"
        >
          Ready to See Your Property&apos;s{" "}
          <span className="bg-linear-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B8860B] bg-clip-text text-transparent">
            Real Earnings Potential?
          </span>
        </motion.h3>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Submit your property address to receive our complimentary 5-Point Revenue Audit matching your home against its 12 closest real-time competitors in King County.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/audit"
              className="btn-gold px-8 py-4 rounded-xl font-serif font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-gold-glow transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <span>Get Free 48-Hour Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <a
              href="tel:+14254146819"
              className="px-6 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-xs font-bold text-white transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Call Executive Desk: (425) 414-6819</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom Three Trust Anchors */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs text-slate-300"
        >
          <div className="flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>100% Free · Zero Obligation</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>12-Comp Live MLS & AirDNA Data</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Month-to-Month Freedom</span>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
