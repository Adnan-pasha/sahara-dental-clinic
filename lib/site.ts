export type LinkItem = {
  href: string;
  label: string;
  description?: string;
};

export type SectionBlock = {
  title: string;
  body: string[];
  bullets?: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
};

export const siteConfig = {
  name: "Sahara Dental Care",
  legalName: "Sahara Dental Care",
  url: "https://saharadentalcare.in",
  phone: "+91 63621 12257",
  phoneHref: "tel:+916362112257",
  whatsappHref: "https://wa.me/916362112257",
  appointmentHref: "/contact",
  addressLine1: "1st Floor, Tanavi Complex, Railway Sta Rd",
  addressLine2: "beside JK Tyre Shop, Doddaballapura, Karnataka 561203",
  city: "Doddaballapur",
  region: "Karnataka",
  postalCode: "561203",
  country: "IN",
  latitude: "13.2956",
  longitude: "77.5374",
  doctorName: "Dr. Nazir Hussain",
  doctorCredentials: "BDS, MDS (Orthodontics)",
  doctorTitle: "Orthodontist and Implant Specialist",
  areasServed: [
    "Doddaballapur",
    "Devanahalli",
    "Yelahanka",
    "Rajanukunte",
    "Gowribidanur",
    "North Bangalore"
  ],
  hours: [
    { days: "Monday - Saturday", hours: "9:00 AM - 8:00 PM" },
    { days: "Sunday", hours: "10:00 AM - 2:00 PM" }
  ],
  openingHoursSchema: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      opens: "09:00",
      closes: "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "10:00",
      closes: "14:00"
    }
  ],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.3!2d77.5374!3d13.2956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSahara+Dental+Care%2C+Doddaballapur!5e0!3m2!1sen!2sin!4v1",
  mapsUrl: "https://maps.app.goo.gl/Yh2G7T77Nz3mBebd7",
  reviewSummary: {
    ratingValue: "5.0",
    reviewCount: "26"
  },
  trustPoints: [
    "Experienced care",
    "Transparent pricing",
    "Interest-Free EMI",
    "Same-day appointments",
    "Pain-conscious care"
  ]
};

export const primaryNav: LinkItem[] = [
  { href: "/", label: "Home" },
  { href: "/about-sahara-dental-care", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" }
];

export const footerLinks: LinkItem[] = [
  { href: "/", label: "Dental clinic in Doddaballapur" },
  { href: "/services", label: "Dental treatments in Doddaballapur" },
  { href: "/braces-treatment-doddaballapur", label: "Braces treatment" },
  {
    href: "/clear-aligners-invisalign-doddaballapur",
    label: "Clear aligners and Invisalign"
  },
  { href: "/dental-implants-doddaballapur", label: "Dental implants" },
  { href: "/root-canal-treatment-doddaballapur", label: "Root canal treatment" }
];
