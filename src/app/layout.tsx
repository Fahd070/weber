import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionConfig } from "motion/react";
import { AppShell } from "@/components/layout/app-shell";
import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";
import { PrimaryNav } from "@/components/navigation/primary-nav";
import { FooterNav } from "@/components/navigation/footer-nav";
import { FooterContact } from "@/components/navigation/footer-contact";
import { NavigationMotionProvider } from "@/providers/navigation-motion-provider";
import { SITE_URL } from "@/lib/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Weber",
    template: "%s | Weber",
  },
  description:
    "Weber designs and builds premium, professional websites that help businesses present themselves with clarity, credibility, and confidence.",
  openGraph: {
    siteName: "Weber",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // `lang` is a provisional placeholder, not a launch-language decision:
    // Arabic/English launch-language sequencing and locale-aware `lang`/`dir`
    // switching are explicitly PENDING (PROJECT_STRUCTURE.md §6; DECISIONS.md
    // WD-012) until the next-intl routing strategy is approved.
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {/* Primary Navigation is populated with Weber's approved
            destinations, supplied via Primary Nav / Footer Nav, both
            reading from the same nav-items list so Header and Footer stay
            consistent (DECISIONS.md WD-010 — Single Source of Truth).
            Home is reachable via Brand Link in both Header and Footer, so
            it is not duplicated as a separate item. Blog (DECISIONS.md
            WD-039) has no implemented route yet and is intentionally
            excluded. Footer also receives Footer Contact (WhatsApp/Email,
            Footer Enhancement, Project Owner approved). Navigation Motion
            Provider wraps only the per-route content slot, not Header —
            Header already doesn't remount across navigations on its own,
            so it never needed this (Navigation Performance Optimization,
            Project Owner approved).

            Motion Config with reducedMotion="user" (Production Readiness
            Audit, Project Owner approved) fixes a genuine, verified
            accessibility bug: every route is static-prerendered, so the
            server always bakes in each mount-animated element's `initial`
            style (e.g. Hero's own heading renders server-side with
            `opacity:0`, since the server has no way to evaluate a
            visitor's OS-level reduced-motion preference). For a visitor
            with `prefers-reduced-motion: reduce`, each component's own
            `useReducedMotion()` check correctly resolves `true` on the
            client, but only inside a React effect after mount — a state
            update Motion's own animation engine does not reliably win a
            race against, leaving content frozen at its invisible SSR
            `initial` state (verified via computed-style inspection: stuck
            at `opacity:0` indefinitely, not merely delayed). Motion's own
            `reducedMotion="user"` config corrects this at the animation
            engine level during its own mount effect — imperatively
            resolving the element straight to its final `animate` state
            for a reduced-motion visitor, independent of any component's
            own React re-render. This is additive, root-level
            configuration only; no existing component's own
            `useReducedMotion()` branching (Hero, ScrollReveal, Header,
            Button, etc.) was touched — those checks remain correct and
            necessary for their own non-mount interactions (hover/tap
            suppression, `motion-reduce:` CSS variants elsewhere). */}
        <MotionConfig reducedMotion="user">
          <AppShell
            navigation={<Header navItems={<PrimaryNav />} />}
            footer={
              <Footer>
                <FooterNav />
                <FooterContact />
              </Footer>
            }
          >
            <NavigationMotionProvider>{children}</NavigationMotionProvider>
          </AppShell>
        </MotionConfig>
      </body>
    </html>
  );
}
