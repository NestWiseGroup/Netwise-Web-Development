"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, ArrowRight, Calendar, Facebook, Instagram } from "@/components/shared/Icons";
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
                  <span>11808 Northup Way, Suite 100 · Bellevue, WA 98005</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#D4AF37] font-bold">✉</span>
                  <a href="mailto:hellonestwiseco@gmail.com" className="hover:text-[#D4AF37] transition-colors font-medium">
                    hellonestwiseco@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <a href="tel:+14254146819" className="hover:text-[#D4AF37] transition-colors font-semibold">
                    (425) 414-6819 (Direct Local Line)
                  </a>
                </div>

                {/* Social Media Channels */}
                <div className="pt-2 flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/share/1C5UkLghGG/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all hover:scale-105"
                    aria-label="NestWise Group on Facebook"
                    title="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/hellonestwiseco?obrf=MW9icmZoeXd1MDNlOQ%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-gradient-to-tr hover:from-[#FD1D1D] hover:via-[#E1306C] hover:to-[#833AB4] text-white flex items-center justify-center transition-all hover:scale-105"
                    aria-label="NestWise Group on Instagram"
                    title="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <span className="text-xs text-slate-400 font-medium ml-1">
                    Follow @hellonestwiseco
                  </span>
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
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="hover:text-white transition-colors">
                      Pricing (22%)
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="hover:text-white transition-colors">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-white transition-colors">
                      About NestWise
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://my.hospitable.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#D4AF37] text-white/90 font-semibold transition-colors flex items-center gap-1"
                    >
                      <span>Owner Portal</span>
                      <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-serif text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-3">
                  Direct Action
                </h5>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li>
                    <Link
                      href="/audit"
                      className="text-[#D4AF37] hover:underline font-bold flex items-center gap-1"
                    >
                      <span>Get Free Property Audit</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => setBookingModalOpen(true)}
                      className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Book a 30-Min Call</span>
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
              © 2026 NestWise Group LLC · 11808 Northup Way, Suite 100, Bellevue, WA 98005 · Month-to-month
            </div>
            <div className="flex items-center gap-3 text-slate-400">
              <span>22% of booking revenue</span>
              <span>·</span>
              <span>Local Bellevue Operations</span>
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
