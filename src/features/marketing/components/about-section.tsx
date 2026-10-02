// src/components/sections/about-section.tsx
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const { about } = siteConfig;

export default function AboutSection() {
  return (
    <section id="about" className="w-full scroll-mt-14 border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {about.eyebrow}
          </p>
          {/* This is the h1 of /about. If you embed this section on the home page, change it to h2. */}
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {about.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {about.description}
          </p>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-6 border-y border-border/60 py-10 text-center sm:grid-cols-4">
          {about.stats.map((s) => (
            <div key={s.label}>
              <dd className="text-3xl font-bold tracking-tight text-foreground">{s.value}</dd>
              <dt className="mt-1 text-xs text-muted-foreground">{s.label}</dt>
            </div>
          ))}
        </dl>

        <div className="mt-16">
          <h2 className="text-center text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            {about.valuesTitle}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {about.values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex size-9 items-center justify-center rounded-lg border border-border bg-muted/50 text-foreground">
                  <Icon className="size-4" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-2xl border border-border bg-card p-8 text-center sm:p-12">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">{about.cta.title}</h2>
          <p className="mx-auto mt-2 max-w-md text-xs text-muted-foreground sm:text-sm">
            {about.cta.description}
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href={about.cta.href}
              className={cn(buttonVariants({ variant: "default", size: "default" }), "gap-2 text-xs font-medium")}
            >
              <span>{about.cta.label}</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}