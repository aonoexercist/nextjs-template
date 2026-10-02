import { FileQuestion } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="bg-muted flex size-14 items-center justify-center rounded-full">
        <FileQuestion className="text-muted-foreground size-7" />
      </div>
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm font-medium">404</p>
        <h1 className="text-3xl font-semibold tracking-tight">
          Page not found
        </h1>
        <p className="text-muted-foreground max-w-md text-sm">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
      <Button render={<Link href="/" />} nativeButton={false}>
        Back to home
      </Button>
    </main>
  );
}
