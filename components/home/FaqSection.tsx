"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "@/components/shared/Icons";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does the 22% fee work?",
      a: "We charge 22% of booking revenue. That’s our only ongoing fee: no markups on linens, cleaning, card processing or repairs, and no admin charges. Cleaning is paid by the guest. Repairs and supplies are billed to you at cost, with receipts. Your monthly statement shows every line.",
    },
    {
      q: "Who pays for cleaning?",
      a: "The guest pays a cleaning fee at checkout, so cleaning doesn’t come out of your earnings. We book background-checked cleaners through Turno and check their photos after every stay.",
    },
    {
      q: "What is your contract length?",
      a: "Month-to-month. You can end the agreement at any time with 30 days’ written notice, with no cancellation fee.",
    },
    {
      q: "How does your pricing work?",
      a: "We reset your nightly rate every day using nearby listings, local demand, Seattle events and the season. Prices rise on busy nights and drop to fill quiet ones. You can set a minimum nightly rate, and we’ll never go below it.",
    },
    {
      q: "What are the rules in Seattle, Bellevue, and the Eastside?",
      a: "They vary by city, which is why we check every address first. In Bellevue, entire single-family homes can’t be rented for under 30 days; condos and apartments can, with a registration notice and building limits. Seattle requires a business license and STR operator license, with the license number on every listing. Kirkland ties short-term rentals to the owner's primary residence, and Redmond requires a business license per unit. Before we list your home, we confirm it qualifies and help you apply.",
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
