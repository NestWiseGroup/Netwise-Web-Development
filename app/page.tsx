import React from "react";
import Hero from "@/components/home/Hero";
import TrustMetrics from "@/components/home/TrustMetrics";
import OwnershipSection from "@/components/home/OwnershipSection";
import MarketOperationsSection from "@/components/home/MarketOperationsSection";
import DifferentiatorSection from "@/components/home/DifferentiatorSection";
import ChannelsSection from "@/components/home/ChannelsSection";
import PropertyCareSection from "@/components/home/PropertyCareSection";
import OwnerSegmentationSection from "@/components/home/OwnerSegmentationSection";
import FaqSection from "@/components/home/FaqSection";
import FinalConversionSection from "@/components/home/FinalConversionSection";

export const metadata = {
  title: "NestWise Group | Airbnb Co-Hosting & Rental Operations Company",
  description:
    "Airbnb co-hosting company, you own the property, we run everything. Smart pricing, turnovers, guest support, and owner reporting across Washington. 22% flat fee, month-to-month.",
};

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* 1. Clean Hero: Airbnb co-hosting company, you own the property, we run everything */}
      <Hero />

      {/* Trust Strip & Core Metrics */}
      <TrustMetrics />

      {/* 2. Ownership & Effort: Owning Airbnb rental property shouldn't be your second job */}
      <OwnershipSection />

      {/* 3. Market-Focused Operations (Eight Parts under Single Heading) */}
      <MarketOperationsSection />

      {/* 4. Differentiator: Smart Technology. Real People. Local Operations */}
      <DifferentiatorSection />

      {/* 5. Distribution: One Property. Multiple Booking Channels. One Management Team */}
      <ChannelsSection />

      {/* 6. Property Care: Your Property Is More Than a Booking. We Manage It Like an Investment */}
      <PropertyCareSection />

      {/* 7. Owner Segmentation: Which Property Owner Are You? */}
      <OwnerSegmentationSection />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* 8. Final Conversion: Analyze My Property / Book a Free 30-Minute Call */}
      <FinalConversionSection />
    </div>
  );
}
