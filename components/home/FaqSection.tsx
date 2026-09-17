"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "@/components/shared/Icons";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does the 22% flat fee structure work?",
      a: "NestWise charges a single, transparent 22% management fee on gross booking revenues. There is a stated one-time $600 onboarding fee to professionally photograph, stage, and set up your multi-channel listings. There are zero hidden deductions, zero linen markups, and zero administrative surcharges.",
    },
    {
      q: "What is your contract duration and lock-in policy?",
      a: "We have zero long-term lock-in contracts. Our agreements are month-to-month. If your personal plans or portfolio goals change, you can walk away anytime with a simple 30-day notice. You never lose control of your calendar.",
    },
    {
      q: "How do you handle cleaning and property turnovers?",
      a: "We partner with vetted, background-checked professional cleaners through Turno. After every checkout, cleaners follow a rigorous inspection checklist and take verification photos, ensuring your home is pristine before the next guest arrives.",
    },
    {
      q: "How does your dynamic pricing work?",
      a: "We update your nightly rate daily using live market data and competitor benchmarks. We factor in local demand surges, Washington events, concerts, conferences, and seasonal patterns so you never underprice peak dates or sit vacant during slow periods.",
    },
    {
      q: "How does NestWise handle Seattle SMC 6.600 and Bellevue STR permits?",
      a: "Seattle limits short-term operators to two dwelling units (primary residence plus one secondary unit). Bellevue requires city transient lodging registration and King County lodging tax filings. We help navigate the permit paperwork and quarterly lodging tax filings to keep your home fully compliant.",
    },
    {
      q: "Why is the 5-Point Property Revenue Audit 100% free?",
      a: "We benchmark your property against 12 nearby comparable homes to show you what you're charging, what the market is earning, and what you're leaving on the table. The report is delivered in 48 hours, is 100% free, and is yours to keep with no obligation.",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FDFAF5] border-b border-[#E6DCB8]/60 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 space-y-3"
        >
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8860B] select-none">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-xl mx-auto">
            Everything you need to know about our 22% fee model, local King County regulations, and onboarding logistics.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? "border-[#B8860B] shadow-md" : "border-[#E6DCB8] hover:border-[#B8860B]/50"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#1E3A8A]">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-90 bg-[#1E3A8A] text-[#D4AF37]" : "bg-[#FDFAF5] text-[#1E3A8A] border border-[#E6DCB8]"
                  }`}>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#4B5563] leading-relaxed border-t border-slate-100">
                        <p>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Support Question Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center p-6 bg-white rounded-2xl border border-[#E6DCB8] text-xs sm:text-sm text-[#4B5563]"
        >
          Have a unique regulatory or portfolio question? Call our direct executive desk at{" "}
          <a href="tel:+14254146819" className="text-[#B8860B] font-bold hover:underline">
            +1 (425) 414-6819
          </a>
          .
        </motion.div>

      </div>
    </section>
  );
}
