"use client";

import { TriangleAlert } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Send to your error reporting service here (Sentry, etc.)
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="bg-destructive/10 flex size-14 items-center justify-center rounded-full">
        <TriangleAlert className="text-destructive size-7" />
      </div>
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          Something went wrong
        </h1>
        <p className="text-muted-foreground max-w-md text-sm">
          An unexpected error occurred. You can try again, or head back home.
        </p>
        {error.digest && (
          <p className="text-muted-foreground font-mono text-xs">
            Error ID: {error.digest}
          </p>
        )}
      </div>
      <div className="flex gap-3">
        <Button onClick={() => reset()}>Try again</Button>
        <Button
          variant="outline"
          render={<Link href="/" />}
          nativeButton={false}
        >
          Go home
        </Button>
      </div>
    </main>
  );
}
