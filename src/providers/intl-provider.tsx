"use client";

import { NextIntlClientProvider, type AbstractIntlMessages } from "next-intl";
import type { ReactNode } from "react";

/**
 * Foundation-only next-intl provider (DECISIONS.md WD-023, WD-012).
 *
 * Intentionally not wired into `app/layout.tsx` yet: locale and messages
 * are accepted as props rather than resolved here, since the locale-routing
 * scheme and launch-language sequencing between Arabic and English remain
 * `[PENDING PROJECT OWNER DECISION]` (PROJECT_STRUCTURE.md §6). Wiring this
 * in requires that routing decision first.
 */
interface IntlProviderProps {
  locale: string;
  messages: AbstractIntlMessages;
  children: ReactNode;
}

export function IntlProvider({
  locale,
  messages,
  children,
}: IntlProviderProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
