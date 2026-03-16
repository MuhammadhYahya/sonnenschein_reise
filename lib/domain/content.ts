export type LocalizedText = {
  en: string;
  de: string;
};

export type SeoFields = {
  title: string;
  description: string;
  image?: string;
};

export type HeroContent = {
  eyebrow: LocalizedText;
  title: LocalizedText;
  titleAccent?: LocalizedText;
  subtitle: LocalizedText;
  ctaLabel: LocalizedText;
  image: string;
};

export type ExperienceContent = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  image: string;
};

export type TourPackageContent = {
  id: string;
  slug: string;
  name: LocalizedText;
  summary: LocalizedText;
  durationLabel: LocalizedText;
  startingPriceLabel: string;
  highlights: LocalizedText[];
  featured: boolean;
};

export type TestimonialContent = {
  id: string;
  name: string;
  country: LocalizedText;
  quote: LocalizedText;
  rating: number;
};

export type BlogPostContent = {
  id: string;
  slug: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  image: string;
  dateLabel: LocalizedText;
  category: LocalizedText;
};

export type SiteContentSnapshot = {
  hero: HeroContent;
  experiences: ExperienceContent[];
  packages: TourPackageContent[];
  testimonials: TestimonialContent[];
  posts: BlogPostContent[];
  seo: SeoFields;
};
