import type { z } from "zod";
import type { loginSchema } from "./schemas/login-schema";

export type LoginFormData = z.infer<typeof loginSchema>;

export interface LoginActionResult {
  success: boolean;
  message?: string;
  errors?: Partial<Record<keyof LoginFormData, string[]>>;
}
