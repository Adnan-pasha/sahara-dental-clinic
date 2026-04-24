import type { FaqItem, LinkItem, PageSeo, SectionBlock } from "@/lib/site";

export type Testimonial = { name: string; treatment: string; quote: string };
export type ServiceCard = { href: string; title: string; summary: string; image?: string; imageAlt?: string };
export type ServicePageContent = {
  seo: PageSeo;
  serviceType: string;
  intro: string[];
  sections: SectionBlock[];
  faqs: FaqItem[];
  relatedLinks: LinkItem[];
};
export type BlogPostContent = {
  seo: PageSeo;
  intro: string[];
  sections: SectionBlock[];
  ctaTitle: string;
  ctaText: string;
  relatedLinks: LinkItem[];
};

const makeService = (
  seo: PageSeo,
  serviceType: string,
  intro: string[],
  sections: SectionBlock[],
  faqs: FaqItem[],
  relatedLinks: LinkItem[]
): ServicePageContent => ({ seo, serviceType, intro, sections, faqs, relatedLinks });

export const routeStructure = {
  app: [
    "/",
    "/about-sahara-dental-care",
    "/services",
    "/braces-treatment-doddaballapur",
    "/clear-aligners-invisalign-doddaballapur",
    "/dental-implants-doddaballapur",
    "/root-canal-treatment-doddaballapur",
    "/kids-dentist-pediatric-dentistry-doddaballapur",
    "/tmj-jaw-pain-treatment-doddaballapur",
    "/smile-makeover-cosmetic-dentistry-doddaballapur",
    "/faq",
    "/contact",
    "/blog",
    "/blog/braces-cost-in-doddaballapur",
    "/blog/how-long-does-root-canal-treatment-take",
    "/blog/clear-aligners-vs-braces",
    "/blog/when-do-you-need-dental-implants",
    "/blog/how-to-choose-a-dentist-in-doddaballapur"
  ],
  components: [
    "site-chrome.tsx",
    "page-templates.tsx",
    "faq-list.tsx",
    "json-ld.tsx"
  ],
  lib: ["site.ts", "seo.ts", "content.ts"]
} as const;

export const homepageSeo: PageSeo = {
  title: "Best Dental Clinic in Doddaballapur | Sahara Dental Care",
  description:
    "Visit Sahara Dental Care in Doddaballapur for professional dental care, including braces, implants, and restorative treatments. Book your appointment today.",
  path: "/",
  h1: "Trusted Dental Clinic in Doddaballapur",
  primaryKeyword: "dental clinic in Doddaballapur",
  secondaryKeywords: ["orthodontist in Doddaballapur", "dentist near Doddaballapur"]
};

export const homepageFacts = [
  "Sahara Dental Care is a comprehensive dental clinic in Doddaballapur.",
  "The clinic provides orthodontic, restorative, pediatric, and cosmetic dental services.",
  "Dr. Nazir Hussain leads treatment planning and patient care.",
  "Patients from Doddaballapur and surrounding areas trust us for professional dental health management."
];

export const testimonials: Testimonial[] = [
  {
    name: "Azmath Khan",
    treatment: "Braces treatment",
    quote: "The braces process was professional and well-managed from the initial consultation to final results."
  },
  {
    name: "Tabassum Sultana",
    treatment: "Root canal treatment",
    quote: "The treatment was performed with great care and was much more comfortable than I anticipated."
  },
  {
    name: "Bandi Laxminarayana",
    treatment: "General dentistry",
    quote: "The clinic maintains high standards of hygiene and provides honest, patient-centered advice."
  }
];

export const serviceCards: ServiceCard[] = [
  {
    href: "/braces-treatment-doddaballapur",
    title: "Braces Treatment",
    summary: "Comprehensive orthodontic solutions for teens and adults.",
    image: "/images/braces-before-after.jpg",
    imageAlt: "Professional orthodontic treatment at Sahara Dental Care"
  },
  {
    href: "/clear-aligners-invisalign-doddaballapur",
    title: "Clear Aligners",
    summary: "Discreet, removable solutions for effective teeth straightening.",
    image: "/images/aligners-before-after.jpg",
    imageAlt: "Clear aligner treatment in Doddaballapur"
  },
  {
    href: "/dental-implants-doddaballapur",
    title: "Dental Implants",
    summary: "Advanced tooth replacement for restored function and aesthetics.",
    image: "/images/dental-implants.png",
    imageAlt: "Professional dental implant restoration results at Sahara Dental Care"
  },
  { 
    href: "/root-canal-treatment-doddaballapur", 
    title: "Root Canal Treatment", 
    summary: "Specialized care to save infected or damaged teeth.",
    image: "/images/root-canal.png"
  },
  { 
    href: "/kids-dentist-pediatric-dentistry-doddaballapur", 
    title: "Pediatric Dentistry", 
    summary: "Gentle dental care and early orthodontic guidance for children.",
    image: "/images/pediatric-dentistry.png"
  },
  { 
    href: "/tmj-jaw-pain-treatment-doddaballapur", 
    title: "TMJ and Jaw Pain", 
    summary: "Clinical evaluation and management of jaw discomfort.",
    image: "/images/tmj-jaw-pain.jpg"
  },
  { 
    href: "/smile-makeover-cosmetic-dentistry-doddaballapur", 
    title: "Smile Makeover", 
    summary: "Customized cosmetic planning for a balanced, healthy smile.",
    image: "/images/smile-makeover.jpg"
  }
];

export const servicesHubIntro: SectionBlock[] = [
  {
    title: "Pain Relief and Functional Dental Care",
    body: [
      "Find reliable answers to common dental concerns. Our treatment guides explain what to expect during root canal treatment, jaw pain evaluation, and tooth-saving procedures.",
      "Our goal is to provide clear, diagnostic clarity so you can move forward with confidence."
    ]
  },
  {
    title: "Children's Dental Care",
    body: [
      "We provide specialized pediatric care to help children develop healthy oral habits from an early age. Our gentle approach ensures a comfortable experience for parents and growing smiles alike."
    ]
  },
  {
    title: "Cosmetic and Smile Improvement Options",
    body: [
      "Our smile makeover plans focus on achieving natural-looking results through careful alignment and shape correction, tailored to each patient's unique facial features."
    ]
  }
];

const commonLinks = [
  { href: "/", label: "Dental clinic in Doddaballapur" },
  { href: "/services", label: "All dental treatments" }
];

export const servicePages: Record<string, ServicePageContent> = {
  braces: makeService(
    {
      title: "Braces Treatment in Doddaballapur | Metal, Ceramic & Self-Ligating",
      description: "Looking for braces treatment in Doddaballapur? Get expert orthodontic care with metal, ceramic, and advanced braces options at Sahara Dental Care.",
      path: "/braces-treatment-doddaballapur",
      h1: "Braces Treatment in Doddaballapur",
      primaryKeyword: "braces treatment in Doddaballapur",
      secondaryKeywords: ["orthodontic treatment", "metal braces", "ceramic braces"]
    },
    "Orthodontic braces treatment",
    [
      "Braces treatment in Doddaballapur can help correct crowding, spacing, protrusion, and bite issues that affect both smile appearance and function.",
      "At Sahara Dental Care, treatment planning begins with a clear review of bite balance, smile goals, and the brace system that best fits the case."
    ],
    [
      { title: "What Braces Treatment Helps Correct", body: ["Braces can improve crowding, spacing, protrusion, deep bite, crossbite, and uneven alignment.", "A well-planned case aims to improve both aesthetics and how the teeth meet over time."] },
      { title: "Types of Braces Available", body: ["Patients can discuss metal braces, ceramic braces, and self-ligating braces based on treatment needs and visibility preferences."], bullets: ["Metal braces", "Ceramic braces", "Self-ligating braces"] },
      { title: "Braces for Teens and Adults", body: ["Braces are not only for children. Adults often choose braces when they want reliable correction for bite or alignment issues."] },
      { title: "What to Expect During Treatment", body: ["Treatment usually involves consultation, records, placement, follow-up visits, and care guidance during the active phase."], bullets: ["Consultation and records", "Follow-up visits and adjustments", "Braces care tips"] },
      { title: "How Long Braces Treatment Takes", body: ["Treatment length depends on the complexity of the case and how consistently review visits are maintained."] },
      { title: "Cost of Braces in Doddaballapur", body: ["Braces cost depends on the type of braces, complexity of the case, and expected treatment duration.", "The clinic focuses on transparent pricing discussions and practical planning."] },
      { title: "Why Choose Sahara Dental Care for Braces", body: ["Our clinic provides structured orthodontic reviews, clear timeline expectations, and personalized planning for every patient. We prioritize transparent communication so you stay informed at every stage of your braces path."] }
    ],
    [
      { question: "How much do braces cost in Doddaballapur?", answer: "Braces cost depends on the type of braces, treatment complexity, and expected duration. A consultation helps confirm the right option and pricing for your case." },
      { question: "Are braces only for children and teenagers?", answer: "No. Braces can be planned for teenagers as well as adults who want to improve alignment, bite balance, or smile appearance." },
      { question: "How long does braces treatment usually take?", answer: "Braces treatment length varies based on tooth movement and bite correction needs. A consultation gives the most realistic estimate." },
      { question: "Can adults get braces treatment?", answer: "Yes. Adults often choose braces when they want predictable correction for crowding, spacing, or bite issues." },
      { question: "Are ceramic braces less visible than metal braces?", answer: "Yes. Ceramic braces are generally less noticeable because they blend in better with the natural tooth shade." }
    ],
    [...commonLinks, { href: "/clear-aligners-invisalign-doddaballapur", label: "Clear aligners and Invisalign" }, { href: "/kids-dentist-pediatric-dentistry-doddaballapur", label: "Kids dentist and early braces guidance" }, { href: "/smile-makeover-cosmetic-dentistry-doddaballapur", label: "Smile makeover planning" }, { href: "/contact", label: "Book a braces consultation" }]
  ),
  aligners: makeService(
    {
      title: "Clear Aligners in Doddaballapur | Invisalign & Invisible Braces",
      description: "Straighten your teeth with clear aligners in Doddaballapur. Learn if Invisalign or invisible braces are right for you at Sahara Dental Care.",
      path: "/clear-aligners-invisalign-doddaballapur",
      h1: "Clear Aligners and Invisalign in Doddaballapur",
      primaryKeyword: "clear aligners in Doddaballapur",
      secondaryKeywords: ["Invisalign in Doddaballapur", "invisible braces", "aligners vs braces"]
    },
    "Clear aligner treatment",
    [
      "Clear aligners in Doddaballapur offer a removable way to straighten teeth for patients who want a less visible treatment option.",
      "Sahara Dental Care helps patients compare aligners with braces based on suitability, routine, and treatment goals."
    ],
    [
      { title: "What Are Clear Aligners", body: ["Clear aligners are custom-made trays that guide planned tooth movement in stages.", "They are often chosen by adults and older teens who prefer a discreet option."] },
      { title: "Who Is a Good Candidate for Aligners", body: ["Patients with mild to moderate crowding, spacing, or cosmetic alignment concerns often ask about aligners first.", "Some cases still respond better to braces, so suitability has to be assessed."] },
      { title: "Clear Aligners vs Braces", body: ["Aligners are removable and less visible, while braces stay fixed and can be better for some complex movements."] },
      { title: "What Treatment Looks Like Step by Step", body: ["Treatment begins with records and planning, followed by staged aligner wear and periodic reviews."] },
      { title: "Wearing and Maintaining Aligners", body: ["Aligners work best when they are worn consistently, cleaned properly, and reviewed on schedule."] },
      { title: "Cost of Clear Aligners in Doddaballapur", body: ["Aligner pricing depends on treatment complexity and the number of stages required."] },
      { title: "Why Choose Sahara Dental Care for Aligners", body: ["Our focus is on recommending the treatment that actually fits your orthodontic needs, whether that is aligners, braces, or a combination."] }
    ],
    [
      { question: "Are clear aligners better than braces?", answer: "Not always. Aligners are excellent for the right cases, but braces may be better for some tooth movements or bite corrections." },
      { question: "How many hours a day should aligners be worn?", answer: "Aligners are usually effective only when they are worn for most of the day. Your dentist will explain the recommended schedule for your plan." },
      { question: "Can adults use clear aligners?", answer: "Yes. Adults often choose aligners when they want a removable and more discreet smile-correction option." },
      { question: "How visible are clear aligners?", answer: "They are designed to be discreet and are generally less noticeable than braces in everyday conversation." },
      { question: "How much do aligners cost in Doddaballapur?", answer: "The cost depends on treatment complexity and the number of aligners needed. A consultation is the best way to understand the fee range." }
    ],
    [...commonLinks, { href: "/braces-treatment-doddaballapur", label: "Braces treatment" }, { href: "/smile-makeover-cosmetic-dentistry-doddaballapur", label: "Smile makeover planning" }, { href: "/contact", label: "Book an aligners consultation" }]
  )
};

servicePages.implants = makeService(
  {
    title: "Dental Implants in Doddaballapur | Replace Missing Teeth",
    description: "Replace missing teeth with dental implants in Doddaballapur. Get expert guidance on options, healing, comfort, and treatment planning at Sahara Dental Care.",
    path: "/dental-implants-doddaballapur",
    h1: "Dental Implants in Doddaballapur",
    primaryKeyword: "dental implants in Doddaballapur",
    secondaryKeywords: ["replace missing teeth", "implant dentist", "single tooth replacement"]
  },
  "Dental implant treatment",
  [
    "Dental implants in Doddaballapur are a long-term option for replacing missing teeth with stronger support and function.",
    "Sahara Dental Care helps patients understand whether implants are suitable, what the stages involve, and how healing is planned."
  ],
  [
    { title: "What Dental Implants Are", body: ["Dental implants replace missing tooth roots and support a stable restoration that functions more like a natural tooth."] },
    { title: "Who May Need Dental Implants", body: ["Patients missing one or more teeth often ask about implants when they want a fixed replacement option."] },
    { title: "Implant Treatment Step by Step", body: ["Treatment usually involves consultation, planning, placement, healing, and final restoration."] },
    { title: "Healing and Recovery After Implants", body: ["Healing time differs from case to case, so the clinic focuses on explaining comfort, reviews, and realistic expectations clearly."] },
    { title: "Dental Implants vs Bridges and Dentures", body: ["Implants, bridges, and dentures each solve missing teeth differently. The right choice depends on support, comfort, and long-term goals."] },
    { title: "Cost of Dental Implants in Doddaballapur", body: ["Implant cost depends on the number of teeth being replaced and the restorative plan involved."] },
    { title: "Why Choose Sahara Dental Care for Implants", body: ["Patients usually want honest guidance, practical planning, and a local clinic that explains healing clearly."] }
  ],
  [
    { question: "Are dental implants painful?", answer: "Implant treatment is planned with comfort in mind, and most patients describe it as more manageable than expected." },
    { question: "How long do dental implants last?", answer: "Dental implants are designed as a long-term solution, but longevity depends on oral hygiene, follow-up care, and overall oral health." },
    { question: "Who is a candidate for dental implants?", answer: "Patients with missing teeth and suitable oral support may be candidates, but consultation is needed to confirm suitability." },
    { question: "What is the recovery time after implants?", answer: "Recovery time varies based on the treatment plan and healing response. Your dentist will explain what to expect at each stage." },
    { question: "How much do dental implants cost in Doddaballapur?", answer: "The cost depends on the number of implants, the type of restoration, and whether additional procedures are required." }
  ],
  [...commonLinks, { href: "/root-canal-treatment-doddaballapur", label: "Root canal treatment" }, { href: "/smile-makeover-cosmetic-dentistry-doddaballapur", label: "Smile makeover planning" }, { href: "/contact", label: "Book an implant consultation" }]
);

servicePages.rootCanal = makeService(
  {
    title: "Root Canal Treatment in Doddaballapur | Pain Relief & Tooth Saving",
    description: "Need root canal treatment in Doddaballapur? Save your tooth and reduce pain with careful, patient-friendly treatment at Sahara Dental Care.",
    path: "/root-canal-treatment-doddaballapur",
    h1: "Root Canal Treatment in Doddaballapur",
    primaryKeyword: "root canal treatment in Doddaballapur",
    secondaryKeywords: ["tooth pain treatment", "infected tooth treatment", "is root canal painful"]
  },
  "Root canal treatment",
  [
    "Root canal treatment in Doddaballapur is often recommended when a tooth is infected, deeply decayed, or causing significant pain.",
    "Sahara Dental Care uses direct, practical explanations so patients understand when treatment may be needed and what the procedure involves."
  ],
  [
    { title: "Signs You May Need Root Canal Treatment", body: ["Persistent tooth pain, lingering sensitivity, swelling, or pain while chewing are common reasons patients ask about root canal treatment."] },
    { title: "Is Root Canal Treatment Painful", body: ["The goal of root canal treatment is to remove infection and relieve pain, not add to it."] },
    { title: "Root Canal Procedure Explained", body: ["The procedure focuses on cleaning the infected area inside the tooth, disinfecting it, and sealing it to help preserve the tooth."] },
    { title: "How Many Visits Are Usually Needed", body: ["Some cases can be completed quickly, while others need additional review depending on the level of infection and the tooth involved."] },
    { title: "Cost of Root Canal Treatment in Doddaballapur", body: ["Cost varies based on the tooth involved and whether additional restorative work is needed afterward."] },
    { title: "Root Canal Aftercare and Recovery", body: ["Aftercare advice usually covers comfort, chewing guidance, and any follow-up restoration that may be needed."] },
    { title: "Why Choose Sahara Dental Care for Tooth-Saving Treatment", body: ["Patients with tooth pain need calm guidance and a clinic that balances urgency with reassurance."] }
  ],
  [
    { question: "When is a root canal needed?", answer: "A root canal may be needed when the inner part of the tooth becomes infected or inflamed due to deep decay, trauma, or severe damage." },
    { question: "Is root canal treatment painful?", answer: "Root canal treatment is meant to relieve pain caused by infection and is usually more comfortable than patients expect." },
    { question: "How long does a root canal take?", answer: "The time varies depending on the tooth and the level of infection. A checkup gives the most accurate estimate." },
    { question: "Can a root canal save my tooth?", answer: "Yes. Root canal treatment is specifically used to save a tooth that might otherwise continue to cause pain or need removal." },
    { question: "How much does root canal treatment cost in Doddaballapur?", answer: "The cost depends on the tooth being treated and the complexity of the case." }
  ],
  [...commonLinks, { href: "/dental-implants-doddaballapur", label: "Dental implants" }, { href: "/faq", label: "Dental treatment FAQs" }, { href: "/contact", label: "Book a tooth pain consultation" }]
);

servicePages.kids = makeService(
  {
    title: "Kids Dentist in Doddaballapur | Pediatric Dental Care",
    description: "Gentle pediatric dentistry in Doddaballapur for checkups, preventive care, early braces guidance, and comfortable treatment for children.",
    path: "/kids-dentist-pediatric-dentistry-doddaballapur",
    h1: "Pediatric Dentistry in Doddaballapur",
    primaryKeyword: "pediatric dentist in Doddaballapur",
    secondaryKeywords: ["kids dentist", "child dental care", "early braces evaluation"]
  },
  "Pediatric dentistry",
  [
    "Pediatric dentistry in Doddaballapur should help children feel comfortable while also giving parents clear advice about prevention and oral development.",
    "Sahara Dental Care focuses on gentle visits, practical communication, and early guidance where orthodontic concerns are present."
  ],
  [
    { title: "Pediatric Dentistry for Children in Doddaballapur", body: ["Children benefit from appointments that are paced well, explained simply, and built around comfort."] },
    { title: "When to Bring Your Child to a Dentist", body: ["Parents often visit for a first checkup, visible tooth issues, pain, decay concerns, or growth-related questions."] },
    { title: "Preventive Care for Growing Smiles", body: ["Preventive care includes monitoring, oral hygiene guidance, dietary advice, and catching problems early."] },
    { title: "Early Orthodontic Screening and Braces Guidance", body: ["An early screening does not always mean immediate braces, but it helps parents understand whether future planning may be needed."] },
    { title: "Making Dental Visits Comfortable for Children", body: ["A calm experience and age-appropriate explanations help both the child and the parent feel more at ease."] },
    { title: "Why Parents Choose Sahara Dental Care", body: ["Parents usually want practical answers, a gentle pace, and guidance they can trust locally."] }
  ],
  [
    { question: "At what age should a child first visit a dentist?", answer: "A child should have an early dental visit when the first teeth begin to appear or whenever parents notice concerns about oral development." },
    { question: "How often should children have dental checkups?", answer: "Children benefit from regular reviews so growth, hygiene, and early issues can be monitored properly." },
    { question: "Can children need braces early?", answer: "Yes. Some children benefit from an early orthodontic screening when bite or growth concerns are noticed." },
    { question: "How do you make dental visits comfortable for kids?", answer: "Comfort usually comes from gentle communication, age-appropriate explanations, and a calm clinic experience." },
    { question: "Do you offer preventive dental care for children?", answer: "Yes. Preventive care is an important part of pediatric dentistry and helps families manage oral health before bigger problems develop." }
  ],
  [...commonLinks, { href: "/braces-treatment-doddaballapur", label: "Braces treatment" }, { href: "/faq", label: "Dental treatment FAQs" }, { href: "/contact", label: "Book a child dental visit" }]
);

servicePages.tmj = makeService(
  {
    title: "TMJ and Jaw Pain Treatment in Doddaballapur | Sahara Dental Care",
    description: "Get help for jaw pain, teeth grinding, and TMJ-related discomfort in Doddaballapur with evaluation and treatment planning at Sahara Dental Care.",
    path: "/tmj-jaw-pain-treatment-doddaballapur",
    h1: "TMJ and Jaw Pain Treatment in Doddaballapur",
    primaryKeyword: "TMJ treatment in Doddaballapur",
    secondaryKeywords: ["jaw pain treatment", "teeth grinding", "jaw clicking"]
  },
  "TMJ evaluation and jaw pain treatment",
  [
    "TMJ treatment in Doddaballapur is relevant for patients dealing with jaw pain, clicking, stiffness, headaches, or teeth grinding-related discomfort.",
    "Sahara Dental Care helps patients understand whether the issue may be bite-related, muscle-related, or linked to the jaw joint."
  ],
  [
    { title: "What TMJ Disorder Means", body: ["TMJ is the term patients often hear when the jaw joint or surrounding muscles begin causing clicking, stiffness, or pain."] },
    { title: "Common Signs of Jaw Joint Problems", body: ["Jaw pain near the ear, clicking, limited opening, tired jaw muscles, and discomfort while chewing are common reasons patients look for TMJ treatment."] },
    { title: "Teeth Grinding and Jaw Pain", body: ["Grinding and clenching can place extra stress on the jaw muscles and joints and may cause morning soreness or facial tension."] },
    { title: "TMJ Treatment Options", body: ["Treatment depends on the cause and may involve bite evaluation, habit guidance, symptom monitoring, or a more specific care plan."] },
    { title: "When to See a Dentist for Jaw Pain", body: ["If jaw discomfort is recurring, affects chewing, interrupts sleep, or comes with clicking and stiffness, it is worth getting checked."] },
    { title: "Why Choose Sahara Dental Care for TMJ Evaluation", body: ["Patients with jaw pain usually want a clinic that listens carefully and explains the findings without overcomplicating them."] }
  ],
  [
    { question: "What causes jaw pain near the ear?", answer: "Jaw pain near the ear can be linked to the jaw joint, surrounding muscles, teeth grinding, or bite-related strain." },
    { question: "Can teeth grinding lead to jaw pain?", answer: "Yes. Teeth grinding and clenching can place stress on the jaw muscles and joint, which may lead to soreness or stiffness." },
    { question: "When should TMJ symptoms be evaluated?", answer: "TMJ symptoms should be checked if they are recurring, painful, affecting chewing, or making jaw movement feel restricted." },
    { question: "Do bite problems affect jaw comfort?", answer: "They can. Bite imbalance may contribute to strain in some cases, which is why a careful evaluation is useful." },
    { question: "What treatments help with TMJ discomfort?", answer: "Treatment depends on the cause of the symptoms, so an evaluation is the best first step." }
  ],
  [...commonLinks, { href: "/faq", label: "Dental treatment FAQs" }, { href: "/contact", label: "Book a jaw pain consultation" }]
);

servicePages.cosmetic = makeService(
  {
    title: "Smile Makeover & Cosmetic Dentistry in Doddaballapur",
    description: "Improve your smile with cosmetic dentistry in Doddaballapur, including smile makeover planning, alignment-led aesthetics, and natural-looking treatment options.",
    path: "/smile-makeover-cosmetic-dentistry-doddaballapur",
    h1: "Smile Makeover in Doddaballapur",
    primaryKeyword: "cosmetic dentist in Doddaballapur",
    secondaryKeywords: ["smile makeover", "smile design", "aesthetic dentistry"]
  },
  "Cosmetic dentistry and smile makeover planning",
  [
    "Cosmetic dentistry in Doddaballapur works best when smile improvement is planned around alignment, facial balance, tooth shape, and function.",
    "Sahara Dental Care approaches smile makeovers as a guided planning process so patients understand what is realistic and what may need a staged approach."
  ],
  [
    { title: "What a Smile Makeover Can Include", body: ["A smile makeover may include one treatment or a combination of treatments depending on the patient’s goals and existing dental condition."] },
    { title: "Who Can Benefit From Cosmetic Dentistry", body: ["Patients who feel self-conscious about spacing, crowding, shape, or overall smile balance often begin here."] },
    { title: "Alignment, Shape, and Overall Smile Design", body: ["Cosmetic dentistry is strongest when it considers aesthetics and structure together, which is why braces or aligners may be part of the plan."] },
    { title: "Planning a Natural-Looking Smile Improvement", body: ["Most patients want a result that feels proportionate and natural rather than artificial or overdone."] },
    { title: "Cost of Smile Makeover Treatment in Doddaballapur", body: ["Cost depends on the treatments involved and whether the case needs alignment, restoration, or staged planning."] },
    { title: "Why Choose Sahara Dental Care for Cosmetic Treatment", body: ["The clinic frames cosmetic treatment around diagnosis, planning clarity, and natural-looking outcomes rather than generic cosmetic packages."] }
  ],
  [
    { question: "What is included in a smile makeover?", answer: "A smile makeover can include one or more treatments depending on the patient’s goals and existing dental condition." },
    { question: "Is cosmetic dentistry only about whitening?", answer: "No. Cosmetic dentistry can also involve alignment, shape correction, proportion changes, and broader smile planning." },
    { question: "Can braces or aligners improve smile aesthetics?", answer: "Yes. Alignment treatment often improves smile aesthetics significantly and may be an important part of cosmetic planning." },
    { question: "How do you plan a natural-looking smile?", answer: "Natural-looking smile design comes from balancing alignment, shape, and proportions instead of focusing on only one visible detail." },
    { question: "How much does cosmetic dental treatment cost?", answer: "The cost depends on the treatments included in the plan and is best confirmed after consultation." }
  ],
  [...commonLinks, { href: "/braces-treatment-doddaballapur", label: "Braces treatment" }, { href: "/clear-aligners-invisalign-doddaballapur", label: "Clear aligners and Invisalign" }, { href: "/contact", label: "Book a smile makeover consultation" }]
);

export const aboutPage = {
  seo: {
    title: "About Sahara Dental Care & Dr. Nazir Hussain | Doddaballapur",
    description: "Learn about Sahara Dental Care, Dr. Nazir Hussain, our treatment approach, patient-first philosophy, and why families across Doddaballapur trust our clinic.",
    path: "/about-sahara-dental-care",
    h1: "Meet Dr. Nazir Hussain and Sahara Dental Care",
    primaryKeyword: "orthodontist in Doddaballapur",
    secondaryKeywords: ["dentist doctor in Doddaballapur", "Dr Nazir Hussain"]
  },
  sections: [
    { title: "About Sahara Dental Care", body: ["Sahara Dental Care is a premier dental clinic in Doddaballapur committed to providing world-class dentistry in a local, accessible setting.", "Our team serves patients from Doddaballapur, Devanahalli, Yelahanka, and Rajanukunte with high-quality orthodontic, restorative, and pediatric care."] },
    { title: "Meet Dr. Nazir Hussain", body: ["Dr. Nazir Hussain leads our clinical team and holds a BDS and MDS in Orthodontics. He is dedicated to providing patient-centered care using advanced dental technologies.", "He specializes in complex braces, clear aligners, dental implants, and aesthetic smile correction."] },
    { title: "Qualifications and Clinical Focus", body: ["Dr. Nazir Hussain is a specialist orthodontist and implantologist with years of experience in restorative and aesthetic dentistry.", "Our clinic provides a full spectrum of specialized care, including pediatric dentistry, root canal treatments, and TMJ management."] },
    { title: "Our Care Philosophy", body: ["We believe in a patient-first approach centered on transparency, pain-conscious treatment, and clinical excellence.", "Every treatment plan is explained clearly, ensuring you understand your options and the expected outcomes for your oral health."] },
    { title: "Why Patients Choose Us", body: ["Families trust Sahara Dental Care for our organized treatment planning, honest clinical advice, and a respectful environment that prioritizes your comfort."] },
    { title: "Our Service Area", body: ["We are proud to serve the community of Doddaballapur and patients visiting from across the North Bangalore region, including Devanahalli and Yelahanka."] }
  ]
};

export const faqPage = {
  seo: {
    title: "Dental FAQ | Sahara Dental Care Doddaballapur",
    description: "Find answers about braces, aligners, implants, root canal treatment, pediatric dentistry, appointments, pricing, and clinic visits at Sahara Dental Care.",
    path: "/faq",
    h1: "Frequently Asked Questions",
    primaryKeyword: "dental clinic FAQ Doddaballapur",
    secondaryKeywords: ["dental questions", "Sahara Dental Care FAQ"]
  },
  groups: [
    {
      title: "Appointments and First Visit",
      faqs: [
        { question: "How do I book an appointment at Sahara Dental Care?", answer: "You can book an appointment by calling, messaging on WhatsApp, or using the contact page to request a consultation." },
        { question: "What should I expect at my first dental visit?", answer: "Your first visit usually includes an assessment of your concern, a discussion of findings, and guidance on the next treatment step if needed." }
      ]
    },
    {
      title: "Braces and Aligners",
      faqs: [
        { question: "How do I know whether I need braces or aligners?", answer: "The right choice depends on your bite, tooth movement needs, and lifestyle preferences. A consultation helps compare both options properly." },
        { question: "Are clear aligners suitable for adults?", answer: "Yes. Adults often choose aligners when they want a removable and more discreet smile-correction option." }
      ]
    },
    {
      title: "Dental Implants and Root Canal Treatment",
      faqs: [
        { question: "Can dental implants replace a single missing tooth?", answer: "Yes. Dental implants are commonly considered for single-tooth replacement as well as for multiple missing teeth." },
        { question: "Can a root canal help save a painful tooth?", answer: "Yes. Root canal treatment is often used to save a tooth that is infected or deeply damaged." }
      ]
    },
    {
      title: "Children's Dental Care and Jaw Pain",
      faqs: [
        { question: "When should a child have an orthodontic screening?", answer: "An orthodontic screening is helpful when parents notice bite or growth concerns, or when the dentist recommends an early review." },
        { question: "Can jaw clicking be harmless?", answer: "Sometimes yes, but clicking with pain, stiffness, or limited movement should be evaluated." }
      ]
    },
    {
      title: "Pricing, Location, and Timings",
      faqs: [
        { question: "Do treatment costs stay the same for every patient?", answer: "No. Cost depends on the treatment type, complexity, and treatment duration, so consultation is the right time to confirm pricing." },
        { question: "What are the clinic timings?", answer: "The current clinic timings shown on the site are Monday to Saturday from 9:00 AM to 8:00 PM and Sunday from 10:00 AM to 2:00 PM." }
      ]
    }
  ]
};

export const contactPage = {
  seo: {
    title: "Contact Sahara Dental Care | Book a Dental Appointment",
    description: "Contact Sahara Dental Care in Doddaballapur for appointments, directions, clinic timings, phone support, and WhatsApp booking assistance.",
    path: "/contact",
    h1: "Book a Dental Appointment in Doddaballapur",
    primaryKeyword: "dentist contact Doddaballapur",
    secondaryKeywords: ["book dental appointment", "clinic location"]
  },
  appointmentFaqs: [
    { question: "Can I contact the clinic on WhatsApp?", answer: "Yes. WhatsApp is one of the easiest ways to request an appointment and ask basic treatment questions before visiting." },
    { question: "Do I need to call before visiting the clinic?", answer: "Booking ahead is helpful because it reduces waiting time and makes it easier to schedule the right consultation slot." },
    { question: "Do you help patients coming from nearby areas?", answer: "Yes. We regularly welcome patients from Devanahalli, Yelahanka, Rajanukunte, and surrounding North Bangalore localities who are looking for specialist care." }
  ]
};

const makeBlog = (
  seo: PageSeo,
  intro: string[],
  sections: SectionBlock[],
  ctaTitle: string,
  ctaText: string,
  relatedLinks: LinkItem[]
): BlogPostContent => ({ seo, intro, sections, ctaTitle, ctaText, relatedLinks });

export const blogPosts: BlogPostContent[] = [
  makeBlog(
    {
      title: "Braces Cost in Doddaballapur | What Patients Should Expect",
      description: "Learn what braces cost in Doddaballapur can depend on, what affects pricing, and how to compare treatment plans before booking.",
      path: "/blog/braces-cost-in-doddaballapur",
      h1: "Braces Cost in Doddaballapur: What Patients Should Expect",
      primaryKeyword: "braces cost in Doddaballapur",
      secondaryKeywords: ["braces price", "orthodontic treatment cost"]
    },
    ["Braces cost in Doddaballapur depends on the kind of braces used, the complexity of tooth movement, and how long treatment is likely to take.", "Patients should compare treatment planning clarity, review schedule, and what is included, not only the starting price."],
    [
      { title: "Why Braces Fees Are Not Identical for Every Case", body: ["Two patients asking for braces may need very different levels of correction, which changes planning and cost."] },
      { title: "What to Ask Before You Compare Quotes", body: ["Ask what type of braces is being recommended, how long treatment may take, and what follow-up care is included."] },
      { title: "Why a Local Consultation Still Matters", body: ["Braces treatment is a follow-up-based journey, so accessibility and communication style matter just as much as the fee."] }
    ],
    "Need a braces cost estimate that matches your case?",
    "Book a consultation at Sahara Dental Care to understand the right braces option, treatment plan, and pricing guidance for your smile.",
    [{ href: "/braces-treatment-doddaballapur", label: "Braces treatment page" }, { href: "/contact", label: "Contact Sahara Dental Care" }]
  ),
  makeBlog(
    {
      title: "How Long Does Root Canal Treatment Take?",
      description: "Understand how long root canal treatment can take, what affects the number of visits, and when patients may need follow-up restoration.",
      path: "/blog/how-long-does-root-canal-treatment-take",
      h1: "How Long Does Root Canal Treatment Take?",
      primaryKeyword: "how long root canal treatment takes",
      secondaryKeywords: ["root canal visits", "root canal timing"]
    },
    ["Root canal treatment length depends on which tooth is involved, how severe the infection is, and whether the tooth needs additional restoration afterward.", "Some cases are straightforward, while others need more than one visit to complete safely and properly."],
    [
      { title: "Why Timing Changes From One Tooth to Another", body: ["Front teeth, premolars, and molars can differ in complexity, so timing changes by tooth and infection level."] },
      { title: "When More Than One Visit Is Needed", body: ["A painful or infected tooth may need more careful follow-up and review before treatment is fully completed."] },
      { title: "What Happens After the Root Canal", body: ["Patients may also need a final restoration or additional review depending on the condition of the tooth."] }
    ],
    "Have tooth pain and need clear next steps?",
    "Reach out to Sahara Dental Care for an assessment and practical guidance on whether root canal treatment is the right next step.",
    [{ href: "/root-canal-treatment-doddaballapur", label: "Root canal treatment page" }, { href: "/faq", label: "Dental FAQ page" }]
  ),
  makeBlog(
    {
      title: "Clear Aligners vs Braces | Which Option Is Better for You?",
      description: "Compare clear aligners vs braces, including visibility, comfort, follow-up needs, and how to decide which treatment suits your smile goals.",
      path: "/blog/clear-aligners-vs-braces",
      h1: "Clear Aligners vs Braces: Which Option Is Better for You?",
      primaryKeyword: "clear aligners vs braces",
      secondaryKeywords: ["aligners or braces", "invisible braces comparison"]
    },
    ["Clear aligners and braces can both improve tooth alignment, but they work best in different situations.", "The better choice depends on treatment complexity, daily routine, cosmetic preference, and how consistent you can be with follow-up instructions."],
    [
      { title: "Visibility and Lifestyle Considerations", body: ["Aligners are removable and less visible, while braces stay fixed and do not depend on patient removal and reinsertion."] },
      { title: "Which Cases May Suit Braces Better", body: ["Some bite corrections and more complex tooth movements are better handled with braces because they offer different control."] },
      { title: "How to Make the Right Choice", body: ["Patients should compare treatment goals, visibility, maintenance effort, and the type of correction needed."] }
    ],
    "Trying to decide between braces and aligners?",
    "Book a smile consultation at Sahara Dental Care to compare both options with your actual case in mind.",
    [{ href: "/clear-aligners-invisalign-doddaballapur", label: "Clear aligners page" }, { href: "/braces-treatment-doddaballapur", label: "Braces treatment page" }]
  ),
  makeBlog(
    {
      title: "When Do You Need Dental Implants?",
      description: "Find out when dental implants may be recommended, how they compare with other replacement options, and when to seek a consultation.",
      path: "/blog/when-do-you-need-dental-implants",
      h1: "When Do You Need Dental Implants?",
      primaryKeyword: "when do you need dental implants",
      secondaryKeywords: ["missing tooth replacement", "implant candidate"]
    },
    ["Dental implants may be considered when a patient wants a stable replacement for one or more missing teeth.", "The right timing depends on oral health, healing, support, and the patient's long-term goals."],
    [
      { title: "Common Situations Where Implants Are Considered", body: ["Patients often ask about implants after losing a single tooth, dealing with a gap that affects chewing, or wanting a more fixed replacement option."] },
      { title: "Why Suitability Has to Be Evaluated", body: ["A consultation is needed to review oral health, support, and whether any preparatory steps are needed first."] },
      { title: "When to Book a Consultation", body: ["If you have a missing tooth or want to compare replacement options, it is worth booking an implant consultation instead of waiting."] }
    ],
    "Need to replace a missing tooth?",
    "Speak with Sahara Dental Care about implant suitability, healing expectations, and the right replacement plan for your case.",
    [{ href: "/dental-implants-doddaballapur", label: "Dental implants page" }, { href: "/contact", label: "Contact Sahara Dental Care" }]
  ),
  makeBlog(
    {
      title: "How to Choose a Dentist in Doddaballapur",
      description: "Learn what to look for when choosing a dentist in Doddaballapur, including clarity, convenience, treatment range, and patient communication.",
      path: "/blog/how-to-choose-a-dentist-in-doddaballapur",
      h1: "How to Choose a Dentist in Doddaballapur",
      primaryKeyword: "choose a dentist in Doddaballapur",
      secondaryKeywords: ["best dentist near Doddaballapur", "local dental clinic"]
    },
    ["Choosing a dentist in Doddaballapur is easier when you focus on clinical expertise, modern equipment, and a team that explains treatment in a way you can trust.", "We recommend selecting a clinic that combines accessibility with a comprehensive range of dental services to ensure long-term continuity of care."],
    [
      { title: "Look for Clear Explanations, Not Just Big Claims", body: ["A good dental clinic explains what the problem is, what the options are, and why one approach is being recommended."] },
      { title: "Choose a Clinic You Can Realistically Visit", body: ["Many dental treatments need review visits, so location and accessibility matter."] },
      { title: "Consider Whether the Clinic Matches Your Treatment Needs", body: ["Choosing a clinic with the right mix of services can save time and make treatment more coordinated."] }
    ],
    "Looking for a dental clinic you can trust locally?",
    "Visit Sahara Dental Care to discuss your dental concern, review treatment options, and plan the right next step with clear guidance.",
    [{ href: "/", label: "Sahara Dental Care homepage" }, { href: "/about-sahara-dental-care", label: "About the clinic and doctor" }, { href: "/contact", label: "Book an appointment" }]
  )
];

export const blogIndexSeo: PageSeo = {
  title: "Dental Blog | Sahara Dental Care Doddaballapur",
  description: "Read practical dental articles from Sahara Dental Care covering braces, aligners, implants, root canal treatment, and how to choose the right clinic in Doddaballapur.",
  path: "/blog",
  h1: "Dental Advice and Treatment Guides",
  primaryKeyword: "dental blog Doddaballapur",
  secondaryKeywords: ["dental treatment advice", "braces and aligners blog"]
};

export function getServicePageByPath(path: string) {
  return Object.values(servicePages).find((service) => service.seo.path === path);
}

export function getBlogPostByPath(path: string) {
  return blogPosts.find((post) => post.seo.path === path);
}
