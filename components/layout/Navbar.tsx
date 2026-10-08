"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronRight, Calendar, MapPin, Lock } from "@/components/shared/Icons";
import BookingModal from "@/components/shared/BookingModal";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full max-w-full bg-[#1E3A8A]">
        {/* Golden Top Utility Strip with White Text - Smoothly collapses on scroll with zero visual artifacts */}
        <div
          className={`bg-gradient-to-r from-[#B8860B] via-[#C59B27] to-[#B8860B] text-white text-xs font-medium transition-all duration-300 ease-in-out overflow-hidden ${
            isScrolled
              ? "max-h-0 opacity-0 py-0 pointer-events-none"
              : "max-h-14 opacity-100 py-1.5"
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
            
            {/* Location Address */}
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-white">
              <MapPin className="w-3.5 h-3.5 text-white shrink-0" aria-hidden="true" />
              <span>11808 Northup Way, Suite 100, Bellevue, WA 98005</span>
            </div>

            {/* Email, Phone & Owner Login (Hospitable) */}
            <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs ml-auto">
              {/* Email */}
              <a
                href="mailto:hello@nestwisegroup.com"
                className="hidden md:inline-flex items-center gap-1 text-white hover:text-[#FDFAF5] font-medium transition-colors"
                title="Email NestWise Group"
              >
                <span>hello@nestwisegroup.com</span>
              </a>

              <span className="hidden md:inline text-white/50" aria-hidden="true">|</span>

              {/* Phone */}
              <a
                href="tel:+14254146819"
                className="flex items-center gap-1 text-white font-bold hover:text-[#FDFAF5] transition-colors"
                title="Call NestWise Group"
              >
                <Phone className="w-3 h-3 text-white" aria-hidden="true" />
                <span>(425) 414-6819</span>
              </a>

              <span className="hidden sm:inline text-white/50" aria-hidden="true">|</span>

              {/* Owner Login (Hospitable) */}
              <a
                href="https://my.hospitable.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-[#1E3A8A] text-white hover:bg-white hover:text-[#1E3A8A] px-2.5 py-0.5 rounded-md font-bold text-[10px] sm:text-[11px] transition-all shadow-xs"
                title="Owner Portal - Hospitable Login"
              >
                <Lock className="w-3 h-3 text-[#D4AF37]" aria-hidden="true" />
                <span>Owner Login</span>
              </a>
            </div>

          </div>
        </div>

        {/* Main Navbar */}
        <div className="bg-[#1E3A8A] border-b border-[#B8860B]/30 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
            
            {/* Brand Logo */}
            <Link href="/" className="flex items-center py-1 group">
              <div className="relative h-12 sm:h-14 w-40 sm:w-60 max-w-[48vw] sm:max-w-none flex items-center">
                <Image
                  src="/NestWise_Logo_Matched.png"
                  alt="NestWise Group"
                  width={240}
                  height={70}
                  priority
                  className="object-contain object-left h-full w-auto group-hover:opacity-95 transition-opacity"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-semibold text-white/90">
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
                href="/pricing"
                className="hover:text-[#D4AF37] transition-colors py-1 relative group tracking-wide"
              >
                Pricing
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

            {/* Right Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                type="button"
                onClick={() => setBookingModalOpen(true)}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold text-white/90 hover:text-white hover:bg-white/10 border border-white/20 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Book a Call</span>
              </button>

              <Link
                href="/audit"
                className="btn-gold px-4 lg:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-serif font-bold tracking-wide flex items-center gap-2 uppercase shadow-md border border-white/15 hover:shadow-gold-glow transition-all"
              >
                <span>Get Free Audit</span>
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="md:hidden flex items-center gap-2">
              <Link
                href="/audit"
                className="btn-gold px-3 py-1.5 rounded-lg text-[11px] font-serif font-bold uppercase tracking-wider"
              >
                Free Audit
              </Link>

              <button
                type="button"
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
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1e3a8a] border-b border-[#B8860B]/30 px-5 pt-4 pb-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 text-white">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs space-y-1 text-slate-200">
              <div className="font-semibold text-white">NestWise Group LLC</div>
              <div>11808 Northup Way, Suite 100, Bellevue, WA 98005</div>
              <div className="text-[#D4AF37]">hello@nestwisegroup.com</div>
            </div>

            <nav className="flex flex-col space-y-3 text-sm font-semibold text-slate-200">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-white/10 hover:text-[#D4AF37] transition-colors flex items-center justify-between"
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
              </Link>

              <Link
                href="/how-we-work"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-white/10 hover:text-[#D4AF37] transition-colors flex items-center justify-between"
              >
                <span>How we Work</span>
                <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
              </Link>

              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-white/10 hover:text-[#D4AF37] transition-colors flex items-center justify-between"
              >
                <span>Pricing</span>
                <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
              </Link>

              <Link
                href="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-white/10 hover:text-[#D4AF37] transition-colors flex items-center justify-between"
              >
                <span>FAQ</span>
                <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-white/10 hover:text-[#D4AF37] transition-colors flex items-center justify-between"
              >
                <span>About</span>
                <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
              </Link>
            </nav>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <Link
                href="/audit"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-gold py-2.5 px-4 rounded-xl text-center font-serif font-bold text-xs uppercase tracking-wider shadow-md border border-white/15 flex items-center justify-center gap-2"
              >
                <span>Get Free Property Audit</span>
              </Link>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setBookingModalOpen(true);
                }}
                className="py-2 px-4 rounded-xl border border-white/20 text-center text-xs font-semibold text-white hover:bg-white/10 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Book a Call</span>
              </button>
              <a
                href="https://my.hospitable.com"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 rounded-xl bg-white/10 text-center text-xs font-semibold text-[#D4AF37] hover:bg-white/20 flex items-center justify-center gap-2"
              >
                <Lock className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Owner Portal Login (Hospitable)</span>
              </a>
            </div>
          </div>
        )}
      </header>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </>
  );
}
