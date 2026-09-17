"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, CheckCircle2, Clock } from "@/components/shared/Icons";

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
      className={`relative rounded-3xl sm:rounded-[36px] overflow-hidden border border-[#E6DCB8]/40 shadow-2xl bg-gradient-to-br from-[#1e3a8a] via-[#1e3a8a] to-[#1e3a8a] text-white p-8 sm:p-12 lg:p-16 ${className}`}
    >
      {/* Ambient Glows */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#B8860B]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#1E3A8A]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        
        {/* Minimal Kicker without pill container */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xs font-bold uppercase tracking-[0.22em] text-[#D4AF37] select-none"
        >
          Zero Obligation · Arrives in 48 Hours
        </motion.div>

        {/* Heading - Section 8 CEO Copy */}
        <motion.h3 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.2]"
        >
          Let&apos;s start with the{" "}
          <span className="bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B8860B] bg-clip-text text-transparent">
            free audit.
          </span>
        </motion.h3>

        {/* Body - Section 8 CEO Copy */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          No contract, no commitment, and nothing to pay. Just an honest look at what your property could be earning — and a conversation, if you want one.
        </motion.p>

        {/* Action Buttons - Section 8 CEO Buttons */}
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
              className="btn-gold px-8 py-4 rounded-xl font-serif font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-gold-glow transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <span>Get My Free Property Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <a
              href="tel:+14254146819"
              className="px-6 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-xs sm:text-sm font-semibold text-white transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Or call us: (425) 414-6819</span>
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
            <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>22% Flat Fee (No Hidden Costs)</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>0-Day Lock-in (Leave Any Time)</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Report Delivered in 48 Hours</span>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
