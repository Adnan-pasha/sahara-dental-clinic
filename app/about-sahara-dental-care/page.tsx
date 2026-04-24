import { StandardPageView } from "@/components/page-templates";
import { JsonLd } from "@/components/json-ld";
import { aboutPage } from "@/lib/content";
import { buildMetadata, buildPersonSchema } from "@/lib/seo";

export const metadata = buildMetadata(aboutPage.seo);

export default function AboutPage() {
  return (
    <>
      <JsonLd data={buildPersonSchema()} />
      <StandardPageView
        title={aboutPage.seo.h1}
        intro="Learn about the clinic, the doctor, the treatment philosophy, and the local service areas supported by Sahara Dental Care."
        sections={aboutPage.sections}
        sectionColumns={2}
      />
    </>
  );
}
