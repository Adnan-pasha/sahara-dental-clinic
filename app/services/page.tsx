import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { serviceCards, servicesHubIntro } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Dental Treatments in Doddaballapur | Sahara Dental Care",
  description: "Explore braces, clear aligners, dental implants, root canal treatment, pediatric dentistry, TMJ care, and cosmetic dentistry at Sahara Dental Care.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Dental Treatments in Doddaballapur",
          url: "https://saharadentalcare.in/services"
        }}
      />
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Dental treatments in Doddaballapur</p>
          <h1>Dental Treatments We Offer in Doddaballapur</h1>
          <p className="lead">
            Explore our specialized treatments ranging from expert orthodontics and dental implants 
            to gentle pediatric dentistry and advanced root canal therapy.
          </p>
        </div>
      </section>
      <main className="container section">
        {servicesHubIntro.map((section) => (
          <section className="content-section" key={section.title}>
            <h2>{section.title}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
        <div className="card-grid">
          {serviceCards.map((service) => (
            <article className="card" key={service.href}>
              <div className="card-body">
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <Link href={service.href} className="card-link">
                  Read More <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
