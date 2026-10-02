import { z } from "zod";
import { registerSchema } from "./schemas/register-schema";

export type RegisterFormData = z.infer<typeof registerSchema>;

export interface RegisterActionResult {
  success: boolean;
  message?: string;
  errors?: Partial<Record<keyof RegisterFormData, string[]>>;
}