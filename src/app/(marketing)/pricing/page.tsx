import type { Metadata } from "next";
import PricingSection from "@/features/marketing/components/pricing-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: `Simple, transparent pricing for teams of any size.`,
};

export default function PricingPage() {
  return (
    <div className="py-6 sm:py-12">
      <PricingSection />
    </div>
  );
}
