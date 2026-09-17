import React from "react";
import Hero from "@/components/home/Hero";
import TrustMetrics from "@/components/home/TrustMetrics";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import WhySection from "@/components/home/WhySection";
import ChannelsSection from "@/components/home/ChannelsSection";
import AuditValueProp from "@/components/home/AuditValueProp";
import ProcessSteps from "@/components/home/ProcessSteps";
import FaqSection from "@/components/home/FaqSection";
import EarningsPotentialCard from "@/components/shared/EarningsPotentialCard";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. The Four-Stat Strip */}
      <TrustMetrics />

      {/* 3. What We Actually Do */}
      <WhatWeDoSection />

      {/* 4. Why Local Matters */}
      <WhySection />

      {/* 5. Where Your Property Gets Seen */}
      <ChannelsSection />

      {/* 6. The Free Audit */}
      <AuditValueProp />

      {/* 7. How It Works */}
      <ProcessSteps />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* 8. Closing Section */}
      <section className="py-16 sm:py-24 bg-[#FDFAF5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <EarningsPotentialCard />
        </div>
      </section>
    </div>
  );
}
