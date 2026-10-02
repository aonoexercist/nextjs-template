"use server";

import { api } from "@/lib/api";
import { loginSchema } from "../schemas/login-schema";
import type { LoginActionResult } from "../types";

export async function loginAction(
  _prevState: LoginActionResult | null,
  formData: FormData,
): Promise<LoginActionResult[]> {
  const rawData = {
    email: formData.get("email"),
    password: formData.get("password"),
    rememberMe: formData.get("rememberMe") === "on",
  };

  const parsed = loginSchema.safeParse(rawData);
  
  const response = await api("/login", {
    method: "POST",
    body: JSON.stringify(parsed.data),
  });

  return await response.json();
}
