// src/components/sections/pricing-section.tsx
import { Check } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const { pricing } = siteConfig;

export default function PricingSection() {
  return (
    <section id="pricing" className="w-full scroll-mt-14 border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {pricing.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {pricing.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {pricing.description}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricing.tiers.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                "relative flex flex-col justify-between rounded-2xl border p-6 transition-all sm:p-8",
                tier.popular
                  ? "border-foreground bg-card shadow-sm"
                  : "border-border bg-card/60 hover:border-foreground/20",
              )}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="default" className="px-2.5 py-0.5 text-[11px] font-medium">
                    Most popular
                  </Badge>
                </div>
              )}

              <div>
                <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{tier.description}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-foreground">{tier.price}</span>
                  <span className="text-xs text-muted-foreground">{tier.period}</span>
                </div>

                <div className="mt-6 space-y-3 border-t border-border/60 pt-6">
                  <p className="text-xs font-medium text-foreground">What&apos;s included</p>
                  <ul className="space-y-2.5 text-xs text-muted-foreground">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check className="size-4 shrink-0 text-foreground" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  href={tier.href}
                  className={cn(
                    buttonVariants({ variant: tier.popular ? "default" : "outline", size: "default" }),
                    "h-10 w-full justify-center text-xs font-medium",
                  )}
                >
                  {tier.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}