"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Sparkles } from "@/components/shared/Icons";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 500, y: 300 });
  const [isHovered, setIsHovered] = useState(false);

  // Dynamic interactive pointer tracking for Antigravity-style grid illumination
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsHovered(true);
  };

  // Staggered cascade animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 bg-[#FDFAF5] border-b border-[#E6DCB8]/60 overflow-hidden cursor-default select-none"
    >
      {/* 
        Hero Grid: Completely HIDDEN by default. 
        ONLY visible and illuminated around the cursor when hovered (Bigger 56px grid size) 
      */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: `radial-gradient(480px circle at ${mousePos.x}px ${mousePos.y}px, rgba(184, 134, 11, 0.16) 0%, rgba(30, 58, 138, 0.06) 50%, transparent 80%)`,
        }}
      />

      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
          isHovered ? "opacity-90" : "opacity-0"
        }`}
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(184, 134, 11, 0.35) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(184, 134, 11, 0.35) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          maskImage: `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, black 25%, transparent 75%)`,
          WebkitMaskImage: `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, black 25%, transparent 75%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Staggered Cascading Reveal */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col space-y-5 text-left"
          >
            
            {/* Small Overline Pill */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A8A]/5 border border-[#B8860B]/30 self-start shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#B8860B]">
                PREMIUM AI CO-HOSTING
              </span>
            </motion.div>

            {/* Clear, Punchy Headline */}
            <motion.h1 
              variants={itemVariants}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] leading-[1.12] tracking-tight"
            >
              Maximize Earning. Erase Effort.
            </motion.h1>

            {/* Concise Value Proposition */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-[#374151] leading-relaxed font-normal max-w-lg"
            >
              Full-scale luxury property operations across Airbnb and VRBO for a flat <strong className="text-[#1E3A8A] font-bold">22% fee</strong>. Zero lock-in contracts. Complete local accountability.
            </motion.p>

            {/* Trust & Location */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-2 text-xs sm:text-sm text-[#4B5563] font-medium"
            >
              <MapPin className="w-4 h-4 text-[#B8860B] shrink-0" />
              <span>Headquartered in <strong className="text-[#1E3A8A]">Bellevue, WA</strong> · Greater Seattle & Eastside</span>
            </motion.div>

            {/* Unified Primary Action & Demoted Secondary Link */}
            <motion.div variants={itemVariants} className="pt-2 flex flex-col items-start gap-2.5">
              <motion.div 
                whileHover={{ scale: 1.03 }} 
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href="/audit"
                  className="btn-gold py-4 px-8 rounded-xl font-serif font-bold text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-3 shadow-luxury hover:shadow-gold-glow transition-all"
                >
                  <span>Request Free Property Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <div className="text-xs text-[#6B7280] flex items-center gap-2 pl-1">
                <span>Free 48-hour dossier</span>
                <span>·</span>
                <span>Prefer to talk? <a href="tel:+14254146819" className="text-[#1E3A8A] font-semibold hover:underline">Call (425) 414-6819</a></span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Clean Luxury Airbnb Apartment Image with Continuous Float Motion */}
          <motion.div 
            initial={{ opacity: 0, x: 35, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-6 relative"
          >
            {/* Ambient Background Glow Behind Image */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-[#B8860B]/20 via-[#D4AF37]/10 to-[#1E3A8A]/15 rounded-[36px] blur-2xl pointer-events-none -z-10" />

            {/* Floating Container (Continuous gentle breathing float) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.015, transition: { duration: 0.3 } }}
              className="relative rounded-3xl overflow-hidden border border-[#E6DCB8] shadow-luxury-lg bg-white p-2.5 hover:border-[#B8860B] transition-colors duration-500 hover:shadow-2xl"
            >
              <div className="relative h-[400px] sm:h-[480px] lg:h-[500px] w-full rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=85"
                  alt="Modern Luxury Airbnb Apartment Co-Hosted by NestWise Group in Bellevue WA"
                  fill
                  priority
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
