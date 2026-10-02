// src/config/site.ts
// Single source of truth for brand, navigation and marketing copy.
// Rebrand the whole template by editing this file only.
import {
  BarChart3,
  Command,
  Compass,
  Layers,
  Shield,
  ShieldCheck,
  SlidersHorizontal,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type NavLink = { label: string; href: string };
export type Feature = { icon: LucideIcon; title: string; description: string };

export const siteConfig = {
  name: "Acme",
  legalName: "Acme, Inc.",
  tagline: "Work in sync. Deliver with clarity.",
  description:
    "A minimalist Next.js starter with a landing page, pricing, about and footer sections.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  // Show the "All systems operational" dot in the footer only if you wire it to a real status source.
  status: { enabled: false, label: "All systems operational" },

  nav: [
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
  ] satisfies NavLink[],

  auth: {
    login: { label: "Log in", href: "/login" },
    register: { label: "Get started", href: "/register" },
  },

  footer: {
    blurb:
      "Minimalist task alignment and real-time collaboration for high-performing product teams.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "/#features" },
          { label: "Pricing", href: "/pricing" },
          { label: "Changelog", href: "/changelog" },
          { label: "Integrations", href: "/integrations" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Documentation", href: "/docs" },
          { label: "Guides", href: "/guides" },
          { label: "API reference", href: "/api-reference" },
          { label: "Community", href: "/community" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Blog", href: "/blog" },
          { label: "Careers", href: "/careers" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ] satisfies { title: string; links: NavLink[] }[],
    legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Security", href: "/security" },
    ] satisfies NavLink[],
  },

  hero: {
    badge: { prefix: "Version 1.0", text: "Minimalist workflow template", href: "/#features" },
    title: "Work in sync.",
    subtitle: "Deliver with clarity.",
    description:
      "A distraction-free task management template for engineering and product teams. Clean design, real-time alignment, and zero bloat.",
    primaryCta: { label: "Start free trial", href: "/register" },
    secondaryCta: { label: "Explore features", href: "/#features" },
    note: "Free 14-day trial • No credit card required • 2-minute setup",
    // Placeholder board shown in the hero preview. Replace with a screenshot when you have one.
    previewPath: "workspace / sprint-42",
    previewColumns: [
      {
        name: "In progress",
        cards: [
          { tag: "Frontend", id: "#ACM-104", title: "Migrate marketing layout to Tailwind v4", meta: "Today", who: "AL" },
          { tag: "Auth", id: "#ACM-108", title: "Streamline login and register flows", meta: "High priority", who: "JD", highlight: true },
        ],
      },
      {
        name: "Review",
        cards: [
          { tag: "API", id: "#ACM-099", title: "Real-time webhook sync pipeline", meta: "2 reviewers", who: "MK" },
        ],
      },
      {
        name: "Completed",
        cards: [
          { tag: "Design", id: "#ACM-091", title: "Minimalist typography and color tokens", meta: "Shipped yesterday", who: "SC", done: true },
        ],
      },
    ],
  },

  features: {
    eyebrow: "Capabilities",
    title: "Everything you need. Nothing you don't.",
    description:
      "Purpose-built components and workflows for teams who value clarity, speed, and clean design.",
    items: [
      { icon: Zap, title: "Instant real-time sync", description: "Edits, comments, and status changes propagate in under 100ms with conflict-free state resolution." },
      { icon: Layers, title: "Cross-team alignment", description: "Unify engineering sprints, design reviews, and product roadmaps in one clear canvas." },
      { icon: SlidersHorizontal, title: "Automated workflows", description: "Update tasks and send notifications automatically when PRs merge or milestones are hit." },
      { icon: ShieldCheck, title: "Enterprise-grade security", description: "Fine-grained roles and permissions, plus encrypted audit trails." },
      { icon: BarChart3, title: "Velocity insights", description: "See cycle times, throughput, and sprint bottlenecks in minimalist charts." },
      { icon: Command, title: "Keyboard-first interface", description: "Create, move, and filter tasks from the command palette without touching the mouse." },
    ] satisfies Feature[],
  },

  pricing: {
    eyebrow: "Pricing",
    title: "Predictable plans. No surprises.",
    description: "Start free and scale as your team grows. Try Pro free for 14 days.",
    tiers: [
      {
        name: "Starter",
        id: "starter",
        price: "$0",
        period: "forever",
        description: "Essential task management for small teams and side projects.",
        features: ["Up to 5 active members", "Unlimited task boards", "Real-time status updates", "Standard integrations (GitHub, Slack)", "Community support"],
        cta: "Get started free",
        href: "/register",
        popular: false,
      },
      {
        name: "Pro",
        id: "pro",
        price: "$12",
        period: "per user / month",
        description: "Advanced sync and automation for scaling teams.",
        features: ["Unlimited team members", "Sub-second real-time sync", "Automated workflow rules", "Sprint velocity analytics", "Custom task fields & filters", "Priority email support"],
        cta: "Start 14-day trial",
        href: "/register",
        popular: true,
      },
      {
        name: "Enterprise",
        id: "enterprise",
        price: "Custom",
        period: "tailored billing",
        description: "Dedicated security, governance, and scale for organizations.",
        features: ["Dedicated instance or VPC", "SAML / SSO & SCIM provisioning", "Audit logging & compliance exports", "Custom SLA", "Dedicated customer success manager"],
        cta: "Contact sales",
        href: "/contact",
        popular: false,
      },
    ],
  },

  about: {
    eyebrow: "Our mission",
    title: "Simplicity in task alignment.",
    description:
      "Modern product and engineering teams spend too much time managing their tools instead of building great software. We make collaboration seamless, quiet, and fast.",
    // Placeholder numbers: replace with real, verifiable figures or remove the stats block.
    stats: [
      { value: "99.99%", label: "Sync uptime" },
      { value: "< 50ms", label: "Global latency" },
      { value: "12M+", label: "Tasks completed" },
      { value: "45+", label: "Countries" },
    ],
    valuesTitle: "Our core principles",
    values: [
      { icon: Zap, title: "Velocity without haste", description: "Software that feels instant and removes micro-delays from everyday work." },
      { icon: Compass, title: "Clarity over complexity", description: "Every feature must earn its place. We prefer small, powerful abstractions to endless settings." },
      { icon: Shield, title: "Reliability as a foundation", description: "Task state is critical. We engineer for solid sync, data integrity, and constant availability." },
    ] satisfies Feature[],
    cta: {
      title: "Want to build with us?",
      description: "We're always looking for builders, designers, and engineers.",
      label: "Join us",
      href: "/careers",
    },
  },

  cta: {
    title: "Ready to streamline your team's workflow?",
    description:
      "Join teams who use Acme to keep projects moving forward without the complexity.",
    primary: { label: "Get started free", href: "/register" },
    secondary: { label: "Sign in to your workspace", href: "/login" },
  },
} as const;