"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Calendar, 
  MapPin, 
  DollarSign, 
  Clock, 
  Award 
} from "@/components/shared/Icons";

// ============================================================
// DATA - Universal & Objective (No Fake Claims / Clean Tone)
// ============================================================

const AUDIT_POINTS = [
  {
    id: "01",
    title: "Nightly Rate Position",
    subtitle: "Where your rate sits against 12 comparable properties",
    badge: "Market Gap",
    stat: "12 Local Comps",
    icon: DollarSign,
    description:
      "Direct benchmark against the 12 closest comparable properties in your immediate neighborhood. Pinpoints whether your nightly rate gap is caused by your home or by a static pricing strategy.",
    highlight: "Illustrative example: A typical neighborhood townhome charging $186 vs. the $228 market median leaving $42/night on the table.",
  },
  {
    id: "02",
    title: "Occupancy & Calendar Flow",
    subtitle: "Which nights fill, which do not, and why",
    badge: "Midweek Strategy",
    stat: "Occupancy Trends",
    icon: Calendar,
    description:
      "Uncovers restrictive minimum-stay settings and gaps between weekend bookings. Analyzes how relaxed midweek rules capture steady bookings without sacrificing weekend rates.",
    highlight: "Illustrative example: Adjusting midweek minimum-night controls can lift overall monthly occupancy by 10%–15%.",
  },
  {
    id: "03",
    title: "Listing Quality & Search Rank",
    subtitle: "Specific factors affecting where your listing appears",
    badge: "Algorithm Review",
    stat: "Search Visibility",
    icon: Sparkles,
    description:
      "Audits listing titles, checks off hidden amenity tags, and identifies photo staging improvements that guests frequently search and filter for.",
    highlight: "Illustrative example: Completing missing high-value amenities (like fast Wi-Fi and dedicated desks) directly boosts search placement.",
  },
  {
    id: "04",
    title: "Seasonality & Local Event Surges",
    subtitle: "How Washington demand moves throughout the year",
    badge: "Demand Curve",
    stat: "Seasonal Peaks",
    icon: TrendingUp,
    description:
      "Maps out peak summer surges (June–September) and shoulder seasons, replacing flat year-round rates with daily demand adjustments for concerts, conferences, and sports.",
    highlight: "Illustrative example: Automated rate adjustments capture peak summer rates without missing out on shoulder-season bookings.",
  },
  {
    id: "05",
    title: "Action Roadmap (Top 3 Fixes)",
    subtitle: "The three highest-impact changes in order of priority",
    badge: "Action Plan",
    stat: "3 Key Steps",
    icon: Award,
    description:
      "Ranks the exact 3 highest-ROI operational improvements for your specific home. Yours to keep and act on independently with zero obligation, or have NestWise handle end-to-end.",
    highlight: "Illustrative example: 1. Daily market pricing updates. 2. Flexible midweek minimum stays. 3. Amenity checklist completion.",
  },
];

// ============================================================
// COMPONENTS
// ============================================================

const MetricCard = ({ 
  label, 
  value, 
  subtext, 
  isHighlight = false,
  isPositive = false 
}: { 
  label: string; 
  value: string; 
  subtext: string; 
  isHighlight?: boolean;
  isPositive?: boolean;
}) => (
  <div 
    className={`bg-[#FDFAF5] p-3 rounded-xl border text-center transition-all ${
      isHighlight 
        ? 'border-[#B8860B]/40 shadow-xs' 
        : isPositive 
          ? 'border-emerald-200' 
          : 'border-[#E6DCB8]'
    }`}
  >
    <div className={`text-[9px] uppercase font-bold ${
      isHighlight ? 'text-[#B8860B]' : isPositive ? 'text-emerald-700' : 'text-[#6B7280]'
    }`}>
      {label}
    </div>
    <div className={`text-lg font-serif font-extrabold mt-0.5 ${
      isHighlight ? 'text-[#B8860B]' : isPositive ? 'text-emerald-700' : 'text-[#1E3A8A]'
    }`}>
      {value}
    </div>
    <div className="text-[9px] text-[#6B7280]">{subtext}</div>
  </div>
);

export default function AuditValueProp() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section 
      id="audit-value" 
      className="py-20 lg:py-28 bg-gradient-to-br from-[#F7F2EA] via-[#FDFAF5] to-[#F7F2EA] border-b border-[#E6DCB8] relative overflow-hidden"
      aria-label="Free Property Revenue Audit"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Section 6 from CEO Deck */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8860B] select-none">
            THE FREE AUDIT
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] tracking-tight leading-[1.15]">
            Find out what your property should be earning.{" "}
            <span className="text-[#B8860B]">Free.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto font-normal">
            Before you commit to anything, let us show you the numbers. We&apos;ll compare your property against 12 similar homes nearby and send you a straight answer: what you&apos;re charging, what the market is charging, and what you&apos;re leaving on the table.
          </p>
          <p className="text-sm text-[#6B7280] max-w-xl mx-auto">
            It takes two minutes to request and arrives within 48 hours. It&apos;s free, it&apos;s yours to keep, and you&apos;re welcome to act on it yourself. No catch, and no salesperson calling you afterwards unless you ask.
          </p>
        </motion.div>

        {/* Main Content Grid: items-start prevents weird resizing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Stable Document Replica */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 bg-white rounded-3xl border-2 border-[#E6DCB8] shadow-2xl overflow-hidden flex flex-col justify-between relative group"
          >
            {/* Document Header */}
            <div className="bg-[#1E3A8A] text-white p-6 sm:p-7 border-b border-[#B8860B]/40">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                <div className="flex items-center gap-2 font-bold tracking-widest text-[#D4AF37] uppercase text-[11px]">
                  <Award className="w-4 h-4" />
                  <span>NestWise Group LLC</span>
                </div>
                <span className="text-[10px] uppercase tracking-wider bg-white/10 px-2.5 py-1 rounded text-slate-200 border border-white/15">
                  Sample Audit Report (Illustrative Example)
                </span>
              </div>

              <div className="pt-4">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                  Report Summary (Illustrative Example)
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1 leading-snug">
                  Property is currently underpriced{" "}
                  <span className="text-[#D4AF37] italic font-normal">by roughly $42 per night.</span>
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Benchmarked against 12 comparable homes nearby. Prepared for illustrative 3-Bed Residential Home.
                </p>
              </div>
            </div>

            {/* Document Body */}
            <div className="p-6 sm:p-7 space-y-6 bg-white">
              
              {/* Metric Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <MetricCard label="Current Rate" value="$186" subtext="avg. nightly rate" />
                <MetricCard 
                  label="Market Median" 
                  value="$228" 
                  subtext="12 comparables" 
                  isHighlight 
                />
                <MetricCard label="Occupancy" value="61%" subtext="trailing 90 days" />
                <MetricCard 
                  label="Market Occ." 
                  value="74%" 
                  subtext="12 comparables" 
                  isPositive 
                />
              </div>

              {/* Recommended Rate Card */}
              <div className="bg-[#1e3a8a] rounded-2xl p-4 sm:p-5 text-white border border-[#B8860B]/40 shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-white/10 pb-3 gap-1">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-bold">
                      Recommended Nightly Rate
                    </div>
                    <div className="text-2xl font-serif font-extrabold text-white">
                      $225 <span className="text-xs font-sans text-slate-300 font-normal">average nightly rate</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold bg-white/5 px-2 py-1 rounded self-start sm:self-auto border border-emerald-400/20">
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

              {/* Guarantee Box */}
              <div className="p-3.5 bg-[#FDFAF5] rounded-xl border border-[#E6DCB8] text-xs text-[#4B5563] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                <span>
                  <strong>Independent Ownership:</strong> This audit report is 100% free and yours to keep. You can use it yourself, or hand us the keys and we&apos;ll run the whole thing.
                </span>
              </div>
            </div>

            {/* Document Signature */}
            <div className="px-6 py-3.5 bg-[#FDFAF5] border-t border-[#E6DCB8] flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-[#4B5563] gap-2">
              <div>
                <strong>Emmanuel N. Muvunyi</strong> · President/CEO · NestWise Group LLC
              </div>
              <span className="text-[#B8860B] font-semibold flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                Renton, WA
              </span>
            </div>
          </motion.div>

          {/* Right: Interactive 5-Point Accordion List */}
          <div className="lg:col-span-6 space-y-3">
            {AUDIT_POINTS.map((point, index) => {
              const isSelected = activeTab === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-white border-[#B8860B] shadow-md"
                      : "bg-white/80 border-[#E6DCB8] hover:bg-white hover:border-[#B8860B]/50"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3.5 min-w-0 flex-1">
                      <span 
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-serif text-sm font-bold shrink-0 transition-colors ${
                          isSelected 
                            ? "bg-[#1E3A8A] text-[#D4AF37]" 
                            : "bg-[#FDFAF5] text-[#1E3A8A] border border-[#E6DCB8]"
                        }`}
                      >
                        {point.id}
                      </span>
                      
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-serif text-base font-bold text-[#1E3A8A]">
                            {point.title}
                          </h4>
                          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#FDFAF5] text-[#B8860B] border border-[#E6DCB8] hidden sm:inline-block">
                            {point.badge}
                          </span>
                        </div>
                        <p className="text-xs text-[#6B7280] mt-0.5">
                          {point.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs font-bold text-[#B8860B] whitespace-nowrap shrink-0">
                      {point.stat}
                    </span>
                  </div>

                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-4 pt-4 border-t border-slate-100 text-xs text-[#374151] space-y-2 overflow-hidden"
                      >
                        <p className="leading-relaxed">{point.description}</p>
                        <div className="p-2.5 rounded-lg bg-[#FDFAF5] border border-[#E6DCB8] text-[11px] text-[#1E3A8A] font-medium flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] shrink-0 mt-1.5" />
                          <span>{point.highlight}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* Primary Action Button */}
            <div className="pt-3 space-y-2 text-center">
              <Link
                href="/audit"
                className="inline-flex w-full items-center justify-center gap-3 px-6 py-4 bg-[#1E3A8A] text-white font-serif font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:bg-[#B8860B] transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <span>Get My Free Property Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-[#6B7280] pt-1">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  Takes two minutes
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#B8860B]" />
                  Delivered in 48 hours
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#B8860B]" />
                  100% free, yours to keep
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}