import React from "react";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      title: "Data-Driven Performance Pricing",
      tagline: "Dynamic Machine Learning Algorithms",
      description:
        "Your nightly pricing is systematically recalibrated around micro-events, Climate Pledge Arena concerts, tech summits, and local supply fluctuations—never set once and forgotten.",
      badge: "Max Revenue Curve",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: "Under 3-Minute Guest SLA",
      tagline: "24/7/365 Local Seattle Triage Desk",
      description:
        "Immediate response pipelines for guest inquiries, reservation vetting, and on-stay inquiries, protecting your property's 5-star Superhost standing year-round.",
      badge: "< 3 Min Response",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Hotel-Grade Luxury Turnovers",
      tagline: "Dedicated Luxury Housekeeping Crews",
      description:
        "White-glove cleaning protocols with inspection checklists, high-thread-count resort linens, designer toiletries, and photographic proof verification after every turnover.",
      badge: "Flawless Cleanliness",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.286L13 21l-2.286-6.857L5 12l5.714-2.286L13 3z" />
        </svg>
      ),
    },
    {
      title: "Smart Guardrails & Screening",
      tagline: "Minut Sensors & Biometric ID Audit",
      description:
        "Privacy-safe noise decibel monitoring, continuous cigarette/vape sensors, smart locks with automated expiring codes, and $3,000,000 Host Cover insurance backing.",
      badge: "Institutional Security",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Multi-Channel OTA Syndication",
      tagline: "Superhost & Premier Tier Sync",
      description:
        "Synchronized listing presence across Airbnb Superhost, VRBO Premier Host, Booking.com Preferred, and direct booking engines to eliminate vacant calendar dates.",
      badge: "Zero Platform Lock",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      title: "Reconciled Monthly Statements",
      tagline: "Delivered by the 5th of Every Month",
      description:
        "Transparent financial accounting tracking gross booking revenues, platform fees, cleaning distributions, and net payouts cleanly. Your CPA will love our direct ledger exports.",
      badge: "CPA-Ready Accounting",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FDFAF5] border-b border-[#E6DCB8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E3A8A]/5 border border-[#B8860B]/30">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B8860B]">
              FULL-SPECTRUM CO-HOSTING ARCHITECTURE
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] tracking-tight">
            The Guardrails of Elite Co-Hosting
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Four commitments transformed into operational certainties. We don&apos;t guess. We orchestrate.
          </p>
        </div>

        {/* 6-Card Modular Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-[#E6DCB8] shadow-luxury hover:border-[#B8860B] hover:shadow-luxury-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#1E3A8A]/5 border border-[#B8860B]/30 flex items-center justify-center text-[#B8860B] group-hover:bg-[#1E3A8A] group-hover:text-[#D4AF37] transition-colors duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#FDFAF5] text-[#B8860B] border border-[#E6DCB8]">
                    {item.badge}
                  </span>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-[#B8860B] mb-1">
                  {item.tagline}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1E3A8A] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#1E3A8A] group-hover:text-[#B8860B] transition-colors">
                <span>Included in 22% Flat Rate</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#1e3a8a] via-[#1e3a8a] to-[#1e3a8a] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-luxury-lg">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#D4AF37]">
              Seattle & Bellevue Operations Command
            </span>
            <h4 className="font-serif text-2xl font-bold text-white mt-1">
              Have a high-end property in Medina, Queen Anne, or Kirkland?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Receive our comprehensive 48-Hour Property Revenue Audit matching your exact address against 12 live market comps.
            </p>
          </div>
          <Link
            href="/audit"
            className="btn-gold px-8 py-3.5 rounded-xl font-serif font-bold text-xs uppercase tracking-wider whitespace-nowrap shadow-md shrink-0"
          >
            Claim Free 48-Hour Audit
          </Link>
        </div>

      </div>
    </section>
  );
}
