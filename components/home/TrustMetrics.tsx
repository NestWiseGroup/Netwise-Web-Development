import React from "react";

export default function TrustMetrics() {
  const metrics = [
    {
      value: "22%",
      label: "Flat Co-Hosting Commission",
      subtext: "Zero hidden add-on surcharges or linen deductions",
      highlight: true,
    },
    {
      value: "< 3 Min",
      label: "Average Guest Response SLA",
      subtext: "24/7/365 dedicated Seattle-Bellevue command team",
      highlight: false,
    },
    {
      value: "4.98 ★",
      label: "Average Review Sentiment",
      subtext: "Maintained across 1,400+ verified luxury bookings",
      highlight: false,
    },
    {
      value: "0 Days",
      label: "Contract Lock-in Obligation",
      subtext: "Month-to-month flexibility with zero cancellation penalties",
      highlight: false,
    },
  ];

  return (
    <section className="py-10 bg-white border-b border-[#E6DCB8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-slate-200">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center p-4 ${
                idx > 0 ? "pt-6 sm:pt-4" : ""
              }`}
            >
              <div
                className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
                  m.highlight ? "text-[#B8860B]" : "text-[#1E3A8A]"
                }`}
              >
                {m.value}
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1F2937] mt-2">
                {m.label}
              </div>
              <div className="text-[11px] text-[#6B7280] mt-1 max-w-[220px]">
                {m.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
