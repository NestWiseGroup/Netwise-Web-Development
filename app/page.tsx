import React from "react";
import Hero from "@/components/home/Hero";
import TrustMetrics from "@/components/home/TrustMetrics";
import WhySection from "@/components/home/WhySection";
import ComparisonMatrix from "@/components/shared/ComparisonMatrix";
import AuditValueProp from "@/components/home/AuditValueProp";
import ProcessSteps from "@/components/home/ProcessSteps";
import FaqSection from "@/components/home/FaqSection";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <TrustMetrics />
      <WhySection />
      
      {/* Condensed Head-to-Head Comparison Matrix */}
      <section className="py-16 sm:py-20 bg-white border-y border-[#E6DCB8]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ComparisonMatrix
            variant="condensed"
            title="The Concrete Comparison: NestWise vs. The Market"
            subtitle="Buyers and luxury homeowners deserve transparent numbers. Here is how our Bellevue-based model directly stacks up against national franchises and solo hosting."
          />
        </div>
      </section>

      <AuditValueProp />
      <ProcessSteps />
      <FaqSection />
    </div>
  );
}
