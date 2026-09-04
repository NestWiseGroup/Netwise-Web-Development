"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Sparkles, 
  MapPin, 
  ShieldCheck, 
  TrendingUp, 
  HeartHandshake, 
  Building2, 
  Shield, 
  Zap,
  Users, 
  Home, 
  Star 
} from "@/components/shared/Icons";
import EarningsPotentialCard from "@/components/shared/EarningsPotentialCard";

// ============================================================
// DATA
// ============================================================

const CORE_VALUES = [
  {
    id: "hyper-local",
    icon: MapPin,
    title: "Hyper-Local Command Desk",
    desc: "Based at 500 108th Ave NE in Bellevue, WA. When an on-site issue arises, our local ground team responds in person within minutes—not via an overseas ticket queue.",
  },
  {
    id: "algorithmic-yield",
    icon: TrendingUp,
    title: "Algorithmic Yield Engineering",
    desc: "We replace manual guesswork with hourly dynamic pricing models synced with King County convention calendars, sporting events, and flight arrival density.",
  },
  {
    id: "radical-transparency",
    icon: HeartHandshake,
    title: "Radical Transparency & 22% Flat Fee",
    desc: "Zero hidden line items. Zero linen replacement surcharges. Zero lock-in contracts. You retain 78% of your gross earnings with complete monthly audit-ready reports.",
  },
  {
    id: "asset-stewardship",
    icon: ShieldCheck,
    title: "Uncompromising Asset Stewardship",
    desc: "Every stay is guarded by privacy-safe Minut decibel sensors, 25+ age minimums, biometric guest ID checks, and a $3,000,000 Host Cover insurance shield.",
  },
];

const DIFFERENTIATORS = [
  {
    id: "rapid-dispatch",
    icon: Zap,
    title: "Bellevue On-Site Rapid Dispatch",
    desc: "Physical ground presence within 30 minutes for urgent maintenance, noise alerts, or lockout assistance.",
  },
  {
    id: "hospital-grade",
    icon: Star,
    title: "Hospital-Grade Dedicated Cleaners",
    desc: "Rigorous 70-point turnover protocol backed by photographic time-stamped inspection logs before every stay.",
  },
  {
    id: "multi-point-security",
    icon: Shield,
    title: "Multi-Point Security & Telemetry",
    desc: "Privacy-compliant Minut decibel monitors, mandatory 25+ age screening, and comprehensive $3M insurance protection.",
  },
  {
    id: "municipal-compliance",
    icon: Building2,
    title: "Turnkey Municipal Compliance",
    desc: "Seamless legal filings and tax remittance under Seattle SMC 6.600 and City of Bellevue lodging regulations.",
  },
];

const MARKETS = [
  {
    id: "bellevue-medina",
    name: "Bellevue & Medina",
    subtitle: "Downtown, West Bellevue, Medina Estates, Somerset",
    highlight: "High Executive & Tech Relocation Demand",
    color: "from-[#1e3a8a]/10 to-[#1e3a8a]/5",
  },
  {
    id: "seattle-core",
    name: "Seattle Core",
    subtitle: "Capitol Hill, Queen Anne, South Lake Union, Magnolia",
    highlight: "SMC 6.600 Regulatory Compliance Experts",
    color: "from-emerald-900/10 to-emerald-600/5",
  },
  {
    id: "kirkland-waterfront",
    name: "Kirkland Waterfront",
    subtitle: "Moss Bay, Market Street, Juanita Bay, Houghton",
    highlight: "Lake Washington Summer Surge ADRs",
    color: "from-cyan-900/10 to-cyan-600/5",
  },
  {
    id: "mercer-island",
    name: "Mercer Island",
    subtitle: "First Hill, East Seattle, Mid-Island Luxury Estates",
    highlight: "Ultra-High Net Worth Estate Stewardship",
    color: "from-purple-900/10 to-purple-600/5",
  },
  {
    id: "redmond-woodinville",
    name: "Redmond & Woodinville",
    subtitle: "Town Center, Education Hill, Wine Country Retreats",
    highlight: "Corporate Microsoft Stays & Tourism",
    color: "from-amber-900/10 to-amber-600/5",
  },
];

// ============================================================
// COMPONENTS
// ============================================================

const SectionHeader = ({ 
  badge, 
  title, 
  subtitle,
  centered = true 
}: { 
  badge: string; 
  title: string; 
  subtitle?: string;
  centered?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`${centered ? 'text-center' : ''} max-w-3xl mx-auto mb-14 space-y-3`}
  >
    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E3A8A]/5 border border-[#B8860B]/30 ${centered ? '' : ''}`}>
      <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B8860B]">
        {badge}
      </span>
    </div>
    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
        {subtitle}
      </p>
    )}
  </motion.div>
);

const ValueCard = ({ value, index }: { value: typeof CORE_VALUES[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -6, transition: { duration: 0.2 } }}
    className="group bg-gradient-to-br from-[#FDFAF5] to-white rounded-3xl p-7 border border-[#E6DCB8] shadow-sm hover:shadow-2xl transition-all duration-300"
  >
    <div className="space-y-4">
      <div className="relative">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1E3A8A]/5 to-[#B8860B]/10 border border-[#E6DCB8] flex items-center justify-center text-[#B8860B] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <value.icon className="w-7 h-7" />
        </div>
        <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#B8860B] text-white flex items-center justify-center text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {index + 1}
        </div>
      </div>
      <h3 className="font-serif text-xl font-bold text-[#1E3A8A] group-hover:text-[#B8860B] transition-colors duration-300">
        {value.title}
      </h3>
      <p className="text-sm text-[#475569] leading-relaxed">
        {value.desc}
      </p>
    </div>
  </motion.div>
);

// ============================================================
// MAIN PAGE
// ============================================================

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.7]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#FDFAF5]">
      
      {/* ============================================================
          1. HERO SECTION
          ============================================================ */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/8 via-[#FDFAF5] to-[#FDFAF5] border-b border-[#E6DCB8]/60" />
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#B8860B]/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-32 w-80 h-80 bg-[#1E3A8A]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 right-1/2 w-72 h-72 bg-[#B8860B]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-2 text-xs font-semibold text-[#64748B] mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[#1E3A8A] transition-colors duration-200">
              Home
            </Link>
            <span className="text-[#B8860B]" aria-hidden="true">/</span>
            <span className="text-[#1E3A8A]">About</span>
          </motion.nav>

          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E3A8A]/5 border border-[#B8860B]/30 mb-6">
                
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B8860B]">
                  About NestWise
                </span>
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1E3A8A] tracking-tight leading-tight">
                Local Expertise,{' '}
                <span className="text-[#B8860B]">Global Standards</span>
              </h1>
              
              <p className="mt-4 text-lg sm:text-xl text-[#475569] leading-relaxed max-w-2xl mx-auto">
                We&apos;re redefining short-term rental management in the Pacific Northwest 
                with hyper-local execution and radical transparency.
              </p>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex flex-wrap justify-center gap-6"
              >
                {[
                  { icon: Star, text: "4.97★ Average Rating" },
                  { icon: Users, text: "500+ Happy Owners" },
                  { icon: Home, text: "100+ Properties Managed" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <item.icon className="w-4 h-4 text-[#B8860B]" />
                    <span className="text-sm font-medium text-[#1E3A8A]">{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

        </div>
      </motion.section>

      <section className="py-20 lg:py-28 bg-[#FDFAF5]" aria-label="Our story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="OUR STORY"
            title="Built by Real Estate Operators, Not Impersonal Tech Aggregators"
            subtitle="National vacation rental franchises manage multimillion-dollar Pacific Northwest properties from distant call centers. We built NestWise to deliver high-touch executive stewardship right here in King County."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <div className="relative h-80 sm:h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl border border-[#E6DCB8] group">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                  alt="NestWise luxury property management in Bellevue, Washington"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/80 via-[#1e3a8a]/20 to-transparent" />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-6 left-6 right-6 text-white space-y-1"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                    King County Precision
                  </span>
                  <p className="font-serif text-base sm:text-lg font-bold leading-snug">
                    Curated luxury staging matching executive travel expectations in Seattle & Bellevue.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-7 space-y-6"
            >
              
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-[#1E3A8A]">
                  The Vision Behind NestWise
                </h3>
                <p className="text-[#475569] leading-relaxed">
                  NestWise was founded in 2024 with a single mission: to bring institutional-grade 
                  property management to luxury short-term rentals in the Pacific Northwest. 
                  We saw too many property owners struggling with impersonal national chains 
                  that lacked local knowledge and hands-on care.
                </p>
                <p className="text-[#475569] leading-relaxed">
                  Our team brings decades of combined experience in real estate operations, 
                  hospitality management, and algorithmic pricing. We combine this expertise 
                  with a deep understanding of King County&apos;s unique micro-markets to deliver 
                  superior returns for our clients.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-[#B8860B]/30 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#B8860B]/5 rounded-bl-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-[#1E3A8A]/5 rounded-tr-full pointer-events-none" />
                
                <div className="flex items-center gap-2 text-xs font-bold text-[#B8860B] uppercase tracking-wider mb-3 relative">
                  <span className="w-2 h-2 rounded-full bg-[#B8860B] animate-pulse" />
                  <span>Our Promise</span>
                </div>
                
                <blockquote className="font-serif text-base sm:text-lg text-[#1E3A8A] font-semibold italic leading-relaxed relative">
                  &ldquo;We don&apos;t just manage properties—we protect and grow your most valuable asset, 
                  treating every home as if it were our own.&rdquo;
                </blockquote>
              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* ============================================================
          4. HOW WE'RE DIFFERENT
          ============================================================ */}
      <section className="py-20 lg:py-24 bg-white border-y border-[#E6DCB8]/60" aria-label="What makes us different">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="WHAT SETS US APART"
            title="How We Protect & Outperform for Owners"
            subtitle="Four key pillars that differentiate NestWise from traditional property management companies."
          />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto"
          >
            {DIFFERENTIATORS.map((diff) => (
              <motion.div
                key={diff.id}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-4 rounded-xl bg-[#FDFAF5] border border-[#E6DCB8] shadow-sm hover:border-[#B8860B] hover:shadow-md transition-all duration-300 flex items-start gap-3 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#1E3A8A]/5 flex items-center justify-center shrink-0 group-hover:bg-[#B8860B]/10 transition-colors duration-300">
                  <diff.icon className="w-5 h-5 text-[#B8860B]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-[#1E3A8A] group-hover:text-[#B8860B] transition-colors duration-300">
                    {diff.title}
                  </h4>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ============================================================
          5. CORE VALUES / PILLARS
          ============================================================ */}
      <section className="py-20 lg:py-24 bg-[#FDFAF5]" aria-label="Our core values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="OUR FOUNDATION"
            title="The 4 Pillars of Our Operation"
            subtitle="The core principles behind our industry-leading owner satisfaction and five-star ratings."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((value, index) => (
              <ValueCard key={value.id} value={value} index={index} />
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================
          6. SERVICE AREAS
          ============================================================ */}
      <section className="py-20 lg:py-24 bg-white border-y border-[#E6DCB8]/60" aria-label="Service areas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="GEOGRAPHIC FOOTPRINT"
            title="Where We Operate Across King County"
            subtitle="Specialized local market knowledge tailored to the distinct micro-climates and guest demographics of each neighborhood."
          />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            {MARKETS.map((market) => (
              <motion.div
                key={market.id}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`group bg-gradient-to-br ${market.color} rounded-2xl p-6 border border-[#E6DCB8] hover:border-[#B8860B] shadow-sm hover:shadow-xl transition-all duration-300 space-y-3 relative overflow-hidden`}
              >
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#B8860B]/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative">
                  <div className="text-[10px] font-bold uppercase text-[#B8860B] tracking-wider mb-1">
                    {market.highlight}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#1E3A8A] group-hover:text-[#B8860B] transition-colors duration-300">
                    {market.name}
                  </h4>
                  <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                    {market.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ============================================================
          7. EARNINGS POTENTIAL (Subtle, Not Aggressive)
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-[#FDFAF5] border-t border-[#E6DCB8]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-[#1E3A8A]">
              Interested in Learning More?
            </h3>
            <p className="text-sm text-[#475569] mt-1">
              Explore what your property could achieve with our management approach.
            </p>
          </div>
          <EarningsPotentialCard />
        </div>
      </section>

    </div>
  );
}