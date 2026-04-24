import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { faqPage } from "@/lib/content";
import { buildFaqSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(faqPage.seo);

export default function FaqPage() {
  const allFaqs = faqPage.groups.flatMap((group) => group.faqs);

  return (
    <>
      <JsonLd data={buildFaqSchema(allFaqs)} />
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Dental questions</p>
          <h1>{faqPage.seo.h1}</h1>
          <p className="lead">
            Short, direct answers about appointments, braces, aligners, implants,
            root canal treatment, children’s dental care, jaw pain, pricing, and
            clinic visits.
          </p>
        </div>
      </section>
      <main className="container narrow section">
        {faqPage.groups.map((group) => (
          <section className="content-section" key={group.title}>
            <h2>{group.title}</h2>
            <FaqList items={group.faqs} />
          </section>
        ))}
      </main>
    </>
  );
}
