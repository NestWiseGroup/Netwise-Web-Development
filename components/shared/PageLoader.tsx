"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 25) + 15;
      });
    }, 100);

    const timeout = setTimeout(() => {
      setFading(true);
      setTimeout(() => setLoading(false), 250);
    }, 400);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#FDFAF5] flex flex-col items-center justify-center transition-opacity duration-500 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center space-y-6">
        
        {/* Brand Logo Display */}
        <div className="relative w-44 sm:w-52 h-20 sm:h-24 flex items-center justify-center animate-pulse">
          <Image
            src="/NestWise_Logo_Matched.png"
            alt="NestWise Group"
            width={220}
            height={90}
            priority
            className="object-contain w-auto h-full drop-shadow-md"
          />
        </div>

        {/* Gold Shimmer Loading Line */}
        <div className="w-44 sm:w-56 h-1 bg-[#E6DCB8] rounded-full overflow-hidden relative">
          <div
            style={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-[#1E3A8A] via-[#B8860B] to-[#D4AF37] rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(184,134,11,0.5)]"
          />
        </div>

        {/* Subtitle */}
        <div className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#1E3A8A]/75">
          Seattle · Bellevue · Medina
        </div>
      </div>
    </div>
  );
}
