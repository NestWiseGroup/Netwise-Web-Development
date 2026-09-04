"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronRight } from "@/components/shared/Icons";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#1E3A8A] border-b border-[#B8860B]/30 shadow-lg transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center py-1 group">
          <div className="relative h-14 sm:h-16 w-48 sm:w-64 flex items-center">
            <Image
              src="/NestWise_Logo_Matched.png"
              alt="NestWise Group"
              width={260}
              height={75}
              priority
              className="object-contain object-left h-full w-auto group-hover:opacity-95 transition-opacity"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links: Home, How we Work, FAQ, About */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-semibold text-white/90">
          <Link
            href="/"
            className="hover:text-[#D4AF37] transition-colors py-1 relative group tracking-wide"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-200 group-hover:w-full" />
          </Link>
          <Link
            href="/how-we-work"
            className="hover:text-[#D4AF37] transition-colors py-1 relative group tracking-wide"
          >
            How we Work
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-200 group-hover:w-full" />
          </Link>
          <Link
            href="/faq"
            className="hover:text-[#D4AF37] transition-colors py-1 relative group tracking-wide"
          >
            FAQ
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-200 group-hover:w-full" />
          </Link>
          <Link
            href="/about"
            className="hover:text-[#D4AF37] transition-colors py-1 relative group tracking-wide"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-200 group-hover:w-full" />
          </Link>
        </nav>

        {/* Right Action: OpenPhone Direct Line + Strategy Call CTA */}
        <div className="hidden sm:flex items-center gap-5">
          <a
            href="tel:+14254146819"
            className="hidden lg:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>(425) 414-6819</span>
          </a>

          {/* Primary CTA Button */}
          <Link
            href="/audit"
            className="btn-gold px-5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-serif font-bold tracking-wide flex items-center gap-2 uppercase shadow-md border border-white/15 hover:shadow-gold-glow transition-all"
          >
            <span>Book A Call</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            href="/audit"
            className="btn-gold px-3 py-1.5 rounded-lg text-[11px] font-serif font-bold uppercase tracking-wider sm:hidden"
          >
            Book A Call
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1e3a8a] border-b border-[#B8860B]/30 px-5 pt-4 pb-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 text-white">
          <nav className="flex flex-col space-y-3 text-sm font-semibold text-slate-200">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-white/10 hover:text-[#D4AF37] transition-colors flex items-center justify-between"
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
            </Link>

            <Link
              href="/how-we-work"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-white/10 hover:text-[#D4AF37] transition-colors flex items-center justify-between"
            >
              <span>How we Work</span>
              <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
            </Link>
            
            <Link
              href="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-white/10 hover:text-[#D4AF37] transition-colors flex items-center justify-between"
            >
              <span>FAQ</span>
              <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-white/10 hover:text-[#D4AF37] transition-colors flex items-center justify-between"
            >
              <span>About</span>
              <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
            </Link>
          </nav>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/audit"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-gold py-3 px-4 rounded-xl text-center font-serif font-bold text-xs uppercase tracking-wider shadow-md border border-white/15 flex items-center justify-center gap-2"
            >
              <span>Request Free Property Audit</span>
            </Link>
            <a
              href="tel:+14254146819"
              className="text-center text-xs text-slate-300 hover:text-[#D4AF37] transition-colors flex items-center justify-center gap-1.5 py-1"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Call Executive Desk: (425) 414-6819</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
