import Image from "next/image";
import Link from "next/link";

import { LocationIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { MobileNav, NavLinks } from "@/components/nav-links";
import { footerLinks, primaryNav, siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-content">
          <div className="topbar-item">
            <PhoneIcon size={14} />
            <a href={siteConfig.phoneHref}>Call Now</a>
          </div>
          <span className="separator" aria-hidden="true">|</span>
          <div className="topbar-item">
            <WhatsAppIcon size={14} />
            <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
          <span className="separator" aria-hidden="true">|</span>
          <div className="topbar-item">
            <LocationIcon size={14} />
            <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">
              Location
            </a>
          </div>
        </div>
      </div>
      <div className="container nav">
        <Link href="/" className="brand">
          <div className="logo-full-container">
            <Image
              src="/images/logo-full.png"
              alt="Sahara Dental Care — Braces & Implant Centre"
              fill
              sizes="280px"
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
        </Link>
        <NavLinks />
        <Link href="/contact" className="button-header-cta">
          Book Appointment <span className="arrow" aria-hidden="true">→</span>
        </Link>
        <MobileNav />
      </div>
    </header>
  );
}

export function CtaStrip() {
  return (
    <section className="cta-strip">
      <div className="container cta-strip-inner">
        <div className="cta-copy">
          <p className="eyebrow">Ready to talk with the clinic?</p>
          <h2>Call, WhatsApp, or book your appointment online.</h2>
          <p>
            Fast local support for braces, aligners, implants, root canal treatment,
            kids dental care, TMJ concerns, and smile planning.
          </p>
        </div>
        <div className="button-row">
          <a className="button button-primary" href={siteConfig.phoneHref}>
            Call Now
          </a>
          <a
            className="button button-secondary"
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Us
          </a>
          <Link className="button button-secondary" href="/contact">
            Book Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand-block">
          <p className="eyebrow">Sahara Dental Care</p>
          <h3>{siteConfig.name}</h3>
          <p>
            {siteConfig.addressLine1}
            <br />
            {siteConfig.addressLine2}
          </p>
          <p>{siteConfig.phone}</p>
          <div className="footer-trust-pills">
            {siteConfig.trustPoints.slice(0, 4).map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
        </div>
        <div>
          <h3>Hours</h3>
          {siteConfig.hours.map((slot) => (
            <p key={slot.days}>
              {slot.days}: {slot.hours}
            </p>
          ))}
        </div>
        <div>
          <h3>Popular Pages</h3>
          <ul className="footer-links">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          {siteConfig.name} &bull; {siteConfig.city} &bull; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
