import type { Metadata } from "next";
import { Page } from "@/components/layout/page";
import { ServiceDetailPage } from "@/features/services/service-detail-page";
import { SERVICE_DETAIL_CONTENT } from "@/content/services/service-detail-content";

const content = SERVICE_DETAIL_CONTENT.websites;

export const metadata: Metadata = {
  title: content.name,
  description: content.shortDescription,
  openGraph: {
    title: `${content.name} | Weber`,
    description: content.shortDescription,
    type: "website",
    siteName: "Weber",
  },
};

export default function WebsitesServicePage() {
  return (
    <Page>
      <ServiceDetailPage content={content} />
    </Page>
  );
}
