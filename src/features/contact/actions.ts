"use server";

import { contactFormSchema, type ContactFormValues } from "./schema";

export type ContactActionResult =
  { success: true } | { success: false; error: string };

/**
 * Server-side entry point for Contact Form submissions (DECISIONS.md
 * WD-026 — Server Actions; WD-117 — Server Actions colocated with the
 * feature that owns them). Re-validates with the same schema used
 * client-side before doing anything with the data — client-side
 * validation is a UX convenience, never the security boundary
 * (SECURITY_POLICY.md §3 — input validation; PROJECT_CONSTITUTION.md
 * Part 5 — Validation: "never trust user input"). Never returns raw
 * internal error detail to the caller (SECURITY_POLICY.md §3 — error
 * handling).
 */
export async function submitContactForm(
  values: ContactFormValues,
): Promise<ContactActionResult> {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      error: "Something went wrong. Please check the form and try again.",
    };
  }

  try {
    await recordContactSubmission();
    return { success: true };
  } catch {
    return {
      success: false,
      error:
        "Something went wrong and your message wasn't sent. Please try again.",
    };
  }
}

/**
 * Captures a validated submission. No lead-storage destination (database,
 * email, or CRM) is currently approved or provisioned anywhere in the
 * project: DECISIONS.md WD-024/WD-025 approve PostgreSQL/Prisma as
 * Weber's database stack in principle, but no schema, client, or
 * connection exists yet, and hosting for it is explicitly still-pending
 * (WD-024's own text); no email or CRM service is approved at all.
 * Wiring either up here would mean inventing infrastructure this task
 * explicitly prohibits. This function is the single, isolated seam where
 * real persistence gets wired in once that destination is decided — until
 * then it records only that a submission occurred, never the submitted
 * values themselves, per SECURITY_POLICY.md §3's own rule against logging
 * user-submitted personal information.
 */
async function recordContactSubmission(): Promise<void> {
  console.log("[contact] submission received");
}
