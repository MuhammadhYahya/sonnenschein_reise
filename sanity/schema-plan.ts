export const sanitySchemaPlan = {
  documents: [
    "siteSettings",
    "homepage",
    "destination",
    "experience",
    "tourPackage",
    "blogPost",
    "testimonial",
    "faq",
    "legalPage",
  ],
  localizedFields: ["title", "subtitle", "body", "excerpt", "ctaLabel"],
  notes: [
    "Keep marketing and editorial content in Sanity.",
    "Do not store inquiries, bookings, or payments in the CMS.",
    "Start with bilingual English and German fields.",
  ],
} as const;
