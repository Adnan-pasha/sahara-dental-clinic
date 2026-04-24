import { AppointmentForm } from "@/components/appointment-form";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { contactPage } from "@/lib/content";
import { buildDentistSchema, buildFaqSchema, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata(contactPage.seo);

export default function ContactPage() {
  return (
    <>
      <JsonLd data={buildDentistSchema()} />
      <JsonLd data={buildFaqSchema(contactPage.appointmentFaqs)} />
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Book a dental appointment</p>
          <h1>{contactPage.seo.h1}</h1>
          <p className="lead">
            Contact Sahara Dental Care for appointments, timings, directions, and
            WhatsApp support from Doddaballapur and nearby North Bangalore areas.
          </p>
        </div>
      </section>
      <main className="container narrow section">
        <section className="content-section">
          <h2>Book an Appointment</h2>
          <p>
            Use the form below to send your appointment request directly to the
            clinic on WhatsApp. This keeps booking simple while giving the team the
            details they need to confirm the right slot.
          </p>
          <AppointmentForm />
        </section>
        <section className="content-section">
          <h2>Visit Sahara Dental Care in Doddaballapur</h2>
          <p>
            {siteConfig.addressLine1}
            <br />
            {siteConfig.addressLine2}
          </p>
          <p>Phone: {siteConfig.phone}</p>
          {siteConfig.hours.map((slot) => (
            <p key={slot.days}>
              {slot.days}: {slot.hours}
            </p>
          ))}
        </section>
        <section className="content-section">
          <h2>How to Reach the Clinic</h2>
          <p>
            We are conveniently located on the 1st Floor of the Tanavi Complex, 
            directly beside the JK Tyre Shop on Railway Station Road.
          </p>
          <iframe
            src={siteConfig.mapEmbedUrl}
            width="100%"
            height="320"
            style={{ border: 0, borderRadius: 20 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sahara Dental Care location map"
          />
        </section>
        <section className="content-section">
          <h2>WhatsApp and Phone Support</h2>
          <p>
            Use WhatsApp for quick appointment requests or call the clinic directly
            if you need to confirm timings or discuss your dental concern.
          </p>
          <div className="button-row">
            <a className="button button-primary" href={siteConfig.phoneHref}>
              Call {siteConfig.phone}
            </a>
            <a
              className="button button-secondary"
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              Open WhatsApp
            </a>
          </div>
        </section>
        <section className="content-section">
          <h2>Common Appointment Questions</h2>
          <FaqList items={contactPage.appointmentFaqs} />
        </section>
      </main>
    </>
  );
}
