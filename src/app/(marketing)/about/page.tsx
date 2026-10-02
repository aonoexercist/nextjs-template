import type { Metadata } from "next";
import AboutSection from "@/features/marketing/components/about-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `About | ${siteConfig.name}`,
  description: `Learn more about our mission to make task coordination effortless.`,
};

export default function AboutPage() {
  return <AboutSection />;
}
