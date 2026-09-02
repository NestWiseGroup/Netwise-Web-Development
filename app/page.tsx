import React from "react";
import Hero from "@/components/home/Hero";
import TrustMetrics from "@/components/home/TrustMetrics";
import WhySection from "@/components/home/WhySection";
import AuditValueProp from "@/components/home/AuditValueProp";
import ProcessSteps from "@/components/home/ProcessSteps";
import FaqSection from "@/components/home/FaqSection";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <TrustMetrics />
      <WhySection />
      <AuditValueProp />
      <ProcessSteps />
      <FaqSection />
    </div>
  );
}
