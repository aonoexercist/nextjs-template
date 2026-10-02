// src/components/layout/navbar.tsx
"use client";

import { CheckCircle2, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const { login, register } = siteConfig.auth;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2 font-medium tracking-tight transition-opacity hover:opacity-85"
          >
            <div className="flex size-7 items-center justify-center rounded-md bg-foreground text-background">
              <CheckCircle2 className="size-4" />
            </div>
            <span className="text-sm font-semibold tracking-tight text-foreground">
              {siteConfig.name}
            </span>
          </Link>

          <nav
            aria-label="Main"
            className="hidden items-center gap-6 text-xs font-medium text-muted-foreground md:flex"
          >
            {siteConfig.nav.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-foreground">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href={login.href}
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "text-xs font-medium text-muted-foreground hover:text-foreground",
            )}
          >
            {login.label}
          </Link>
          <Link
            href={register.href}
            className={cn(buttonVariants({ variant: "default", size: "sm" }), "text-xs font-medium")}
          >
            {register.label}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-8 items-center justify-center rounded-md border border-border p-1 text-muted-foreground hover:text-foreground md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-b border-border bg-background px-4 py-4 md:hidden">
          <nav aria-label="Mobile" className="flex flex-col space-y-3 text-sm">
            {siteConfig.nav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={close}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <Link
                href={login.href}
                onClick={close}
                className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full justify-center text-xs")}
              >
                {login.label}
              </Link>
              <Link
                href={register.href}
                onClick={close}
                className={cn(buttonVariants({ variant: "default", size: "sm" }), "w-full justify-center text-xs")}
              >
                {register.label}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}