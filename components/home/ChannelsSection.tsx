"use client";

import React from "react";

interface ChannelItem {
  name: string;
  renderWordmark: () => React.ReactNode;
}

export default function ChannelsSection() {
  const channels: ChannelItem[] = [
    {
      name: "Airbnb",
      renderWordmark: () => (
        <div className="flex items-center gap-1.5 select-none">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-[#FF385C]">
            airbnb
          </span>
        </div>
      ),
    },
    {
      name: "Vrbo",
      renderWordmark: () => (
        <div className="flex items-baseline select-none">
          <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#1C3F73]">
            vrbo
          </span>
          <span className="w-2 h-2 rounded-full bg-[#00B2D6] ml-0.5" />
        </div>
      ),
    },
    {
      name: "Booking.com",
      renderWordmark: () => (
        <div className="flex items-center select-none">
          <span className="text-base sm:text-lg font-extrabold tracking-tight text-[#003580]">
            Booking<span className="text-[#006CE4]">.com</span>
          </span>
        </div>
      ),
    },
    {
      name: "Google Travel",
      renderWordmark: () => (
        <div className="flex items-center gap-1.5 select-none">
          <span className="text-base sm:text-lg font-bold tracking-tight text-[#374151]">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
            <span className="ml-1 text-xs font-semibold text-[#64748B] uppercase tracking-wider">
              Travel
            </span>
          </span>
        </div>
      ),
    },
    {
      name: "Agoda",
      renderWordmark: () => (
        <div className="flex items-center select-none">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-[#2B3445]">
            agoda
          </span>
        </div>
      ),
    },
    {
      name: "Direct Booking",
      renderWordmark: () => (
        <div className="flex flex-col items-center select-none text-center">
          <span className="font-serif text-xs sm:text-sm font-bold text-[#1E3A8A] leading-tight">
            Direct Booking
          </span>
          <span className="text-[10px] font-semibold text-[#B8860B] tracking-wider uppercase">
            NestWise Site
          </span>
        </div>
      ),
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-[#E6DCB8]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Simple Clean Title without text overload */}
        <div className="space-y-1 max-w-xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8860B] select-none">
            MULTI-CHANNEL DISTRIBUTION
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1E3A8A]">
            One Property. Multiple Booking Channels.
          </h2>
        </div>

        {/* Clean Logo & Text Wordmark Showcase */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
          {channels.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FDFAF5] h-24 sm:h-28 rounded-2xl border border-[#E6DCB8] flex items-center justify-center p-4 hover:border-[#B8860B] hover:shadow-md transition-all group"
              title={item.name}
            >
              <div className="flex items-center justify-center transition-transform group-hover:scale-105 duration-200">
                {item.renderWordmark()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
