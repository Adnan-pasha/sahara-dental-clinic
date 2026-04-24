import { HomepageView } from "@/components/page-templates";
import { JsonLd } from "@/components/json-ld";
import { homepageFacts, homepageSeo, serviceCards, servicesHubIntro, testimonials } from "@/lib/content";
import { buildDentistSchema, buildFaqSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(homepageSeo);

const homepageFaqs = [
  { question: "Who leads treatment at Sahara Dental Care?", answer: "Dr. Nazir Hussain leads treatment planning and patient care at Sahara Dental Care in Doddaballapur." },
  { question: "Which treatments are available at the clinic?", answer: "The clinic provides braces, clear aligners, dental implants, root canal treatment, pediatric dentistry, TMJ care, and smile makeover planning." },
  { question: "Do you serve patients from areas around Doddaballapur?", answer: "Yes. Patients from across North Bangalore, including Devanahalli, Yelahanka, Rajanukunte, and Gowribidanur, regularly visit Sahara Dental Care for specialist treatment." }
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildDentistSchema()} />
      <JsonLd data={buildFaqSchema(homepageFaqs)} />
      <HomepageView
        title={homepageSeo.h1}
        facts={homepageFacts}
        testimonials={testimonials}
        services={serviceCards}
        serviceCategoryCopy={servicesHubIntro}
      />
    </>
  );
}
