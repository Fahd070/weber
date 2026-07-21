import { z } from "zod";

/**
 * Single source of truth for Contact Form validation (DECISIONS.md
 * WD-021 — Zod, used identically client- and server-side from one
 * schema). Field list and requiredness per DECISIONS.md WD-139 — Name,
 * Company, Email, Message, all required, no optional fields.
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Enter your name.")
    .max(200, "Name is too long."),
  company: z
    .string()
    .trim()
    .min(1, "Enter your company name.")
    .max(200, "Company name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Enter your email address.")
    .email("Enter a valid email address.")
    .max(320, "Email address is too long."),
  message: z
    .string()
    .trim()
    .min(1, "Enter a message.")
    .max(5000, "Message is too long."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
