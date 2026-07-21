import { Mail } from "lucide-react";
import { Cluster } from "@/components/layout/cluster";
import { Icon } from "@/components/utilities/icon";
import { WhatsAppIcon } from "@/components/utilities/whatsapp-icon";
import { CONTACT_EMAIL_HREF, CONTACT_WHATSAPP_HREF } from "@/lib/site-config";
import { FooterContactLink } from "./footer-contact-link";

/**
 * The Footer's two direct contact methods — WhatsApp and Email (Footer
 * Enhancement, Design Evolution, Project Owner approved), matching the
 * same three-channel model already documented in
 * INFORMATION_ARCHITECTURE.md §10 and already implemented on the Contact
 * page. Composed of two `FooterContactLink` instances rather than
 * duplicating that link/motion/accessibility logic twice inline.
 */
export function FooterContact() {
  return (
    <Cluster gap={3} className="justify-center">
      <FooterContactLink
        href={CONTACT_WHATSAPP_HREF}
        icon={<WhatsAppIcon className="size-5 fill-current" />}
        label="WhatsApp"
        external
      />
      <FooterContactLink
        href={CONTACT_EMAIL_HREF}
        icon={<Icon icon={Mail} className="size-5" />}
        label="Email"
      />
    </Cluster>
  );
}
