"use client";

import { Loader2 } from "lucide-react";
import { useState, useTransition } from "react";
import type { RegisterActionResult } from "../types";
import { registerAction } from "../actions/register";

const RegisterForm = () => {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<RegisterActionResult | null>(null);
  
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    startTransition(async () => {
      await registerAction(result, formData);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1.5">
        <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 block w-full rounded-md border border-border bg-card p-2 text-sm text-foreground shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 block w-full rounded-md border border-border bg-card p-2 text-sm text-foreground shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="password" className="block text-sm font-medium text-muted-foreground">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="mt-1 block w-full rounded-md border border-border bg-card p-2 text-sm text-foreground shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-background shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        {isPending ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Signing up...
            </>
          ) : (
            "Sign Up"
          )}
      </button>
    </form>
  );
};

export default RegisterForm;