// src/components/sections/cta-section.tsx
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const { cta } = siteConfig;

export default function CtaSection() {
  return (
    <section className="w-full border-t border-border/60 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{cta.title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {cta.description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={cta.primary.href}
            className={cn(buttonVariants({ variant: "default", size: "lg" }), "h-11 gap-2 px-6 text-sm font-medium shadow-xs")}
          >
            <span>{cta.primary.label}</span>
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href={cta.secondary.href}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 px-6 text-sm font-medium")}
          >
            {cta.secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}