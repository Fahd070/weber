"use client";

import {
  cloneElement,
  isValidElement,
  useId,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { Stack } from "@/components/layout/stack";
import {
  FEEDBACK_FADE_IN,
  FEEDBACK_FADE_TRANSITION,
} from "@/lib/feedback-motion";
import { Label } from "./label";
import { HelperText } from "./helper-text";
import { ErrorMessage } from "./error-message";

interface ComposableInputProps {
  id?: string;
  required?: boolean;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
}

/**
 * Pairs a Label, an input (Text Field, Text Area, or Select), Helper Text,
 * and Error Message into one consistent, reusable unit — Composition
 * First (DECISIONS.md WD-055) applied to form-building. Owns the
 * consistent arrangement and pairing of its children only; does not own
 * any child's own internal behavior. This is Form Field's central
 * accessibility responsibility: it actively wires `id`/`htmlFor` and
 * `aria-describedby`/`aria-invalid` between the input and its Label/
 * Helper Text/Error Message, rather than leaving correct association to
 * each call site. One pairing pattern regardless of which input it wraps
 * (docs/components/04_INPUTS.md — Form Field).
 */
/**
 * The Error Message/Helper Text slot fades in on mount (Premium Forms
 * Phase 1, Project Owner approved) via the shared `FEEDBACK_FADE_IN`/
 * `FEEDBACK_FADE_TRANSITION` preset (`src/lib/feedback-motion.ts`, also
 * used by Form's own status message) so field-level errors and the
 * whole-form outcome feel like one consistent language. A validation
 * error appearing is a genuinely meaningful moment for the person filling
 * out the form, not "simple hover" territory (DECISIONS.md WD-061
 * reserves CSS for the latter, Motion for the former). `role="alert"` on
 * Error Message still announces it to assistive technology the instant it
 * mounts, unaffected by the visual fade. Skipped entirely under
 * `prefers-reduced-motion`, rendering the plain, already-settled text
 * immediately.
 */
export interface FormFieldProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "id"
> {
  id?: string;
  label: ReactNode;
  required?: boolean;
  helperText?: ReactNode;
  /** When present, shown instead of helperText and marks the input aria-invalid. */
  error?: ReactNode;
  /** The input primitive — Text Field, Text Area, or Select. */
  children: ReactElement<ComposableInputProps>;
}

export function FormField({
  id,
  label,
  required = false,
  helperText,
  error,
  children,
  className,
  ...props
}: FormFieldProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const descriptionId = `${fieldId}-description`;
  const hasDescription = Boolean(error || helperText);
  const shouldReduceMotion = useReducedMotion();

  const input = isValidElement<ComposableInputProps>(children)
    ? cloneElement(children, {
        id: fieldId,
        required,
        "aria-invalid": Boolean(error),
        "aria-describedby": hasDescription ? descriptionId : undefined,
      })
    : children;

  const description = error ? (
    <ErrorMessage id={descriptionId}>{error}</ErrorMessage>
  ) : helperText ? (
    <HelperText id={descriptionId}>{helperText}</HelperText>
  ) : null;

  return (
    <Stack gap={2} className={cn(className)} {...props}>
      <Label htmlFor={fieldId} required={required}>
        {label}
      </Label>
      {input}
      {description && !shouldReduceMotion ? (
        <motion.div
          key={error ? "error" : "helper"}
          initial={FEEDBACK_FADE_IN}
          animate={{ opacity: 1, y: 0 }}
          transition={FEEDBACK_FADE_TRANSITION}
        >
          {description}
        </motion.div>
      ) : (
        description
      )}
    </Stack>
  );
}
