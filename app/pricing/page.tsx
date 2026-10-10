import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ComparisonMatrix from "@/components/shared/ComparisonMatrix";
import EarningsPotentialCard from "@/components/shared/EarningsPotentialCard";
import { 
  Check, 
  CheckCircle2, 
} from "@/components/shared/Icons";

export const metadata: Metadata = {
  title: "Transparent Pricing & Fee Structure | NestWise Group",
  description:
    "Simple, honest pricing. 22% of booking revenue, $600 one-time setup fee, month-to-month. Full-service Airbnb co-hosting across Greater Seattle and the Eastside.",
};

const PRICING_PILLARS = [
  {
    title: "22% management fee",
    subtitle: "Of booking revenue",
    description: "Our only ongoing fee. No markups on linens, cleaning or repairs, and no admin charges.",
    badge: "Flat & Simple",
    highlight: true,
  },
  {
    title: "$600 one-time setup",
    subtitle: "Paid once, at launch",
    description: "Professional photos, smart lock setup, listings on six channels and one synced calendar.",
    badge: "One-Time Fee",
    highlight: false,
  },
  {
    title: "Month-to-month",
    subtitle: "Cancel with 30 days’ notice",
    description: "No long-term contract. We earn your business every month.",
    badge: "Leave Anytime",
    highlight: false,
  },
];

const INCLUDED_SERVICES = [
  {
    title: "Listings on 6 channels",
    desc: "Airbnb, Vrbo, Booking.com, Google, Agoda and your own direct booking site.",
  },
  {
    title: "Pricing updated daily",
    desc: "Rates reset every day based on demand, nearby listings and Seattle events.",
  },
  {
    title: "Guest messages, day and night",
    desc: "Guest messages answered around the clock by our local team.",
  },
  {
    title: "Background-checked cleaners",
    desc: "Booked through Turno, with photos after every clean.",
  },
  {
    title: "Repairs and vendors",
    desc: "Trusted local tradespeople. Nothing over $300 without your approval.",
  },
  {
    title: "Monthly statements",
    desc: "Paid by ACH on the 5th, with a statement your accountant will like.",
  },
];

const PRICING_FAQS = [
  {
    q: "Who pays for cleaning?",
    a: "The guest pays a cleaning fee at checkout, so cleaning doesn’t come out of your earnings. We book background-checked cleaners through Turno and check their photos after every stay.",
  },
  {
    q: "What does the $600 setup fee cover?",
    a: "Professional photos, smart lock setup, and building your listings on Airbnb, Vrbo, Booking.com, Google, Agoda and your direct site, with one synced calendar. We state it up front instead of hiding it in your monthly fees.",
  },
  {
    q: "When do I get paid?",
    a: "By the 5th of each month, by direct deposit, for the previous month. Your statement lists every booking, the rate earned, cleaning costs, taxes collected and our fee.",
  },
  {
    q: "What if I want to stop?",
    a: "Give us 30 days’ notice. No cancellation fee. We’ll hand back your listings, calendar and guest bookings in good order.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#FDFAF5]">
      
      {/* 1. Hero Section */}
      <section className="pt-14 pb-16 lg:pt-20 lg:pb-20 bg-linear-to-b from-[#FDFAF5] via-[#FFFBF5] to-[#FDFAF5] border-b border-[#E6DCB8]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          
          {/* Breadcrumb */}
          <nav 
            className="flex items-center justify-center gap-2 text-xs font-semibold text-[#64748B] mb-2"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[#1E3A8A] transition-colors">
              Home
            </Link>
            <span className="text-[#B8860B]" aria-hidden="true">/</span>
            <span className="text-[#1E3A8A]">Pricing</span>
          </nav>

          <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8860B] select-none">
            Transparent pricing
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] tracking-tight leading-[1.15]">
            Simple numbers. <span className="text-[#B8860B]">No hidden deductions.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto font-normal">
            Many full-service managers charge 25% or more, ask for 12-month contracts, and add fees for linens, supplies and admin. We charge 22% of booking revenue, month-to-month, and list every cost on your statement.
          </p>
        </div>
      </section>

      {/* 2. Core Three Pillars */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 border transition-all flex flex-col justify-between ${
                  pillar.highlight
                    ? "bg-[#1E3A8A] text-white border-[#B8860B] shadow-xl ring-4 ring-[#B8860B]/20 relative"
                    : "bg-white text-[#1F2937] border-[#E6DCB8] shadow-sm hover:border-[#B8860B]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded ${
                        pillar.highlight
                          ? "bg-white/10 text-[#D4AF37] border border-white/20"
                          : "bg-[#FDFAF5] text-[#B8860B] border border-[#E6DCB8]"
                      }`}
                    >
                      {pillar.badge}
                    </span>
                  </div>

                  <h3
                    className={`font-serif text-2xl sm:text-3xl font-extrabold mb-1 ${
                      pillar.highlight ? "text-white" : "text-[#1E3A8A]"
                    }`}
                  >
                    {pillar.title}
                  </h3>

                  <p
                    className={`text-xs font-semibold mb-4 ${
                      pillar.highlight ? "text-[#D4AF37]" : "text-[#B8860B]"
                    }`}
                  >
                    {pillar.subtitle}
                  </p>

                  <p
                    className={`text-sm leading-relaxed ${
                      pillar.highlight ? "text-slate-300" : "text-[#4B5563]"
                    }`}
                  >
                    {pillar.description}
                  </p>
                </div>

                <div
                  className={`pt-6 mt-6 border-t flex items-center gap-2 text-xs font-semibold ${
                    pillar.highlight
                      ? "border-white/10 text-[#D4AF37]"
                      : "border-slate-100 text-emerald-700"
                  }`}
                >
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Written into your agreement</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Everything Included in 22% */}
      <section className="py-16 sm:py-20 bg-white border-y border-[#E6DCB8]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8860B] select-none">
              FULL-SERVICE SCOPE
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E3A8A]">
              Everything Included in Your 22%
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563]">
              We handle your short-term rental from start to finish, so you never have to step in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INCLUDED_SERVICES.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FDFAF5] border border-[#E6DCB8] hover:border-[#B8860B] transition-all space-y-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0" />
                  <h4 className="font-serif text-base font-bold text-[#1E3A8A]">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-[#4B5563] leading-relaxed pl-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Single Authoritative Head-to-Head Comparison */}
      <section className="py-20 lg:py-24 bg-[#FDFAF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ComparisonMatrix
            variant="full"
            title="Three ways to run a short-term rental"
            subtitle="Here’s how local co-hosting compares with a large management company and with doing it yourself."
          />
        </div>
      </section>

      {/* 5. Pricing FAQs */}
      <section className="py-16 sm:py-20 bg-white border-t border-[#E6DCB8]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8860B] select-none">
              QUESTIONS ABOUT FEES?
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1E3A8A]">
              Frequently Asked Pricing Questions
            </h2>
          </div>

          <div className="space-y-4">
            {PRICING_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FDFAF5] border border-[#E6DCB8] space-y-2"
              >
                <h4 className="font-serif text-base sm:text-lg font-bold text-[#1E3A8A] flex items-start gap-2">
                  <span className="text-[#B8860B] font-sans font-bold text-sm mt-0.5">Q.</span>
                  <span>{faq.q}</span>
                </h4>
                <p className="text-sm text-[#4B5563] leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Dual CTAs / Closing Card */}
      <section className="py-16 sm:py-24 bg-[#FDFAF5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <EarningsPotentialCard />
        </div>
      </section>

    </div>
  );
}
