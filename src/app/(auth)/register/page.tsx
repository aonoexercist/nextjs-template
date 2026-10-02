import type { Metadata } from "next";
import RegisterDisplay from "@/features/auth/register/register-display";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Register | ${siteConfig.name}`,
  description: `Create your ${siteConfig.name} account to start synchronizing tasks.`,
};

export default function RegisterPage() {
  return <RegisterDisplay />;
}
