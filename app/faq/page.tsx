"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  Search, 
  ChevronRight, 
  Phone, 
  HelpCircle, 
  DollarSign, 
  Scale, 
  Shield, 
  Sliders 
} from "@/components/shared/Icons";
import LottiePlayer from "@/components/shared/LottiePlayer";
import { conciergeRadarLottie } from "@/lib/lottieData";

interface FaqItem {
  q: string;
  a: string;
  category: "pricing" | "regulations" | "security" | "operations";
}

const FAQS: FaqItem[] = [
    // Pricing
    {
      category: "pricing",
      q: "How does the 22% flat fee structure work?",
      a: "NestWise charges a single, transparent 22% fee on gross booking revenue. Unlike traditional property managers who add 28% to 35% commission plus linen replacement deductions, credit card processing surcharges, and maintenance markups, we take a clean 22%. You retain 78% of your gross earnings with complete monthly ledger reconciliation.",
    },
    {
      category: "pricing",
      q: "Are there any upfront onboarding or setup charges?",
      a: "Zero. We do not charge onboarding fees, professional photography fees, or digital listing creation costs. We invest our own capital into your property setup because our compensation is directly tied to the revenue we generate for you.",
    },
    {
      category: "pricing",
      q: "How and when do I receive payouts?",
      a: "All net booking revenues are disbursed directly to your bank account via automated ACH on the 5th of each month for the preceding calendar month. Every payment is accompanied by an itemized, audit-ready financial statement outlining gross nights, nightly ADRs, guest-paid cleaning fees, and King County lodging tax collections.",
    },
    {
      category: "pricing",
      q: "What is your contract duration and lock-in policy?",
      a: "Our agreements are strictly month-to-month with zero long-term lock-in. We believe we must earn your business every single month. If your personal or portfolio goals change, you can terminate the partnership anytime with a standard 30-day notice with zero calendar forfeiture or penalty fees.",
    },

    // Regulations
    {
      category: "regulations",
      q: "How does NestWise handle Seattle SMC 6.600 regulations?",
      a: "Under Seattle Municipal Code 6.600, short-term rental operators may operate a maximum of two dwelling units in the city (a primary residence and one secondary unit). NestWise ensures full compliance by auditing your property parcel, obtaining the necessary Seattle STR Operator License, submitting quarterly King County lodging tax filings, and ensuring all platform listings display required municipal license numbers.",
    },
    {
      category: "regulations",
      q: "What are the rules for short-term rentals in Bellevue and the Eastside?",
      a: "Bellevue requires transient lodging registration, adherence to city noise ordinances, and collection of Washington State Retail Sales Tax and King County Lodging Taxes. Our Bellevue command desk manages 100% of these filings on your behalf, keeping your residence in flawless standing with local authorities.",
    },
    {
      category: "regulations",
      q: "Can I do short-term rentals in an HOA condominium?",
      a: "HOA CC&Rs vary widely across Greater Seattle. During our initial 48-Hour Audit, we perform a thorough review of your HOA bylaws. If your building prohibits stays under 30 days, we configure an executive 30+ day medium-term rental model tailored to Amazon, Microsoft, and Google corporate transferees.",
    },

    // Security & Property Care
    {
      category: "security",
      q: "How do you protect my luxury residence from unauthorized parties?",
      a: "We implement a proactive three-layer protection shield: (1) Mandatory 25+ age requirement and biometric ID verification on all bookings; (2) Privacy-safe Minut decibel and occupancy sensors that monitor noise spikes in real time without recording audio or violating guest privacy; and (3) Immediate local dispatch from our Bellevue team if noise thresholds are breached.",
    },
    {
      category: "security",
      q: "What insurance coverage is in place for property damage?",
      a: "Every reservation is protected by our primary $3,000,000 Host Cover insurance policy, covering accidental property damage, structural protection, and guest liability. In addition, we collect security deposits or accidental damage waivers on luxury bookings, ensuring you are never left out-of-pocket.",
    },
    {
      category: "security",
      q: "Who handles housekeeping and property turnovers?",
      a: "We work exclusively with our dedicated, hospital-grade cleaning teams trained in five-star hospitality standards. After every departure, cleaners execute a 45-point inspection checklist, photograph the home's condition, replenish premium toiletries, and ensure fresh hotel-quality linens.",
    },

    // Operations
    {
      category: "operations",
      q: "Can I still use my home for personal vacations or family stays?",
      a: "Absolutely. Through your 24/7 Owner Portal, you can block out any dates for personal use with a single click. There are zero penalties or limitations on owner usage as long as the dates are reserved prior to an incoming guest booking.",
    },
    {
      category: "operations",
      q: "How quickly can NestWise launch my listing?",
      a: "Our standard onboarding takes 5 to 7 business days from physical key handover. This timeframe covers professional HDR photography, 3D Matterport scanning, smart lock configuration, decibel sensor calibration, and cross-channel listing syndication across Airbnb, VRBO, and Booking.com.",
    },
    {
      category: "operations",
      q: "What makes your dynamic pricing engine superior?",
      a: "Unlike amateur hosts who set static seasonal rates, our AI pricing algorithm recalculates rates hourly based on live King County occupancy, airline flight data, Lumen Field and Climate Pledge Arena event schedules, weather patterns, and competitive neighborhood pricing dips.",
    },
  ];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  // Filter FAQs based on category and search query
  const filteredFaqs = useMemo(() => {
    return FAQS.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleIndex = (idx: number) => {
    if (openIndexes.includes(idx)) {
      setOpenIndexes(openIndexes.filter((i) => i !== idx));
    } else {
      setOpenIndexes([...openIndexes, idx]);
    }
  };

  const expandAll = () => {
    setOpenIndexes(filteredFaqs.map((_, i) => i));
  };

  const collapseAll = () => {
    setOpenIndexes([]);
  };

  return (
    <div className="min-h-screen bg-[#FDFAF5]">
      
      {/* Hero Header */}
      <section className="relative pt-16 pb-16 lg:pt-20 lg:pb-24 bg-radial from-[#1E3A8A]/10 via-[#FDFAF5] to-[#FDFAF5] border-b border-[#E6DCB8]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          {/* Breadcrumb Navigation */}
          <nav 
            className="flex items-center justify-center gap-2 text-xs font-semibold text-[#64748B] mb-2"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[#1E3A8A] transition-colors duration-200">
              Home
            </Link>
            <span className="text-[#B8860B]" aria-hidden="true">/</span>
            <span className="text-[#1E3A8A]">FAQ</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A8A]/5 border border-[#B8860B]/30">
            <HelpCircle className="w-3.5 h-3.5 text-[#B8860B]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B8860B]">
              KNOWLEDGE BASE & ADVISORY
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1E3A8A] tracking-tight">
            Frequently Asked{" "}
            <span className="bg-linear-to-r from-[#B8860B] via-[#D4AF37] to-[#8C6508] bg-clip-text text-transparent">
              Questions
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our transparent 22% fee model, King County regulatory compliance, guest screening, and seamless onboarding.
          </p>

          {/* Interactive Search Bar */}
          <div className="pt-2 max-w-xl mx-auto relative">
            <div className="relative">
              <Search className="w-5 h-5 text-[#64748B] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics: fees, taxes, Seattle SMC 6.600, screening..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-[#E6DCB8] shadow-sm text-sm focus:outline-none focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/20 transition-all placeholder:text-[#94A3B8]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#64748B] hover:text-[#1E3A8A]"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pb-8">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === "all"
                  ? "bg-[#1E3A8A] text-white shadow-sm"
                  : "bg-white text-[#475569] border border-[#E6DCB8] hover:border-[#B8860B]"
              }`}
            >
              All Topics ({FAQS.length})
            </button>

            <button
              onClick={() => setActiveCategory("pricing")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeCategory === "pricing"
                  ? "bg-[#1E3A8A] text-white shadow-sm"
                  : "bg-white text-[#475569] border border-[#E6DCB8] hover:border-[#B8860B]"
              }`}
            >
              <DollarSign className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>22% Fee & Payouts</span>
            </button>

            <button
              onClick={() => setActiveCategory("regulations")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeCategory === "regulations"
                  ? "bg-[#1E3A8A] text-white shadow-sm"
                  : "bg-white text-[#475569] border border-[#E6DCB8] hover:border-[#B8860B]"
              }`}
            >
              <Scale className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>Regulations & Permits</span>
            </button>

            <button
              onClick={() => setActiveCategory("security")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeCategory === "security"
                  ? "bg-[#1E3A8A] text-white shadow-sm"
                  : "bg-white text-[#475569] border border-[#E6DCB8] hover:border-[#B8860B]"
              }`}
            >
              <Shield className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>$3M Shield & Care</span>
            </button>

            <button
              onClick={() => setActiveCategory("operations")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeCategory === "operations"
                  ? "bg-[#1E3A8A] text-white shadow-sm"
                  : "bg-white text-[#475569] border border-[#E6DCB8] hover:border-[#B8860B]"
              }`}
            >
              <Sliders className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>Operations & Onboarding</span>
            </button>
          </div>

          {/* Controls Bar */}
          <div className="flex items-center justify-between pb-4 text-xs text-[#64748B]">
            <span>
              Showing <strong className="text-[#1E3A8A]">{filteredFaqs.length}</strong> questions
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={expandAll}
                className="hover:text-[#1E3A8A] hover:underline font-semibold"
              >
                Expand All
              </button>
              <span>·</span>
              <button
                onClick={collapseAll}
                className="hover:text-[#1E3A8A] hover:underline font-semibold"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* FAQ Accordion List */}
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-[#E6DCB8] p-8 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] flex items-center justify-center mx-auto">
                <Search className="w-6 h-6 text-[#B8860B]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1E3A8A]">No matching questions found</h3>
              <p className="text-xs text-[#64748B] max-w-sm mx-auto">
                Try searching for general keywords like &quot;pricing&quot;, &quot;permits&quot;, or &quot;screening&quot;. Or reach out to our executive desk directly.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="btn-gold px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider mt-2 inline-block"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="space-y-3.5">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openIndexes.includes(idx);
                return (
                  <div
                    key={idx}
                    className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "border-[#B8860B] shadow-md ring-1 ring-[#B8860B]/20"
                        : "border-[#E6DCB8] hover:border-[#B8860B]/60"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleIndex(idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                      aria-expanded={isOpen}
                    >
                      <span className="font-serif text-base sm:text-lg font-bold text-[#1E3A8A]">
                        {faq.q}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen
                            ? "rotate-90 bg-[#1E3A8A] text-[#D4AF37]"
                            : "bg-[#FDFAF5] text-[#1E3A8A] border border-[#E6DCB8]"
                        }`}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#475569] leading-relaxed border-t border-slate-100">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* High-Touch Executive Support Card with Concierge Lottie */}
          <div className="mt-16 bg-white rounded-3xl p-8 border border-[#E6DCB8] shadow-luxury flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 shrink-0">
                <LottiePlayer
                  animationData={conciergeRadarLottie}
                  loop={true}
                  autoplay={true}
                  className="w-full h-full"
                />
              </div>
              <div className="space-y-1 text-left">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8860B] uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Bellevue Operations Command
                </div>
                <h4 className="font-serif text-xl font-bold text-[#1E3A8A]">
                  Have a Unique Regulatory or Portfolio Question?
                </h4>
                <p className="text-xs text-[#64748B] max-w-md">
                  Marcus Vance, Principal Director of Operations, is available for private consultation regarding multi-unit portfolios and King County municipal guidelines.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
              <a
                href="tel:+14254146819"
                className="btn-gold px-6 py-3 rounded-xl font-serif font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>(425) 414-6819</span>
              </a>
              <Link
                href="/audit"
                className="px-5 py-3 rounded-xl border border-[#1E3A8A]/20 bg-white hover:bg-[#1E3A8A]/5 text-xs font-bold text-[#1E3A8A] text-center"
              >
                Request Audit
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
