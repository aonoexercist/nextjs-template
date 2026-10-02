// src/components/sections/hero-section.tsx
import { ArrowRight, CheckCircle2, Clock, Zap } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const { hero } = siteConfig;

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Link
            href={hero.badge.href}
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3.5 py-1 text-xs text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
          >
            <span className="flex size-1.5 rounded-full bg-emerald-500" />
            <span className="font-medium text-foreground">{hero.badge.prefix}</span>
            <span className="text-border">|</span>
            <span>{hero.badge.text}</span>
            <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <h1 className="mt-8 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          {hero.title}
          <br />
          <span className="text-muted-foreground">{hero.subtitle}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {hero.description}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={hero.primaryCta.href}
            className={cn(buttonVariants({ variant: "default", size: "lg" }), "h-11 gap-2 px-6 text-sm font-medium shadow-xs")}
          >
            <span>{hero.primaryCta.label}</span>
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 px-6 text-sm font-medium")}
          >
            {hero.secondaryCta.label}
          </Link>
        </div>

        <p className="mt-3 text-xs text-muted-foreground">{hero.note}</p>

        {/* Placeholder preview: swap for a real screenshot with next/image */}
        <div className="mt-14 rounded-2xl border border-border bg-card p-2 text-left shadow-sm sm:p-4">
          <div className="flex items-center justify-between border-b border-border/60 px-2 pb-3">
            <div className="flex items-center gap-1.5">
              <div className="size-2.5 rounded-full bg-border" />
              <div className="size-2.5 rounded-full bg-border" />
              <div className="size-2.5 rounded-full bg-border" />
              <span className="ml-2 text-xs font-medium text-muted-foreground">{hero.previewPath}</span>
            </div>
            <span className="flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400">
              <span className="size-1.5 animate-pulse rounded-full bg-emerald-500 motion-reduce:animate-none" />
              Live sync
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 pt-3 md:grid-cols-3">
            {hero.previewColumns.map((col) => (
              <div key={col.name} className="space-y-2.5 rounded-xl border border-border/50 bg-muted/20 p-3">
                <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
                  <span>{col.name}</span>
                  <span className="rounded-md bg-muted px-1.5 py-0.5 text-[10px]">{col.cards.length}</span>
                </div>

                {col.cards.map((card) => {
                  const done = "done" in card && card.done;
                  const highlight = "highlight" in card && card.highlight;
                  return (
                    <div
                      key={card.id}
                      className={cn(
                        "space-y-2 rounded-lg border border-border bg-card p-3 shadow-2xs",
                        done && "opacity-80",
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="py-0 text-[10px] font-normal">
                          {card.tag}
                        </Badge>
                        {done ? (
                          <CheckCircle2 className="size-3.5 text-emerald-500" />
                        ) : (
                          <span className="text-[10px] text-muted-foreground">{card.id}</span>
                        )}
                      </div>
                      <p
                        className={cn(
                          "text-xs font-medium text-foreground",
                          done && "line-through decoration-muted-foreground",
                        )}
                      >
                        {card.title}
                      </p>
                      <div className="flex items-center justify-between pt-1 text-[11px] text-muted-foreground">
                        <div className="flex items-center gap-1">
                          {highlight ? <Zap className="size-3 text-amber-500" /> : !done && <Clock className="size-3" />}
                          <span>{card.meta}</span>
                        </div>
                        <div
                          className={cn(
                            "flex size-5 items-center justify-center rounded-full text-[10px] font-medium",
                            highlight ? "bg-foreground text-background" : "bg-muted text-foreground",
                          )}
                        >
                          {card.who}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}