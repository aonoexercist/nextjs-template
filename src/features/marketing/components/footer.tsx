// src/components/layout/footer.tsx
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const linkClass = "transition-colors hover:text-foreground";

export function Footer() {
  const { footer, status } = siteConfig;

  return (
    <footer className="w-full border-t border-border/60 bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 space-y-3">
            <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
              <div className="flex size-6 items-center justify-center rounded-md bg-foreground text-background">
                <CheckCircle2 className="size-3.5" />
              </div>
              <span className="text-sm font-semibold tracking-tight">{siteConfig.name}</span>
            </Link>
            <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">{footer.blurb}</p>

            {status.enabled && (
              <div className="flex items-center gap-2 pt-1 text-xs text-muted-foreground">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                <span>{status.label}</span>
              </div>
            )}
          </div>

          {footer.columns.map((col) => (
            <div key={col.title} className="space-y-2.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                {col.title}
              </p>
              <ul className="space-y-2 text-xs text-muted-foreground">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={linkClass}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName} All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footer.legal.map((l) => (
              <Link key={l.href} href={l.href} className={linkClass}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}