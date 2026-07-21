import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Page } from "@/components/layout/page";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Stack } from "@/components/layout/stack";
import { Grid } from "@/components/layout/grid";
import { Icon } from "@/components/utilities/icon";
import { WhatsAppIcon } from "@/components/utilities/whatsapp-icon";
import { ContactForm } from "@/features/contact/contact-form";
import { ContactMethodCard } from "@/features/contact/contact-method-card";
import {
  ScrollReveal,
  SCROLL_REVEAL_STAGGER_STEP,
  SEQUENCE_REVEAL_STEP,
} from "@/components/utilities/scroll-reveal";
import { CONTACT_EMAIL_HREF, CONTACT_WHATSAPP_HREF } from "@/lib/site-config";

const CONTACT_DESCRIPTION =
  "Tell Weber about your business and what you're hoping to build — share a few details and we'll follow up to start the conversation.";

export const metadata: Metadata = {
  title: "Contact",
  description: CONTACT_DESCRIPTION,
  openGraph: {
    title: "Contact | Weber",
    description: CONTACT_DESCRIPTION,
    type: "website",
    siteName: "Weber",
  },
};

export default function ContactPage() {
  return (
    <Page>
      <Section>
        <Container size="standard">
          <Stack gap={8}>
            <Stack gap={5}>
              <ScrollReveal>
                <h1 className="text-h1 font-semibold text-foreground">
                  Let&apos;s discuss your project
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={SEQUENCE_REVEAL_STEP}>
                <p className="max-w-reading text-body text-muted-foreground">
                  Share a few details about your business and what you&apos;re
                  hoping to build. We&apos;ll read every message and follow up
                  to start the conversation.
                </p>
              </ScrollReveal>
            </Stack>
            <Grid cols={{ base: 1, lg: 2 }} gap={8} className="items-start">
              <ScrollReveal delay={SEQUENCE_REVEAL_STEP * 2}>
                <ContactForm />
              </ScrollReveal>
              <Stack gap={5}>
                <ContactMethodCard
                  icon={
                    <Icon
                      icon={Mail}
                      className="size-6 text-muted-foreground"
                    />
                  }
                  title="Email"
                  description="Send us an email anytime."
                  buttonLabel="Contact via Email"
                  href={CONTACT_EMAIL_HREF}
                  delay={SEQUENCE_REVEAL_STEP * 2}
                />
                <ContactMethodCard
                  icon={
                    <WhatsAppIcon className="size-6 fill-current text-muted-foreground" />
                  }
                  title="WhatsApp"
                  description="Chat directly with us."
                  buttonLabel="Start WhatsApp Chat"
                  href={CONTACT_WHATSAPP_HREF}
                  external
                  delay={SEQUENCE_REVEAL_STEP * 2 + SCROLL_REVEAL_STAGGER_STEP}
                />
              </Stack>
            </Grid>
          </Stack>
        </Container>
      </Section>
    </Page>
  );
}
