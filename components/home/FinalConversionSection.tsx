"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Sparkles,
  CheckCircle2,
  Clock,
  MapPin,
  Calendar,
} from "@/components/shared/Icons";
import BookingModal from "@/components/shared/BookingModal";

export default function FinalConversionSection() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-[#FDFAF5] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl sm:rounded-[36px] overflow-hidden border border-[#E6DCB8]/40 shadow-2xl bg-[#1E3A8A] text-white p-8 sm:p-12 lg:p-16 text-center space-y-6"
        >
          {/* Ambient Glows */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#B8860B]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#1E3A8A]/30 rounded-full blur-3xl pointer-events-none" />

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Own The Asset. We Run The Operation.</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.18] max-w-3xl mx-auto">
            Ready to Run a Professional Rental Business{" "}
            <span className="text-[#D4AF37]">Without the Daily Workload?</span>
          </h2>

          {/* Subheading / Core brand takeaway */}
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal">
            NestWise gives property owners the operational infrastructure of a professional rental business without requiring them to run the business themselves.
          </p>

          {/* Action CTAs */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/audit"
              className="btn-gold px-8 py-4 rounded-xl font-serif font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-gold-glow transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <span>Analyze My Property</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              type="button"
              onClick={() => setBookingModalOpen(true)}
              className="px-7 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-xs sm:text-sm font-semibold text-white transition-all flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span>Book a Free 30-Minute Call</span>
            </button>

            <a
              href="tel:+14254146819"
              className="px-5 py-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>(425) 414-6819</span>
            </a>
          </div>

          {/* Trust strip */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs text-slate-300">
            <div className="flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Free Property Analysis</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>No Obligation</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Local Washington Operations</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>48-Hour Report Delivery</span>
            </div>
          </div>
        </motion.div>
      </div>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </section>
  );
}
