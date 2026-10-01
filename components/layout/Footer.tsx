"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, ArrowRight, Calendar } from "@/components/shared/Icons";
import BookingModal from "@/components/shared/BookingModal";

export default function Footer() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <>
      <footer id="footer" className="bg-[#1e3a8a] text-slate-300 pt-14 pb-10 border-t border-[#B8860B]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-white/10 items-start">
            
            {/* Left Branding & Contact Block */}
            <div className="md:col-span-6 space-y-4">
              <Link href="/" className="inline-block">
                <div className="relative h-14 sm:h-16 w-56 sm:w-72 flex items-center">
                  <Image
                    src="/NestWise_Logo_Matched.png"
                    alt="NestWise Group"
                    width={280}
                    height={70}
                    className="object-contain object-left h-full w-auto hover:opacity-95 transition-opacity"
                  />
                </div>
              </Link>

              <p className="text-xs sm:text-sm text-slate-300 max-w-md font-normal leading-relaxed">
                Local Airbnb co-hosting for Greater Seattle and the Eastside. We list, price, clean and manage your home across 6 booking channels for 22% of booking revenue, month-to-month.
              </p>

              {/* Clean Contact Details */}
              <div className="pt-1 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>560 Naches SW · Renton, WA 98057</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <a href="tel:+14254146819" className="hover:text-[#D4AF37] transition-colors font-semibold">
                    (425) 414-6819 (Direct Local Line)
                  </a>
                </div>
              </div>
            </div>

            {/* Right Navigation & Actions */}
            <div className="md:col-span-6 grid grid-cols-2 gap-8 sm:gap-12 pt-2">
              <div>
                <h5 className="font-serif text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-3">
                  Navigation
                </h5>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li>
                    <Link href="/" className="hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-we-work" className="hover:text-white transition-colors">
                      How We Work
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="hover:text-white transition-colors">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="hover:text-white transition-colors">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-white transition-colors">
                      About
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-serif text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-3">
                  Get Started
                </h5>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li>
                    <Link
                      href="/audit"
                      className="text-[#D4AF37] hover:underline font-semibold flex items-center gap-1"
                    >
                      <span>Get Free Property Audit</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => setBookingModalOpen(true)}
                      className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Book a Call</span>
                    </button>
                  </li>
                  <li>
                    <a
                      href="tel:+14254146819"
                      className="hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Call: (425) 414-6819</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Minimalist Bottom Bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-3">
            <div>
              © 2026 NestWise Group LLC · Renton, WA · 22% co-hosting · Month-to-month
            </div>
            <div className="flex items-center gap-3 text-slate-400">
              <span>22% of booking revenue</span>
              <span>·</span>
              <span>Month-to-month</span>
            </div>
          </div>

        </div>
      </footer>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </>
  );
}
