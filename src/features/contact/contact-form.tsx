"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, type FormStatus } from "@/components/inputs/form";
import { FormField } from "@/components/inputs/form-field";
import { TextField } from "@/components/inputs/text-field";
import { TextArea } from "@/components/inputs/text-area";
import { contactFormSchema, type ContactFormValues } from "./schema";
import { submitContactForm } from "./actions";

/**
 * The Contact page's working submission flow. Composes the shared Form /
 * Form Field / Text Field / Text Area primitives (docs/components/
 * 04_INPUTS.md) with React Hook Form for client-side validation state
 * (DECISIONS.md WD-020 — approved for Contact specifically, alongside
 * Server Actions) and a Zod schema shared with the server (WD-021).
 * Validates on blur, then in real time on a field once it has an error
 * (DECISIONS.md WD-046). Submits via a Server Action (WD-026) rather than
 * an unhandled native browser submission.
 */
export function ContactForm() {
  const [status, setStatus] = useState<FormStatus | undefined>(undefined);
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onValid = (values: ContactFormValues) => {
    setStatus(undefined);
    startTransition(async () => {
      const result = await submitContactForm(values);
      if (result.success) {
        setStatus({
          type: "success",
          message: "Thanks — your message has been sent. We'll be in touch.",
        });
        reset();
      } else {
        setStatus({ type: "error", message: result.error });
      }
    });
  };

  return (
    <Form
      onSubmit={handleSubmit(onValid)}
      submitLabel="Tell us about your business"
      submitting={isPending}
      status={status}
    >
      <FormField label="Name" required error={errors.name?.message}>
        <TextField
          autoComplete="name"
          autoCapitalize="words"
          autoCorrect="off"
          spellCheck={false}
          enterKeyHint="next"
          {...register("name")}
        />
      </FormField>
      <FormField label="Company" required error={errors.company?.message}>
        <TextField
          autoComplete="organization"
          autoCapitalize="words"
          autoCorrect="off"
          spellCheck={false}
          enterKeyHint="next"
          {...register("company")}
        />
      </FormField>
      <FormField label="Email" required error={errors.email?.message}>
        <TextField
          type="email"
          autoComplete="email"
          inputMode="email"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          enterKeyHint="next"
          {...register("email")}
        />
      </FormField>
      <FormField label="Message" required error={errors.message?.message}>
        <TextArea {...register("message")} />
      </FormField>
    </Form>
  );
}
