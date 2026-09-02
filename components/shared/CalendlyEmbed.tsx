"use client";

import React, { useState } from "react";

interface CalendlyEmbedProps {
  url?: string;
  hostName?: string;
  hostTitle?: string;
  className?: string;
}

export default function CalendlyEmbed({
  hostName = "Marcus Vance",
  hostTitle = "Principal Director of Operations",
  className = "",
}: CalendlyEmbedProps) {
  const [selectedDate, setSelectedDate] = useState("2026-09-04");
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [isBooked, setIsBooked] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [portfolioNotes, setPortfolioNotes] = useState("");

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  return (
    <div
      className={`rounded-2xl border border-[#E2E8F0] bg-[#FAFAF8] overflow-hidden flex flex-col shadow-sm ${className}`}
    >
      {isBooked ? (
        <div className="p-8 sm:p-12 flex flex-col items-center justify-center text-center space-y-4 bg-white min-h-[420px]">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E3A8A]">
            Strategy Briefing Confirmed
          </h4>
          <p className="text-sm text-[#4B5563] max-w-md leading-relaxed">
            Your private 30-Minute Executive Session with{" "}
            <strong className="text-[#1E3A8A]">{hostName}</strong> (Bellevue Operations HQ) is scheduled for{" "}
            <span className="font-bold text-[#1E3A8A]">{selectedDate}</span> at{" "}
            <span className="font-bold text-[#1E3A8A]">{selectedTime} (PST)</span>. Calendar invites and video conference coordinates have been dispatched.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setIsBooked(false)}
              className="btn-gold px-6 py-2.5 rounded-lg text-xs uppercase font-bold tracking-wider cursor-pointer"
            >
              Modify Briefing Details
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[#E2E8F0]">
          {/* Host Info Side Pane */}
          <div className="md:w-5/12 p-6 sm:p-8 bg-white flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#1E3A8A] text-[#D4AF37] font-serif font-bold text-lg flex items-center justify-center border border-[#B8860B]/30 shadow-sm">
                  MV
                </div>
                <div>
                  <div className="font-serif font-bold text-base text-[#1E3A8A]">
                    {hostName}
                  </div>
                  <div className="text-xs text-[#64748B]">{hostTitle}</div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#B8860B] bg-[#FDFAF5] px-2.5 py-1 rounded border border-[#E6DCB8]">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  30-Minute Video Briefing
                </span>
                <h5 className="font-serif text-lg font-bold text-[#1F2937]">
                  Executive Property & Strategy Evaluation
                </h5>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  A high-touch walkthrough covering Bellevue / Seattle STR zoning compliance (SMC 6.600), custom dynamic yield modeling, and onboarding timeline logistics.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F1F5F9] text-xs text-[#64748B] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Bellevue Command Desk / Google Meet</span>
            </div>
          </div>

          {/* Calendar Picker Side Pane */}
          <div className="md:w-7/12 p-6 sm:p-8 bg-[#FAFAF8] flex flex-col justify-between">
            <form onSubmit={handleBooking} className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1E3A8A] block mb-2">
                  1. Select Target Date
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Thu, Sep 3", date: "2026-09-03" },
                    { label: "Fri, Sep 4", date: "2026-09-04" },
                    { label: "Mon, Sep 7", date: "2026-09-07" },
                  ].map((d) => (
                    <button
                      type="button"
                      key={d.date}
                      onClick={() => setSelectedDate(d.date)}
                      className={`py-2 px-2 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                        selectedDate === d.date
                          ? "bg-[#1E3A8A] text-white border-[#1E3A8A] shadow-sm"
                          : "bg-white text-[#374151] border-[#CBD5E1] hover:border-[#B8860B]"
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1E3A8A] block mb-2">
                  2. Select Pacific Time (PST) Slot
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {["09:30 AM", "11:00 AM", "02:30 PM", "04:00 PM"].map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border text-left flex items-center justify-between transition-all cursor-pointer ${
                        selectedTime === t
                          ? "bg-[#FDFAF5] text-[#B8860B] border-[#B8860B] font-bold shadow-sm"
                          : "bg-white text-[#374151] border-[#CBD5E1] hover:bg-[#F8FAFC]"
                      }`}
                    >
                      <span>{t} PST</span>
                      {selectedTime === t && (
                        <svg className="w-3.5 h-3.5 text-[#B8860B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="px-3 py-2 text-xs rounded-lg border border-[#CBD5E1] bg-white focus:outline-none focus:ring-1 focus:ring-[#B8860B]"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3 py-2 text-xs rounded-lg border border-[#CBD5E1] bg-white focus:outline-none focus:ring-1 focus:ring-[#B8860B]"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Property address or portfolio notes (optional)"
                  value={portfolioNotes}
                  onChange={(e) => setPortfolioNotes(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-[#CBD5E1] bg-white focus:outline-none focus:ring-1 focus:ring-[#B8860B]"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-gold py-3 rounded-xl font-serif font-bold text-xs uppercase tracking-wider shadow-sm cursor-pointer"
              >
                Confirm {selectedTime} Briefing on {selectedDate}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
