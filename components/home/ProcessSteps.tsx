import React from "react";
import Link from "next/link";
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
      title: "Book Strategy Call",
      time: "Executive Review",
      description:
        "Review your report directly with Marcus Vance, Principal Director of Operations, to map out transition logistics or onboarding.",
      icon: <Calendar className="w-5 h-5 text-[#B8860B]" />,
    },
  ];

  return (
    <section id="how-we-work" className="py-20 lg:py-28 bg-[#FDFAF5] border-b border-[#E6DCB8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
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
        </div>

        {/* 3 Step Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-[#E6DCB8] shadow-luxury flex flex-col justify-between relative group hover:border-[#B8860B] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-3xl font-extrabold text-[#B8860B]">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#FDFAF5] border border-[#E6DCB8] flex items-center justify-center">
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
            </div>
          ))}
        </div>

        {/* Action Link */}
        <div className="mt-12 text-center">
          <Link
            href="/audit"
            className="btn-gold px-8 py-3.5 rounded-xl font-serif font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-md"
          >
            <span>Start Step 1: Submit Property Details</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
