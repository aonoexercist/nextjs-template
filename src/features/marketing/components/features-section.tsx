// src/components/sections/features-section.tsx
import { siteConfig } from "@/config/site";

const { features } = siteConfig;

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full scroll-mt-14 border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {features.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {features.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {features.description}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:border-foreground/25 hover:shadow-2xs"
            >
              <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-muted/50 text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-4 text-base font-medium tracking-tight text-foreground">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}