import Image from "next/image";
import Link from "next/link";

import { FaqList } from "@/components/faq-list";
import {
  CalendarIcon,
  CreditCardIcon,
  HeartIcon,
  PercentIcon,
  ShieldIcon,
  SmileIcon,
  StarIcon,
  TagIcon,
  WhatsAppIcon,
} from "@/components/icons";
import type {
  BlogPostContent,
  ServiceCard,
  ServicePageContent,
  Testimonial
} from "@/lib/content";
import type { LinkItem, SectionBlock } from "@/lib/site";
import { siteConfig } from "@/lib/site";

function LinkList({ links }: { links: LinkItem[] }) {
  return (
    <div className="link-cloud">
      {links.map((link) => (
        <Link key={link.href + link.label} href={link.href} className="chip">
          <span>{link.label}</span>
          <span className="chip-arrow">→</span>
        </Link>
      ))}
    </div>
  );
}

function SectionList({ sections, columns = 1 }: { sections: SectionBlock[]; columns?: 1 | 2 }) {
  return (
    <div className={columns === 2 ? "section-grid-2" : "section-stack"}>
      {sections.map((section) => (
        <section className="content-section section-panel" key={section.title}>
          <div className="section-kicker">Patient Excellence</div>
          <h2>{section.title}</h2>
          {section.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.bullets ? (
            <ul className="bullet-list">
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </div>
  );
}

export function HomepageView({
  title,
  facts,
  testimonials,
  services,
  serviceCategoryCopy
}: {
  title: string;
  facts: string[];
  testimonials: Testimonial[];
  services: ServiceCard[];
  serviceCategoryCopy: SectionBlock[];
}) {
  return (
    <>
      <section className="hero">
        <div className="hero-dot-pattern" aria-hidden="true"></div>
        <div className="container">
          <div className="hero-main">
            <p className="eyebrow">Dental clinic in Doddaballapur</p>
            <h1>
              Trusted Dental Clinic <br />
              in <span className="highlight">Doddaballapur</span>
              <div className="h1-underline" aria-hidden="true"></div>
            </h1>
            <p className="lead">
              Comprehensive dental care for braces, aligners, implants, and smile makeovers in Doddaballapur.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="button button-hero-primary">
                Book Appointment <span className="arrow" aria-hidden="true">→</span>
              </Link>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="button button-hero-secondary"
              >
                <span className="whatsapp-icon"><WhatsAppIcon size={18} /></span>
                WhatsApp Us
              </a>
            </div>
            <div className="hero-trust-bar">
              <div className="trust-point"><ShieldIcon size={14} /> Experienced Care</div>
              <div className="trust-point"><TagIcon size={14} /> Transparent Pricing</div>
              <div className="trust-point"><CreditCardIcon size={14} /> Interest-Free EMI</div>
              <div className="trust-point"><CalendarIcon size={14} /> Same-Day Appointments</div>
              <div className="trust-point"><HeartIcon size={14} /> Pain-Conscious Care</div>
            </div>
          </div>
        </div>

        <div className="hero-stats-pill">
          <div className="stat-unit">
            <div className="stat-icon"><SmileIcon size={22} /></div>
            <div className="stat-text">
              <strong>500+</strong>
              <span>Smiles Transformed</span>
            </div>
          </div>
          <div className="stat-divider" aria-hidden="true"></div>
          <div className="stat-unit">
            <div className="stat-icon"><StarIcon size={22} /></div>
            <div className="stat-text">
              <strong>5.0★</strong>
              <span>Google Rating</span>
            </div>
          </div>
          <div className="stat-divider" aria-hidden="true"></div>
          <div className="stat-unit">
            <div className="stat-icon"><PercentIcon size={22} /></div>
            <div className="stat-text">
              <strong>0%</strong>
              <span>Interest on EMI</span>
            </div>
          </div>
          <div className="stat-divider" aria-hidden="true"></div>
          <div className="stat-unit">
            <div className="stat-icon"><CalendarIcon size={22} /></div>
            <div className="stat-text">
              <strong>Same Day</strong>
              <span>Appointments</span>
            </div>
          </div>
        </div>
      </section>

      <section className="highlights-section section">
        <div className="container highlights-grid">
          <div className="clinic-facts-panel">
            <div className="clinic-facts-badge">Clinic at a Glance</div>
            <h2>Clinical Excellence in {siteConfig.city}</h2>
            <ul className="fact-list">
              {facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
            <div className="fact-stats">
              <div>
                <strong>Expertise</strong>
                <span>Orthodontics Specialist</span>
              </div>
              <div>
                <strong>Convenience</strong>
                <span>Central Doddaballapur</span>
              </div>
            </div>
          </div>
          <div className="highlights-copy">
            <div className="hero-mini-card">
              <h3>Specialist Orthodontics</h3>
              <p>Dr. Nazir Hussain provides expert care for braces, aligners, and bite correction.</p>
            </div>
            <div className="hero-mini-card">
              <h3>Modern Dental Care</h3>
              <p>Advanced dental implants, root canal treatments, and pediatric care in the heart of Doddaballapur.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section-heading">
          <p className="eyebrow">Dental Treatments We Offer in Doddaballapur</p>
          <h2>Find the right specialist dental service.</h2>
        </div>
        <div className="card-grid">
          {services.map((service, index) => (
            <article className="card" key={service.href}>
              {service.image ? (
                <div className="card-image">
                  <Image
                    src={service.image}
                    alt={service.imageAlt ?? service.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </div>
              ) : null}
              <div className="card-body">
                <div className="card-meta-row">
                  <span className="card-index">0{index + 1}</span>
                  <span className="card-tag">Service</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <Link href={service.href} className="card-link">
                  Read More <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container section">
          <h2>Trust, care, and quality for your family's smiles.</h2>
        <SectionList sections={serviceCategoryCopy} />
      </section>

      <section className="container section">
        <div className="section-heading">
          <p className="eyebrow">Meet Dr. Nazir Hussain</p>
          <h2>Specialist-led care with clear communication.</h2>
        </div>
        <div className="doctor-feature">
          <div className="doctor-copy">
            <p>
              Dr. Nazir Hussain leads our clinical team with a focus on patient comfort, 
              precision planning, and long-term results. We believe in explaining oral 
              health findings clearly so you can make informed decisions about your treatment.
            </p>
            <div className="doctor-points">
              <span>Braces and aligners planning</span>
              <span>Implants and restorative guidance</span>
              <span>Pain-conscious local care</span>
            </div>
            <Link href="/about-sahara-dental-care" className="button button-primary">
              Learn More About the Clinic
            </Link>
          </div>
          <div className="doctor-side-card">
            <div className="doctor-stat">
              <strong>MDS Specialist</strong>
              <span>Orthodontics & Implants</span>
            </div>
            <div className="doctor-stat">
              <strong>9:00 AM - 8:00 PM</strong>
              <span>Monday to Saturday</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section-heading">
          <p className="eyebrow">Real Patient Reviews</p>
          <h2>Local trust matters before treatment begins.</h2>
        </div>
        <div className="card-grid testimonials">
          {testimonials.map((review) => (
            <article className="card" key={review.name + review.treatment}>
              <div className="card-body">
                <div className="stars">★★★★★</div>
                <p className="quote">"{review.quote}"</p>
                <h3>{review.name}</h3>
                <p>{review.treatment}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export function ServicePageView({ page }: { page: ServicePageContent }) {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">{page.seo.primaryKeyword}</p>
          <h1>{page.seo.h1}</h1>
          {page.intro.map((paragraph) => (
            <p className="lead" key={paragraph}>
              {paragraph}
            </p>
          ))}
          <div className="button-row">
            <Link href="/contact" className="button button-primary">
              Book Consultation
            </Link>
            <a className="button button-secondary" href={siteConfig.phoneHref}>
              Call Now
            </a>
          </div>
          <div className="hero-inline-pills">
            <span>Specialist Consultation</span>
            <span>Local Doddaballapur Care</span>
            <span>Interest-Free EMI</span>
          </div>
        </div>
      </section>
      <main className="container narrow section">
        <div className="section-stack">
          {page.sections.map((section) => (
            <section className="content-section section-panel" key={section.title}>
              <div className="section-kicker">Patient Excellence</div>
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets ? (
                <ul className="bullet-list">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
          <section className="content-section section-panel">
            <h2>FAQs About {page.seo.h1.replace(" in Doddaballapur", "")}</h2>
            <FaqList items={page.faqs} />
          </section>
          <section className="content-section section-panel">
            <h2>Related pages</h2>
            <LinkList links={page.relatedLinks} />
          </section>
        </div>
      </main>
    </>
  );
}


export function StandardPageView({
  title,
  intro,
  sections,
  sectionColumns = 1,
}: {
  title: string;
  intro?: string;
  sections: SectionBlock[];
  sectionColumns?: 1 | 2;
}) {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Sahara Dental Care</p>
          <h1>{title}</h1>
          {intro ? <p className="lead">{intro}</p> : null}
        </div>
      </section>
      <main className={`container section ${sectionColumns === 2 ? "" : "narrow"}`}>
        <SectionList sections={sections} columns={sectionColumns} />
      </main>
    </>
  );
}

export function BlogPageView({ post }: { post: BlogPostContent }) {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Dental blog</p>
          <h1>{post.seo.h1}</h1>
          {post.intro.map((paragraph) => (
            <p className="lead" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>
      <main className="container section">
        <SectionList sections={post.sections.slice(0, 2)} columns={2} />
        <SectionList sections={post.sections.slice(2)} columns={1} />
        <div className="section-grid-2" style={{ marginTop: "2rem" }}>
          <section className="content-section section-panel">
            <h2>{post.ctaTitle}</h2>
            <p>{post.ctaText}</p>
            <Link className="button button-primary" href="/contact">
              Book an Appointment
            </Link>
          </section>
          <section className="content-section section-panel">
            <h2>Related links</h2>
            <LinkList links={post.relatedLinks} />
          </section>
        </div>
      </main>
    </>
  );
}
