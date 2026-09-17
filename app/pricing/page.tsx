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
    "Simple, honest pricing. 22% flat management fee, $600 one-time onboarding fee, 0-day contract lock-in. Full-service property co-hosting across Greater Seattle & Washington State.",
};

const PRICING_PILLARS = [
  {
    title: "22% Management Fee",
    subtitle: "On gross booking revenue",
    description: "You keep 78% of your rental revenue. No linen markups, no administrative surcharges, and no nickel-and-diming.",
    badge: "Flat & Simple",
    highlight: true,
  },
  {
    title: "$600 One-Time Setup",
    subtitle: "Stated upfront, once",
    description: "Covers professional photography, smart locks, digital listings across 5 platforms, and master calendar synchronization.",
    badge: "One-Time Fee",
    highlight: false,
  },
  {
    title: "0 Days Contract Lock-in",
    subtitle: "Month-to-month flexibility",
    description: "We earn your trust every 30 days. If your plans change, walk away anytime with a simple 30 days notice.",
    badge: "Leave Anytime",
    highlight: false,
  },
];

const INCLUDED_SERVICES = [
  {
    title: "5-Channel Multi-Listing",
    desc: "Syndicated across Airbnb, Vrbo, Booking.com, Google Vacation Rentals, Agoda, and your own direct booking site.",
  },
  {
    title: "Daily Dynamic Pricing",
    desc: "Nightly rates adjusted daily based on live local demand, competitor benchmarks, and Seattle area event surges.",
  },
  {
    title: "24/7/365 Guest Communication",
    desc: "Every guest question answered day or night, usually within 3 minutes, by local people based in Washington.",
  },
  {
    title: "Turno Professional Cleaners",
    desc: "Vetted, background-checked professional cleaners booked through Turno, with photo verification after every stay.",
  },
  {
    title: "Maintenance & Vendor Coordination",
    desc: "Coordination with trusted local tradespeople. No surprise maintenance fees without prior authorization.",
  },
  {
    title: "Monthly Financial Statements",
    desc: "Itemized payouts deposited directly via ACH on the 5th of each month, with clean statements your CPA will love.",
  },
];

const PRICING_FAQS = [
  {
    q: "Who pays for cleaning and turnover fees?",
    a: "Cleaning fees are paid directly by the booking guest at checkout, not out of your rental earnings. We coordinate vetted professional cleaners via Turno and verify photographic checklists after every departure.",
  },
  {
    q: "How does the $600 onboarding fee work?",
    a: "We state our $600 onboarding fee plainly upfront rather than hiding it in recurring fee surcharges. It covers professional architectural photography, keyless smart lock setup, and multi-channel listing creation across Airbnb, Vrbo, Booking.com, Google Vacation Rentals, and Agoda.",
  },
  {
    q: "When and how are my monthly payouts distributed?",
    a: "Revenues are deposited directly to your bank account via ACH on the 5th of each month for the preceding calendar month. You receive an itemized statement detailing booked nights, rates, lodging taxes, and your 78% net earnings.",
  },
  {
    q: "What if I want to pause or terminate our agreement?",
    a: "There are zero long-term commitments or termination penalties. Our agreements are strictly month-to-month. If your personal or portfolio plans change, you can walk away anytime with a simple 30 days notice.",
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
            TRANSPARENT &amp; HONEST PRICING
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] tracking-tight leading-[1.15]">
            Simple numbers. <span className="text-[#B8860B]">No hidden deductions.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto font-normal">
            National managers charge 28% to 30%, lock you into 12-month contracts, and pad invoices with hidden administrative fees. We do the opposite: 22% flat, month-to-month, with complete transparency.
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
                  <span>Always stated in writing</span>
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
              Everything Included in Your 22% Fee
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563]">
              We handle every aspect of your short-term rental from end to end. You never have to step in.
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
            title="The Concrete Industry Comparison"
            subtitle="Zero confusion: Compare our local co-hosting model against national corporate franchises and the hidden exhaustion of DIY self-hosting."
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
