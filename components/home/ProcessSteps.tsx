"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Send, FileSearch, CheckCircle2, ArrowRight } from "@/components/shared/Icons";

export default function ProcessSteps() {
  const steps = [
    {
      step: "01",
      title: "Tell us about your property.",
      time: "2 Minutes",
      description:
        "Two minutes on a short form. Address, a listing link if you have one, and how to reach you.",
      icon: <Send className="w-5 h-5 text-[#B8860B]" />,
    },
    {
      step: "02",
      title: "Get your free report in 48 hours.",
      time: "Within 48 Hours",
      description:
        "What your property earns now, what it could earn, and the three changes that would make the biggest difference.",
      icon: <FileSearch className="w-5 h-5 text-[#B8860B]" />,
    },
    {
      step: "03",
      title: "Decide what you want to do.",
      time: "Zero Obligation",
      description:
        "Use the report yourself, or hand us the keys and we'll run the whole thing. No pressure either way.",
      icon: <CheckCircle2 className="w-5 h-5 text-[#B8860B]" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#FDFAF5] border-b border-[#E6DCB8]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading - Section 7 from CEO Deck */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8860B] select-none">
            HOW IT WORKS
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] tracking-tight">
            Three steps. <span className="text-[#B8860B]">Then we take it from here.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-xl mx-auto font-normal">
            No endless meetings or pushy sales pitches. Just an honest look at what your home could earn.
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
                <span>Free &amp; No Obligation</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Link */}
        <div className="mt-12 text-center">
          <Link
            href="/audit"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1E3A8A] hover:text-[#B8860B] transition-colors"
          >
            <span>Start Step 1: Submit your property form</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
