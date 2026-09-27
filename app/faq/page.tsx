"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  Search, 
  ChevronRight, 
  Phone, 
  DollarSign, 
  Scale, 
  Shield, 
  Sliders 
} from "@/components/shared/Icons";
import LottiePlayer from "@/components/shared/LottiePlayer";
import { conciergeRadarLottie } from "@/lib/lottieData";

interface FaqItem {
  q: string;
  a: React.ReactNode;
  category: "fees" | "regulations" | "care" | "getting-started";
}

const FAQS: FaqItem[] = [
  // Fees & payouts
  {
    category: "fees",
    q: "How does the 22% fee work?",
    a: "We charge 22% of booking revenue. That’s our only ongoing fee: no markups on linens, cleaning, card processing or repairs, and no admin charges. Cleaning is paid by the guest. Repairs and supplies are billed to you at cost, with receipts. Your monthly statement shows every line.",
  },
  {
    category: "fees",
    q: "Are there any upfront or setup charges?",
    a: "Yes, one: a $600 setup fee, paid once. It covers professional photos, smart lock setup, and building your listings on six channels with one synced calendar. There are no other upfront charges.",
  },
  {
    category: "fees",
    q: "How and when do I get paid?",
    a: "By direct deposit (ACH) by the 5th of each month, for the previous month’s stays. You get an itemized statement with every booking, the rate earned, cleaning costs, taxes collected and our fee.",
  },
  {
    category: "fees",
    q: "What is your contract length?",
    a: "Month-to-month. You can end the agreement at any time with 30 days’ written notice, with no cancellation fee.",
  },

  // City rules & permits
  {
    category: "regulations",
    q: "How does NestWise handle Seattle’s short-term rental rules?",
    a: (
      <span>
        Seattle requires a business license and a short-term rental operator license, and the license number must appear on every listing. Most operators can run at most two units, and one must be their own primary residence. Before we list your home, we confirm it qualifies and help you apply. Check{" "}
        <a 
          href="https://www.seattle.gov/business-regulations/short-term-rentals" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#B8860B] underline font-medium hover:text-[#1E3A8A]"
        >
          Seattle’s short-term rental rules
        </a>.
      </span>
    ),
  },
  {
    category: "regulations",
    q: "What are the rules in Bellevue and the Eastside?",
    a: (
      <span>
        They vary by city, which is why we check every address first. In Bellevue, entire single-family homes can’t be rented for under 30 days; condos and apartments can, with a registration notice and building limits. Kirkland ties short-term rentals to the owner’s primary residence. Redmond requires a business license for each unit. See details for{" "}
        <a 
          href="https://bellevuewa.gov/city-government/departments/development/zoning-and-land-use/zoning-requirements/rentals" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#B8860B] underline font-medium hover:text-[#1E3A8A]"
        >
          Bellevue
        </a>{" · "}
        <a 
          href="https://kirkland.municipal.codes/KMC/7.02.300" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#B8860B] underline font-medium hover:text-[#1E3A8A]"
        >
          Kirkland
        </a>{" · "}
        <a 
          href="https://www.redmond.gov/2301/Short-Term-Rentals" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#B8860B] underline font-medium hover:text-[#1E3A8A]"
        >
          Redmond
        </a>.
      </span>
    ),
  },
  {
    category: "regulations",
    q: "Can I rent my condo short-term if it has an HOA?",
    a: "Often, but it depends on your association’s declaration and rules, which can limit or ban rentals under 30 days. Send us your HOA documents and we’ll review the rental rules with you before you commit. If your building allows it, we give every guest the association’s house rules before arrival.",
  },

  // Property care
  {
    category: "care",
    q: "How do you prevent parties and unauthorized guests?",
    a: "We verify each guest’s ID, check their review history, and set house rules that prohibit parties, with occupancy limits on every listing. If something goes wrong, a local team member can be at your door, not just on the phone.",
  },
  {
    category: "care",
    q: "What insurance covers damage?",
    a: (
      <span>
        Washington law requires short-term rental operators to carry at least $1 million in liability coverage, or to use a platform that provides equivalent coverage (
        <a 
          href="https://app.leg.wa.gov/RCW/default.aspx?cite=64.37.050" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#B8860B] underline font-medium hover:text-[#1E3A8A]"
        >
          RCW 64.37.050
        </a>
        ). Booking platforms offer their own host protection, but it has limits and exclusions. We recommend a short-term rental policy in your name and will help you review it.
      </span>
    ),
  },
  {
    category: "care",
    q: "Who handles cleaning and turnovers?",
    a: "We do. We book background-checked cleaners through Turno, give them a detailed checklist, and check their photos after every clean before the next guest arrives.",
  },

  // Getting started
  {
    category: "getting-started",
    q: "Can I still use my home for personal stays?",
    a: "Yes. Tell us the dates and we block them on every channel. We only ask for notice so we don’t have to cancel a guest’s booking.",
  },
  {
    category: "getting-started",
    q: "How quickly can you launch my listing?",
    a: "Usually 5–7 business days after you sign, once any required city license is in place. Photos, smart lock and listings happen in that window.",
  },
  {
    category: "getting-started",
    q: "How does your pricing work?",
    a: "We reset your nightly rate every day using nearby listings, local demand, Seattle events and the season. Prices rise on busy nights and drop to fill quiet ones. You can set a minimum nightly rate, and we’ll never go below it.",
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
      const textToSearch = typeof item.a === "string" ? item.a : "";
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        textToSearch.toLowerCase().includes(searchQuery.toLowerCase());
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

          <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8860B] select-none">
            Owner questions
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1E3A8A] tracking-tight">
            Frequently Asked{" "}
            <span className="bg-linear-to-r from-[#B8860B] via-[#D4AF37] to-[#8C6508] bg-clip-text text-transparent">
              Questions
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto">
            Straight answers on our fee, city rules, guest screening and getting started.
          </p>

          {/* Interactive Search Bar */}
          <div className="pt-2 max-w-xl mx-auto relative">
            <div className="relative">
              <Search className="w-5 h-5 text-[#64748B] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search: fees, Seattle license, cleaning, contract…"
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
              onClick={() => setActiveCategory("fees")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeCategory === "fees"
                  ? "bg-[#1E3A8A] text-white shadow-sm"
                  : "bg-white text-[#475569] border border-[#E6DCB8] hover:border-[#B8860B]"
              }`}
            >
              <DollarSign className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>Fees &amp; payouts</span>
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
              <span>City rules &amp; permits</span>
            </button>

            <button
              onClick={() => setActiveCategory("care")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeCategory === "care"
                  ? "bg-[#1E3A8A] text-white shadow-sm"
                  : "bg-white text-[#475569] border border-[#E6DCB8] hover:border-[#B8860B]"
              }`}
            >
              <Shield className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>Property care</span>
            </button>

            <button
              onClick={() => setActiveCategory("getting-started")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeCategory === "getting-started"
                  ? "bg-[#1E3A8A] text-white shadow-sm"
                  : "bg-white text-[#475569] border border-[#E6DCB8] hover:border-[#B8860B]"
              }`}
            >
              <Sliders className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>Getting started</span>
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
                Try searching for general keywords like &quot;fees&quot;, &quot;permits&quot;, or &quot;cleaning&quot;. Or call our local team directly.
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
                        {typeof faq.a === "string" ? <p>{faq.a}</p> : faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Bottom Contact Card */}
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
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Talk to our team
                </div>
                <h4 className="font-serif text-xl font-bold text-[#1E3A8A]">
                  Have a question about your city or your property?
                </h4>
                <p className="text-xs text-[#64748B] max-w-md">
                  Call us for a direct answer on licenses, city rules, or how our 22% fee would work for your home.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
              <a
                href="tel:+14254146819"
                className="btn-gold px-6 py-3 rounded-xl font-serif font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call (425) 414-6819</span>
              </a>
              <Link
                href="/audit"
                className="px-5 py-3 rounded-xl border border-[#1E3A8A]/20 bg-white hover:bg-[#1E3A8A]/5 text-xs font-bold text-[#1E3A8A] text-center"
              >
                Request free audit
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
