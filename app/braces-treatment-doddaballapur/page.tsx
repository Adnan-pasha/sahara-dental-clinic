import { JsonLd } from "@/components/json-ld";
import { ServicePageView } from "@/components/page-templates";
import { servicePages } from "@/lib/content";
import { buildFaqSchema, buildMetadata, buildServiceSchema } from "@/lib/seo";

const page = servicePages.braces;
export const metadata = buildMetadata(page.seo);

export default function BracesPage() {
  return (
    <>
      <JsonLd data={buildServiceSchema(page.seo.h1, page.serviceType, page.seo.path)} />
      <JsonLd data={buildFaqSchema(page.faqs)} />
      <ServicePageView page={page} />
    </>
  );
}
