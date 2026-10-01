"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Globe, 
  MessageSquare, 
  TrendingUp, 
  Sparkles, 
  Wrench, 
  FileText,
  CheckCircle2
} from "@/components/shared/Icons";

export default function WhatWeDoSection() {
  const items = [
    {
      title: "Listings on 6 channels",
      desc: "More places to book, one calendar, no double bookings.",
      icon: Globe,
    },
    {
      title: "Guest messages, day and night",
      desc: "A local person replies, not a script.",
      icon: MessageSquare,
    },
    {
      title: "Pricing updated daily",
      desc: "Rates follow demand, events and competing listings.",
      icon: TrendingUp,
    },
    {
      title: "Cleaners with photo proof",
      desc: "Background-checked cleaners, photos after every stay.",
      icon: Sparkles,
    },
    {
      title: "Repairs and maintenance",
      desc: "Local tradespeople. Nothing over $300 without your approval.",
      icon: Wrench,
    },
    {
      title: "Monthly statements",
      desc: "Paid by the 5th, with every booking and expense itemized.",
      icon: FileText,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FDFAF5] border-b border-[#E6DCB8]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8860B] select-none">
            WHAT WE ACTUALLY DO
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] tracking-tight">
            Everything. <span className="text-[#B8860B]">That&apos;s the short answer.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto font-normal">
            Most owners hire help and still end up answering guests at midnight. With NestWise, you don&apos;t. Here&apos;s what we do, so you don&apos;t have to.
          </p>
        </motion.div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-7 border border-[#E6DCB8] shadow-luxury hover:border-[#B8860B] hover:shadow-luxury-lg transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FDFAF5] border border-[#E6DCB8] flex items-center justify-center text-[#B8860B] group-hover:bg-[#1E3A8A] group-hover:text-[#D4AF37] transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1E3A8A] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#4B5563] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#B8860B]">
                  <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0" />
                  <span>Included in 22% fee</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Line Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <div className="inline-block p-4 sm:px-8 sm:py-4 rounded-2xl bg-white border border-[#B8860B]/40 shadow-md">
            <p className="font-serif text-base sm:text-lg font-bold text-[#1E3A8A]">
              Your job is to read the report. <span className="text-[#B8860B]">That&apos;s it.</span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
