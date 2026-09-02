"use client";

import React, { useState } from "react";
import { ChevronRight, Sparkles } from "@/components/shared/Icons";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does the 22% flat fee structure work?",
      a: "NestWise charges a single, transparent 22% fee on gross booking revenues. There are zero onboarding fees, zero linen replacement deductions, and zero hidden admin markups. You retain 78% of your gross earnings with complete monthly ledger reconciliation.",
    },
    {
      q: "What is your contract length and lock-in policy?",
      a: "We have zero long-term lock-in contracts. Our agreements are strictly month-to-month. If your personal goals or plans change, you can walk away anytime with a simple 30-day notice with zero calendar forfeiture.",
    },
    {
      q: "How does NestWise handle Seattle SMC 6.600 and Bellevue STR permits?",
      a: "Seattle limits short-term operators to two dwelling units (primary residence plus one secondary). Bellevue requires city transient lodging registration and King County lodging tax filings. NestWise handles 100% of the compliance paperwork, tax filings, and license renewals.",
    },
    {
      q: "Why is the 5-Point Property Revenue Audit 100% free?",
      a: "We benchmark your property against 12 local comparables using live AirDNA and MLS data to demonstrate our operational upside before you commit. The custom dossier is yours to keep and act on independently with no obligation.",
    },
    {
      q: "How fast can NestWise onboard my property?",
      a: "Standard onboarding takes 5 to 7 business days from on-site walk-through. This includes professional HDR photography, smart lock and Minut noise sensor deployment, inventory audits, and multi-channel synchronization across Airbnb, VRBO, and Booking.com.",
    },
    {
      q: "How do you protect my home against unruly guests and damage?",
      a: "We screen every guest through identity verification, enforce 25+ age minimums for luxury homes, deploy 24/7 Minut noise telemetry sensors (privacy-compliant, zero audio recording), and back every stay with $3,000,000 institutional Host Cover protection.",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FDFAF5] border-b border-[#E6DCB8]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A8A]/5 border border-[#B8860B]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B8860B]">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-xl mx-auto">
            Everything you need to know about our 22% fee model, local King County regulations, and onboarding logistics.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
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

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#4B5563] leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Question Footer */}
        <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-[#E6DCB8] text-xs sm:text-sm text-[#4B5563]">
          Have a unique regulatory or portfolio question? Call our direct executive desk at{" "}
          <a href="tel:+14254146819" className="text-[#B8860B] font-bold hover:underline">
            +1 (425) 414-6819
          </a>
          .
        </div>

      </div>
    </section>
  );
}
