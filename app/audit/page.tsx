import React from "react";
import type { Metadata } from "next";
import AuditForm from "@/components/shared/AuditForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free 48-Hour Property Revenue Audit | NestWise Group",
  description:
    "Request your personalized, deeply benchmarked market report matching your Greater Seattle and Eastside property against its 12 closest real-time market comparables.",
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

          <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8860B] select-none">
            FREE 5-POINT REVENUE AUDIT
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] tracking-tight">
            Free 48-Hour Property Revenue Audit
          </h1>
          <p className="text-base sm:text-lg text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
            Receive an honest, personalized market report matching your home against its 12 closest real-time comparables in Greater Seattle and the Eastside.
          </p>
        </div>
      </section>

      {/* Main Audit Form Container */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AuditForm
            variant="full"
            title="Complete Your Property Profile"
            subtitle="Our team benchmarks your property against 12 nearby comparable homes to show you what you're charging, what the market is earning, and what you're leaving on the table."
            buttonText="Get My Free Property Audit"
          />

          {/* Guarantee Badges */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white rounded-2xl border border-[#E6DCB8] shadow-sm">
              <div className="font-serif text-lg font-bold text-[#1E3A8A] mb-1">
                12-Comp Deep Dive
              </div>
              <p className="text-xs text-[#6B7280]">
                Exact revenue, occupancy, and nightly rate matching against neighborhood peers.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-[#E6DCB8] shadow-sm">
              <div className="font-serif text-lg font-bold text-[#1E3A8A] mb-1">
                Zero Sales Pressure
              </div>
              <p className="text-xs text-[#6B7280]">
                Clean market report delivered within 48 hours. Yours to keep, no obligation.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-[#E6DCB8] shadow-sm">
              <div className="font-serif text-lg font-bold text-[#1E3A8A] mb-1">
                22% Fee Model Preview
              </div>
              <p className="text-xs text-[#6B7280]">
                22% of booking revenue with no hidden markups and no long-term contract.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/" className="text-xs font-semibold text-[#1E3A8A] hover:text-[#B8860B] underline">
              ← Return to NestWise Group Homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
