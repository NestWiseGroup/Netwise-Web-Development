import React from "react";
import type { Metadata } from "next";
import AuditForm from "@/components/shared/AuditForm";
import ComparisonMatrix from "@/components/shared/ComparisonMatrix";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free 48-Hour Property Revenue Audit | NestWise Group",
  description:
    "Request your personalized, deeply benchmarked market report matching your Seattle or Bellevue property against its 12 closest real-time market comparables.",
};

export default function AuditPage() {
  return (
    <div className="min-h-screen bg-[#FDFAF5]">
      {/* Top Breadcrumb & Header */}
      <section className="pt-12 pb-8 bg-mesh-luxury border-b border-[#E6DCB8]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          
          {/* Breadcrumb Navigation */}
          <nav 
            className="flex items-center justify-center gap-2 text-xs font-semibold text-[#64748B] mb-2"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[#1E3A8A] transition-colors duration-200">
              Home
            </Link>
            <span className="text-[#B8860B]" aria-hidden="true">/</span>
            <span className="text-[#1E3A8A]">Property Revenue Audit</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E3A8A]/5 border border-[#B8860B]/30">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B8860B]">
              INSTITUTIONAL ASSET INTELLIGENCE
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] tracking-tight">
            Free 48-Hour Property Revenue Audit
          </h1>
          <p className="text-base sm:text-lg text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
            Receive a personalized, deeply benchmarked market report matching your home against its 12 closest real-time comparables in King County.
          </p>
        </div>
      </section>

      {/* Main Audit Form Container */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AuditForm
            variant="full"
            title="Complete Your Property Profile"
            subtitle="Our analytics desk pulls live AirDNA data, recent MLS short-term transactions, and King County seasonality curves to formulate your bespoke yield model."
            buttonText="Generate My 48-Hour Revenue Audit"
          />

          {/* Guarantee Badges */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white rounded-2xl border border-[#E6DCB8] shadow-sm">
              <div className="font-serif text-lg font-bold text-[#1E3A8A] mb-1">
                12-Comp Deep Dive
              </div>
              <p className="text-xs text-[#6B7280]">
                Exact revenue, occupancy, and ADR matching against neighborhood peers.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-[#E6DCB8] shadow-sm">
              <div className="font-serif text-lg font-bold text-[#1E3A8A] mb-1">
                Zero Sales Pressure
              </div>
              <p className="text-xs text-[#6B7280]">
                Advisory market report delivered in clean PDF format directly to your inbox.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-[#E6DCB8] shadow-sm">
              <div className="font-serif text-lg font-bold text-[#1E3A8A] mb-1">
                22% Fee Model Preview
              </div>
              <p className="text-xs text-[#6B7280]">
                See exactly how much you save vs. legacy 28%–30% management franchises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Condensed Comparison Matrix */}
      <section className="py-14 sm:py-16 bg-white border-t border-[#E6DCB8]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ComparisonMatrix
            variant="condensed"
            title="Why Audit Before Hiring A Manager?"
            subtitle="Most luxury owners switch to NestWise after seeing the true cost of 30%+ legacy contracts. Compare the fundamental operating differences below."
          />

          <div className="mt-8 text-center">
            <Link href="/" className="text-xs font-semibold text-[#1E3A8A] hover:text-[#B8860B] underline">
              ← Return to NestWise Group Homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
