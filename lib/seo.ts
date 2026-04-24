import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function absoluteUrl(path = "/") {
  return path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;
}

export function buildMetadata({ title, description, path }: MetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: absoluteUrl("/og-image.png"),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} in ${siteConfig.city}`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/og-image.png")]
    }
  };
}

export function buildDentistSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone.replace(/\s/g, ""),
    image: absoluteUrl("/logo.png"),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addressLine1,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.country
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.latitude,
      longitude: siteConfig.longitude
    },
    openingHoursSpecification: siteConfig.openingHoursSchema,
    areaServed: siteConfig.areasServed,
    medicalSpecialty: [
      "Dentistry",
      "Orthodontics",
      "Implantology",
      "Cosmetic Dentistry",
      "Pediatric Dentistry"
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.reviewSummary.ratingValue,
      reviewCount: siteConfig.reviewSummary.reviewCount,
      bestRating: "5"
    }
  };
}

export function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.doctorName,
    jobTitle: siteConfig.doctorTitle,
    worksFor: {
      "@type": "Dentist",
      name: siteConfig.name
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: siteConfig.doctorCredentials
    }
  };
}

export function buildServiceSchema(name: string, serviceType: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    provider: {
      "@type": "Dentist",
      name: siteConfig.name
    },
    areaServed: {
      "@type": "City",
      name: siteConfig.city
    },
    url: absoluteUrl(path)
  };
}

export function buildFaqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
