"use client";

import {
  useEffect,
  useRef,
  type FormEvent,
  type FormHTMLAttributes,
  type ReactNode,
} from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { Stack } from "@/components/layout/stack";
import { Button } from "@/components/inputs/button";
import { LiveRegionAnnouncer } from "@/components/utilities/live-region-announcer";
import {
  FEEDBACK_FADE_IN,
  FEEDBACK_FADE_TRANSITION,
} from "@/lib/feedback-motion";

export interface FormStatus {
  type: "success" | "error";
  message: string;
}

/**
 * The architectural container for a complete input flow — validation,
 * submission, and field composition — used by both the Interactive
 * Showcase's input step and Contact. Owns overall submission state and
 * validation orchestration across its Form Field children; does not own
 * any individual field's own value or presentation. Composes one or more
 * Form Field instances (supplied as children) via Stack, plus a Button
 * for submission. The submission mechanism itself (Server Action vs.
 * client handler) is deliberately not fixed here — CODING_STANDARDS.md
 * leaves that a per-use choice — so both `action` and `onSubmit` are
 * accepted generically. Announces submission success/failure via Live
 * Region Announcer and moves focus to the outcome message, per this
 * component's documented accessibility requirement (DECISIONS.md WD-050,
 * WD-060). The outcome message fades in on mount (Premium Forms Phase 1,
 * Project Owner approved) via the same shared FEEDBACK_FADE_IN /
 * FEEDBACK_FADE_TRANSITION preset Form Field's own error/helper slot
 * uses (src/lib/feedback-motion.ts) — one consistent "feedback appearing"
 * language across field-level and whole-form outcomes. Skipped under
 * prefers-reduced-motion; the focus-move and Live Region Announcer
 * announcement are both unaffected either way. docs/components/
 * 04_INPUTS.md — Form.
 */
export interface FormProps extends Omit<
  FormHTMLAttributes<HTMLFormElement>,
  "onSubmit" | "action"
> {
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  action?: string | ((formData: FormData) => void | Promise<void>);
  submitLabel: ReactNode;
  /** Submitting state (Loading-adjacent, DECISIONS.md WD-044) — passed through to Button. */
  submitting?: boolean;
  /** Whole-form outcome, distinct from any single field's own Error state. */
  status?: FormStatus;
  /** Form Field instances. */
  children: ReactNode;
}

export function Form({
  onSubmit,
  action,
  submitLabel,
  submitting = false,
  status,
  children,
  className,
  ...props
}: FormProps) {
  const statusRef = useRef<HTMLParagraphElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (status) {
      statusRef.current?.focus();
    }
  }, [status]);

  return (
    <form
      onSubmit={onSubmit}
      action={action}
      noValidate
      className={cn(className)}
      {...props}
    >
      <Stack gap={5}>
        {children}
        <Button type="submit" loading={submitting}>
          {submitLabel}
        </Button>
        {status ? (
          shouldReduceMotion ? (
            <p
              ref={statusRef}
              tabIndex={-1}
              className={cn(
                "text-body",
                status.type === "success" ? "text-success" : "text-danger",
              )}
            >
              {status.message}
            </p>
          ) : (
            <motion.p
              key={status.type}
              ref={statusRef}
              tabIndex={-1}
              initial={FEEDBACK_FADE_IN}
              animate={{ opacity: 1, y: 0 }}
              transition={FEEDBACK_FADE_TRANSITION}
              className={cn(
                "text-body",
                status.type === "success" ? "text-success" : "text-danger",
              )}
            >
              {status.message}
            </motion.p>
          )
        ) : null}
      </Stack>
      {status ? (
        <LiveRegionAnnouncer
          message={status.message}
          priority={status.type === "error" ? "assertive" : "polite"}
        />
      ) : null}
    </form>
  );
}
