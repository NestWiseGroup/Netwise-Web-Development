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
// DATA
// ============================================================

const AUDIT_POINTS = [
  {
    id: "01",
    title: "Pricing Position",
    subtitle: "Where your rate sits against 12 comparable properties",
    badge: "Market Gap Analysis",
    stat: "$42/night gap",
    icon: DollarSign,
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
    icon: Calendar,
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
    icon: TrendingUp,
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
    icon: Award,
    description:
      "Ranks the exact 3 highest-ROI operational improvements. Yours to keep and act on independently with zero obligation, or have NestWise execute end-to-end.",
    highlight: "1. Dynamic nightly pricing. 2. Relaxed midweek minimum. 3. Amenity checklist completion.",
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
  <motion.div 
    whileHover={{ y: -2, transition: { duration: 0.2 } }}
    className={`bg-[#FDFAF5] p-3 rounded-xl border text-center transition-all duration-300 ${
      isHighlight 
        ? 'border-[#B8860B]/30 shadow-sm' 
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
  </motion.div>
);

const AuditTab = ({ 
  point, 
  index, 
  isSelected, 
  onClick 
}: { 
  point: typeof AUDIT_POINTS[0]; 
  index: number; 
  isSelected: boolean; 
  onClick: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      onClick={onClick}
      className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
        isSelected
          ? "bg-white border-[#B8860B] shadow-lg -translate-y-0.5"
          : "bg-white/80 border-[#E6DCB8] hover:bg-white hover:border-[#B8860B]/50 hover:shadow-md"
      }`}
      whileHover={{ scale: isSelected ? 1 : 1.005 }}
      whileTap={{ scale: 0.995 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3.5 min-w-0 flex-1">
          <motion.span 
            animate={isSelected ? { scale: 1.1 } : { scale: 1 }}
            className={`w-9 h-9 rounded-xl flex items-center justify-center font-serif text-sm font-bold shrink-0 transition-all duration-300 ${
              isSelected 
                ? "bg-[#1E3A8A] text-[#D4AF37] shadow-md" 
                : "bg-[#FDFAF5] text-[#1E3A8A] border border-[#E6DCB8]"
            }`}
          >
            {point.id}
          </motion.span>
          
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="font-serif text-base font-bold text-[#1E3A8A] truncate">
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

        <div className="flex items-center gap-2 shrink-0">
          {isSelected && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="hidden sm:flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded"
            >
              <CheckCircle2 className="w-3 h-3" />
              <span>Active</span>
            </motion.div>
          )}
          <span className="text-xs font-bold text-[#B8860B] whitespace-nowrap">
            {point.stat}
          </span>
        </div>
      </div>

      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mt-4 pt-4 border-t border-slate-100 text-xs text-[#374151] space-y-2 overflow-hidden"
          >
            <p className="leading-relaxed">{point.description}</p>
            <div className="p-2.5 rounded-lg bg-[#FDFAF5] border border-[#E6DCB8] text-[11px] text-[#1E3A8A] font-medium flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] shrink-0 mt-1.5" />
              <span><strong className="text-[#B8860B]">Actual Case:</strong> {point.highlight}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function AuditValueProp() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section 
      id="audit-value" 
      className="py-20 lg:py-28 bg-gradient-to-br from-[#F7F2EA] via-[#FDFAF5] to-[#F7F2EA] border-b border-[#E6DCB8] relative overflow-hidden"
      aria-label="Free Property Revenue Audit"
    >
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B8860B]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#1E3A8A]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B8860B]/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E3A8A]/5 border border-[#B8860B]/30 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B8860B]">
              YOUR FREE 5-POINT REVENUE AUDIT
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] tracking-tight leading-[1.15]">
            See Exactly What Your Property Is{' '}
            <span className="text-[#B8860B]">Leaving On The Table</span>
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Every audit is a confidential, custom-synthesized report benchmarking your exact 
            property against 12 verified local comparables. Here&apos;s what&apos;s inside your 5-point dossier:
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Document Replica */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 bg-white rounded-3xl border-2 border-[#E6DCB8] shadow-2xl overflow-hidden flex flex-col justify-between relative group hover:shadow-3xl transition-shadow duration-500"
          >
            
            {/* Document Header */}
            <div className="bg-[#1E3A8A] text-white p-6 sm:p-7 border-b border-[#B8860B]/40">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                <div className="flex items-center gap-2 font-bold tracking-widest text-[#D4AF37] uppercase text-[11px]">
                  <Award className="w-4 h-4" />
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
                  Your property is underpriced{' '}
                  <span className="text-[#D4AF37] italic font-normal">by roughly $42 per night.</span>
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Benchmarked against 12 comparable properties in Crossroads & Central Bellevue. 
                  Prepared for Sarah Chen (3-Bed Townhome).
                </p>
              </div>
            </div>

            {/* Document Body */}
            <div className="p-6 sm:p-7 space-y-6 bg-white">
              
              {/* Metric Grid */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-2.5"
              >
                <motion.div variants={itemVariants}>
                  <MetricCard label="Your Current Rate" value="$186" subtext="avg. nightly" />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <MetricCard 
                    label="Market Median" 
                    value="$228" 
                    subtext="12 comparables" 
                    isHighlight 
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <MetricCard label="Your Occupancy" value="61%" subtext="trailing 90 days" />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <MetricCard 
                    label="Market Occ." 
                    value="74%" 
                    subtext="12 comparables" 
                    isPositive 
                  />
                </motion.div>
              </motion.div>

              {/* Recommended Rate Card */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-[#0A132C] rounded-2xl p-4 sm:p-5 text-white border border-[#B8860B]/40 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-white/10 pb-3 gap-1">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-bold">
                      Recommended Nightly Rate
                    </div>
                    <div className="text-2xl font-serif font-extrabold text-white">
                      $225 <span className="text-xs font-sans text-slate-300 font-normal">average nightly</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold bg-white/5 px-2 py-1 rounded self-start sm:self-auto border border-emerald-400/20">
                    +$14,200 Projected Annual Net
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-3 text-center text-xs">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="text-[9px] uppercase text-slate-300">Weekday</div>
                    <div className="font-bold text-white mt-0.5">$190 – $220</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="text-[9px] uppercase text-slate-300">Weekend</div>
                    <div className="font-bold text-white mt-0.5">$240 – $285</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/5 border border-[#B8860B]/40 hover:bg-[#B8860B]/10 transition-colors">
                    <div className="text-[9px] uppercase text-[#D4AF37]">Summer Peak</div>
                    <div className="font-bold text-[#D4AF37] mt-0.5">$265 – $310</div>
                  </div>
                </div>
              </motion.div>

              {/* Document Footer Guarantee */}
              <div className="p-3.5 bg-[#FDFAF5] rounded-xl border border-[#E6DCB8] text-xs text-[#4B5563] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                <span>
                  <strong>Independent Ownership Guarantee:</strong> This audit is 100% free and 
                  yours to keep. You may act on it independently or hire NestWise to execute the plan.
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
                500 108th Ave NE, Bellevue
              </span>
            </div>
          </motion.div>

          {/* Right: Interactive Tabs */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-3">
            {AUDIT_POINTS.map((point, index) => (
              <AuditTab
                key={index}
                point={point}
                index={index}
                isSelected={activeTab === index}
                onClick={() => setActiveTab(index)}
              />
            ))}

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-3 space-y-2 text-center"
            >
              <Link
                href="/audit"
                className="inline-flex w-full items-center justify-center gap-3 px-6 py-4 bg-[#1E3A8A] text-white font-serif font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:bg-[#B8860B] transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <span>Request Free Property Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-[#6B7280]">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  Takes 2 minutes
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#B8860B]" />
                  100% free
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#B8860B]" />
                  Confidential 12-comp dataset
                </span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}