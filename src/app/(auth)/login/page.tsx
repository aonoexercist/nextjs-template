import type { Metadata } from "next";
import LoginDisplay from "@/features/auth/login/login-display";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Login | ${siteConfig.name}`,
  description: `Sign in to access your ${siteConfig.name} workspace.`,
};

export default function LoginPage() {
  return <LoginDisplay />;
}
