import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
 
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm space-y-8">
        <Link
          href="/"
          className="mx-auto flex w-fit items-center gap-2 transition-opacity hover:opacity-80"
        >
          <div className="flex size-9 items-center justify-center rounded-lg bg-foreground text-background">
            <CheckCircle2 className="size-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight">{siteConfig.name}</span>
        </Link>
 
        {children}
      </div>
    </div>
  );
}
