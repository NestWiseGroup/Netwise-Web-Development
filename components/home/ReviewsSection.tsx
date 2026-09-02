import React from "react";
import Link from "next/link";
import { Star, CheckCircle2, MapPin } from "@/components/shared/Icons";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Arthur & Evelyn Sterling",
      location: "Medina, WA",
      property: "Lake Washington Waterfront Villa (5 Bed · 4.5 Bath)",
      transition: "Migrated from National 30% Manager",
      monthlyNet: "$24,800 /mo",
      upside: "+38% Net Revenue",
      quote:
        "We spent two years locked into a rigid 30% national manager contract with endless hidden linen markups and out-of-state call centers. NestWise transitioned our Medina home in under a week. Our dynamic ADR jumped from $440 to $680/night, our calendar is consistently booked with vetted corporate guests, and their 22% flat fee is completely transparent.",
      rating: 5,
      tenure: "Client for 2+ Years",
    },
    {
      name: "Dr. Marcus & Catherine Chen",
      location: "West Bellevue, WA",
      property: "Meydenbauer Modern Estate (4 Bed · 3.5 Bath)",
      transition: "Transitioned from Self-Hosting Burnout",
      monthlyNet: "$18,200 /mo",
      upside: "Saved 15 hrs/week",
      quote:
        "Self-hosting was consuming our entire weekends with cleaner scheduling, laundry logistics, and midnight guest lockouts. NestWise’s local Bellevue ground team handles everything with hotel-grade precision. Minut noise sensors protect our property, guest screening is rigorous, and our CPA loves the reconciled statement on the 5th of every month.",
      rating: 5,
      tenure: "Client for 18 Months",
    },
    {
      name: "Harrison Vance",
      location: "Queen Anne & Downtown Seattle",
      property: "Skyline View Luxury Portfolio (3 Units)",
      transition: "Multi-Unit STR Optimization",
      monthlyNet: "$31,500 /mo",
      upside: "+$7,800/mo vs. Long-Term",
      quote:
        "Navigating Seattle’s SMC 6.600 short-term rental caps and King County lodging tax filings can be a legal minefield. NestWise structured our portfolio compliance flawlessly. Their AI dynamic pricing captures massive demand spikes around Climate Pledge Arena events and summer cruise peaks that legacy managers miss entirely.",
      rating: 5,
      tenure: "Client for 14 Months",
    },
    {
      name: "Elena Rostova",
      location: "Kirkland, WA",
      property: "Lakefront Architectural Home (3 Bed · 2.5 Bath)",
      transition: "Airbnb Superhost & VRBO Premier",
      monthlyNet: "$15,400 /mo",
      upside: "94.2% Summer Occupancy",
      quote:
        "Their guest communication SLA is incredible—literally under 2 minutes every single time. Our home has maintained a flawless 5-star review rating across 80+ stays. The luxury staging and professional turnover photography set us apart from every other rental on Lake Washington.",
      rating: 5,
      tenure: "Client for 1 Year",
    },
  ];

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#FDFAF5] border-b border-[#E6DCB8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A8A]/5 border border-[#B8860B]/30">
            <Star className="w-3.5 h-3.5 text-[#B8860B] fill-[#B8860B]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B8860B]">
              VERIFIED OWNER EXPERIENCES
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] tracking-tight">
            Trusted by Greater Seattle’s Premier Property Owners
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Real portfolio transformations from luxury property owners across Bellevue, Medina, Kirkland, and Queen Anne.
          </p>
        </div>

        {/* Aggregate Social Proof Summary Bar */}
        <div className="mb-14 p-6 sm:p-8 bg-white rounded-3xl border border-[#E6DCB8] shadow-luxury">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 lg:divide-x divide-slate-200">
            <div className="pt-2 sm:pt-0">
              <div className="flex items-center justify-center gap-1 text-[#B8860B] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#B8860B]" />
                ))}
              </div>
              <div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1E3A8A]">
                4.98 / 5.0
              </div>
              <div className="text-xs uppercase font-bold tracking-wider text-[#6B7280] mt-0.5">
                Average Guest Review
              </div>
            </div>

            <div className="pt-4 sm:pt-0">
              <div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1E3A8A]">
                1,400+
              </div>
              <div className="text-xs uppercase font-bold tracking-wider text-[#6B7280] mt-0.5">
                Verified 5-Star Stays
              </div>
              <div className="text-[11px] text-[#B8860B] font-semibold mt-0.5">
                Zero Host Cancellations
              </div>
            </div>

            <div className="pt-4 sm:pt-0">
              <div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1E3A8A]">
                22% Flat Fee
              </div>
              <div className="text-xs uppercase font-bold tracking-wider text-[#6B7280] mt-0.5">
                Zero Hidden Markups
              </div>
              <div className="text-[11px] text-[#B8860B] font-semibold mt-0.5">
                Owner Retains 78% Gross
              </div>
            </div>

            <div className="pt-4 sm:pt-0">
              <div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1E3A8A]">
                &lt; 2.4 Min
              </div>
              <div className="text-xs uppercase font-bold tracking-wider text-[#6B7280] mt-0.5">
                Average Response SLA
              </div>
              <div className="text-[11px] text-[#B8860B] font-semibold mt-0.5">
                Bellevue Command Desk
              </div>
            </div>
          </div>
        </div>

        {/* 2x2 Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E6DCB8] shadow-luxury hover:border-[#B8860B] hover:shadow-luxury-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Rating & Highlights */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5 mb-5">
                  <div>
                    <div className="flex items-center gap-1 text-[#B8860B]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#B8860B]" />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-[#1E3A8A] block mt-1">
                      {rev.property}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-xs uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-[#FDFAF5] text-[#B8860B] border border-[#E6DCB8]">
                      {rev.upside}
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-1">
                      {rev.monthlyNet} Net
                    </span>
                  </div>
                </div>

                {/* Quote Body */}
                <p className="text-sm sm:text-base text-[#374151] leading-relaxed italic font-normal">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-bold text-[#1E3A8A]">
                    {rev.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-[#6B7280] mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#B8860B]" />
                    <span>{rev.location} · {rev.tenure}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Owner</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/audit"
            className="btn-gold px-8 py-3.5 rounded-xl font-serif font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-md hover:shadow-gold-glow transition-all"
          >
            <span>Claim Your 48-Hour Property Revenue Audit</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
