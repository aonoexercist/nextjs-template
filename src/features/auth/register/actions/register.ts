"use server";

import { api } from "@/lib/api";
import { registerSchema } from "../schemas/register-schema";
import type { RegisterActionResult } from "../types";

export async function registerAction(
  _prevState: RegisterActionResult | null,
  formData: FormData,
): Promise<RegisterActionResult[]> {
  const rawData = {
    email: formData.get("email"),
    password: formData.get("password"),
    rememberMe: formData.get("rememberMe") === "on",
  };

  const parsed = registerSchema.safeParse(rawData);
  
  const response = await api("/register", {
    method: "POST",
    body: JSON.stringify(parsed.data),
  });

  return await response.json();
}
