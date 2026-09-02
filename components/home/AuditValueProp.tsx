"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  BarChart3, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Sparkles, 
  ShieldCheck, 
  Calendar, 
  MapPin, 
  Star 
} from "@/components/shared/Icons";

export default function AuditValueProp() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const auditPoints = [
    {
      id: "01",
      title: "Pricing Position",
      subtitle: "Where your rate sits against 12 comparable properties",
      badge: "Market Gap Analysis",
      stat: "$42/night gap",
      description:
        "Direct benchmark against the 12 closest comparable properties within 0.5 miles. Pinpoints whether your ADR gap is caused by your home or by a static pricing strategy.",
      highlight: "Sarah's Crossroads townhome was underpriced at $186 vs. the $228 market median.",
    },
    {
      id: "02",
      title: "Occupancy & Midweek Forecast",
      subtitle: "Which nights fill, which do not, and why",
      badge: "Midweek Yield",
      stat: "61% vs 74% median",
      description:
        "Uncovers restrictive minimum-stay settings that block high-yield Sunday through Wednesday business and medical travel across Bellevue.",
      highlight: "Shifting to 1-night midweek minimums captures demand that lifts occupancy above 74%.",
    },
    {
      id: "03",
      title: "Listing Quality & Search Placement",
      subtitle: "The specific fixes affecting your search placement",
      badge: "Algorithm Audit",
      stat: "+3 Search Rank Tier",
      description:
        "Audits title search keywords, identifies unchecked amenities, and flags missing photography (like dedicated workspaces) that corporate travelers filter for.",
      highlight: "Identifies 7 missing amenity checkboxes and title keywords that boost search rank.",
    },
    {
      id: "04",
      title: "Demand & Seasonality Curve",
      subtitle: "How Bellevue demand moves through the year",
      badge: "Seasonality Modeling",
      stat: "+18% to +24% Summer Peak",
      description:
        "Maps out peak summer surges (June–September) and shoulder seasons, replacing flat year-round rates with automated demand-following adjustments.",
      highlight: "Eliminates money left on the table during Seattle events and summer highs ($265–$310 peak).",
    },
    {
      id: "05",
      title: "Revenue Opportunity & Action Plan",
      subtitle: "The three highest-value changes, in order of effort",
      badge: "Executive Roadmap",
      stat: "3 Highest-ROI Actions",
      description:
        "Ranks the exact 3 highest-ROI operational improvements. Yours to keep and act on independently with zero obligation, or have NestWise execute end-to-end.",
      highlight: "1. Dynamic nightly pricing. 2. Relaxed midweek minimum. 3. Amenity checklist completion.",
    },
  ];

  return (
    <section id="audit-value" className="py-20 lg:py-28 bg-[#F7F2EA] border-b border-[#E6DCB8] relative overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B8860B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#1E3A8A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E3A8A]/5 border border-[#B8860B]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B8860B]">
              YOUR FREE 5-POINT REVENUE AUDIT
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] tracking-tight leading-[1.15]">
            See Exactly What Your Property Is Leaving On The Table
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Every audit is a confidential, custom-synthesized report benchmarking your exact property against 12 verified local comparables. Here is what is inside your 5-point dossier:
          </p>
        </div>

        {/* The 5-Point Dossier Interactive Preview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Interactive Real Audit Document Replica (Styled directly from actual PDF report) */}
          <div className="lg:col-span-6 bg-white rounded-3xl border-2 border-[#E6DCB8] shadow-2xl overflow-hidden flex flex-col justify-between relative group">
            
            {/* Navy Document Header */}
            <div className="bg-[#1E3A8A] text-white p-6 sm:p-7 border-b border-[#B8860B]/40">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                <div className="flex items-center gap-2 font-bold tracking-widest text-[#D4AF37] uppercase text-[11px]">
                  <span>NWG · NestWise Group</span>
                </div>
                <span className="text-[10px] uppercase tracking-wider bg-white/10 px-2.5 py-1 rounded text-slate-200 border border-white/15">
                  Executive Summary Sample
                </span>
              </div>

              <div className="pt-4">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                  The Short Version
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1 leading-snug">
                  Your property is underpriced <br className="hidden sm:block" />
                  <span className="text-[#D4AF37] italic font-normal">by roughly $42 per night.</span>
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Benchmarked against 12 comparable properties in Crossroads & Central Bellevue. Prepared for Sarah Chen (3-Bed Townhome).
                </p>
              </div>
            </div>

            {/* Document Body: Exact 4-Metric Grid from PDF */}
            <div className="p-6 sm:p-7 space-y-6 bg-white">
              
              {/* 4 Observed Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="bg-[#FDFAF5] p-3 rounded-xl border border-[#E6DCB8] text-center">
                  <div className="text-[9px] uppercase font-bold text-[#6B7280]">Your Current Rate</div>
                  <div className="text-lg font-serif font-extrabold text-[#1E3A8A] mt-0.5">$186</div>
                  <div className="text-[9px] text-[#6B7280]">avg. nightly</div>
                </div>

                <div className="bg-[#FDFAF5] p-3 rounded-xl border border-[#B8860B]/30 text-center">
                  <div className="text-[9px] uppercase font-bold text-[#B8860B]">Market Median</div>
                  <div className="text-lg font-serif font-extrabold text-[#B8860B] mt-0.5">$228</div>
                  <div className="text-[9px] text-[#6B7280]">12 comparables</div>
                </div>

                <div className="bg-[#FDFAF5] p-3 rounded-xl border border-[#E6DCB8] text-center">
                  <div className="text-[9px] uppercase font-bold text-[#6B7280]">Your Occupancy</div>
                  <div className="text-lg font-serif font-extrabold text-[#1E3A8A] mt-0.5">61%</div>
                  <div className="text-[9px] text-[#6B7280]">trailing 90 days</div>
                </div>

                <div className="bg-[#FDFAF5] p-3 rounded-xl border border-emerald-200 text-center">
                  <div className="text-[9px] uppercase font-bold text-emerald-700">Market Occ.</div>
                  <div className="text-lg font-serif font-extrabold text-emerald-700 mt-0.5">74%</div>
                  <div className="text-[9px] text-[#6B7280]">12 comparables</div>
                </div>
              </div>

              {/* Recommended Rate Card */}
              <div className="bg-[#0A132C] rounded-2xl p-4 sm:p-5 text-white border border-[#B8860B]/40 shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-white/10 pb-3 gap-1">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-bold">
                      Recommended Nightly Rate
                    </div>
                    <div className="text-2xl font-serif font-extrabold text-white">
                      $225 <span className="text-xs font-sans text-slate-300 font-normal">average nightly</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold bg-white/5 px-2 py-1 rounded self-start sm:self-auto">
                    +$14,200 Projected Annual Net
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-3 text-center text-xs">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-[9px] uppercase text-slate-300">Weekday</div>
                    <div className="font-bold text-white mt-0.5">$190 – $220</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-[9px] uppercase text-slate-300">Weekend</div>
                    <div className="font-bold text-white mt-0.5">$240 – $285</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/5 border border-[#B8860B]/40">
                    <div className="text-[9px] uppercase text-[#D4AF37]">Summer Peak</div>
                    <div className="font-bold text-[#D4AF37] mt-0.5">$265 – $310</div>
                  </div>
                </div>
              </div>

              {/* Document Footer Guarantee */}
              <div className="p-3.5 bg-[#FDFAF5] rounded-xl border border-[#E6DCB8] text-xs text-[#4B5563] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                <span>
                  <strong>Independent Ownership Guarantee:</strong> This audit is 100% free and yours to keep. You may act on it independently or hire NestWise to execute the plan.
                </span>
              </div>
            </div>

            {/* Document Signature Strip */}
            <div className="px-6 py-3.5 bg-[#FDFAF5] border-t border-[#E6DCB8] flex items-center justify-between text-[11px] text-[#4B5563]">
              <div>
                <strong>Emmanuel N. Muvunyi</strong> · President/CEO · NestWise Group LLC
              </div>
              <span className="text-[#B8860B] font-semibold">500 108th Ave NE, Bellevue</span>
            </div>
          </div>

          {/* Right: The 5 Point Interactive Breakdown Tabs */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-3">
            {auditPoints.map((point, index) => {
              const isSelected = activeTab === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-white border-[#B8860B] shadow-lg -translate-y-0.5"
                      : "bg-white/80 border-[#E6DCB8] hover:bg-white hover:border-[#B8860B]/50"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <span className={`w-9 h-9 rounded-xl flex items-center justify-center font-serif text-sm font-bold shrink-0 transition-colors ${
                        isSelected 
                          ? "bg-[#1E3A8A] text-[#D4AF37]" 
                          : "bg-[#FDFAF5] text-[#1E3A8A] border border-[#E6DCB8]"
                      }`}>
                        {point.id}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-serif text-base font-bold text-[#1E3A8A]">
                            {point.title}
                          </h4>
                          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#FDFAF5] text-[#B8860B] border border-[#E6DCB8] hidden sm:inline-block">
                            {point.badge}
                          </span>
                        </div>
                        <p className="text-xs text-[#6B7280] mt-0.5 font-medium">
                          {point.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs font-bold text-[#B8860B] shrink-0">
                      {point.stat}
                    </span>
                  </div>

                  {isSelected && (
                    <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-[#374151] space-y-2 animate-in fade-in duration-200">
                      <p className="leading-relaxed">
                        {point.description}
                      </p>
                      <div className="p-2.5 rounded-lg bg-[#FDFAF5] border border-[#E6DCB8] text-[11px] text-[#1E3A8A] font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B]" />
                        <span><strong>Actual Case:</strong> {point.highlight}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Direct CTA Link */}
            <div className="pt-3">
              <Link
                href="/audit"
                className="btn-gold w-full py-4 px-6 rounded-xl font-serif font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-luxury hover:shadow-gold-glow transition-all"
              >
                <span>Request Your Free 5-Point Property Revenue Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
