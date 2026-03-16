import type { HeroContent, SiteContentSnapshot } from "@/lib/domain/content";
import { hasSanityConfig, sanityClient } from "@/lib/cms/client";
import { homepageQuery } from "@/lib/cms/queries";

type SanityLocalizedValue = {
  en?: string;
  de?: string;
};

type HomepageQueryResult = {
  heroEyebrow?: SanityLocalizedValue;
  heroTitle?: SanityLocalizedValue;
  heroTitleAccent?: SanityLocalizedValue;
  heroSubtitle?: SanityLocalizedValue;
  heroCtaLabel?: SanityLocalizedValue;
  seoTitle?: string;
  seoDescription?: string;
};

const fallbackHeroContent: HeroContent = {
  eyebrow: {
    en: "Sonnenschein Reise",
    de: "Sonnenschein Reise",
  },
  title: {
    en: "Discover the",
    de: "Entdecke die",
  },
  titleAccent: {
    en: "Pearl of the Indian Ocean",
    de: "Perle des Indischen Ozeans",
  },
  subtitle: {
    en: "Curated journeys through Sri Lanka's ancient wonders, lush highlands, and pristine beaches",
    de: "Sorgfaeltig kuratierte Reisen durch Sri Lankas alte Wunder, gruenen Hochlaender und unberuehrte Straende",
  },
  ctaLabel: {
    en: "Plan Your Journey",
    de: "Plane Deine Reise",
  },
  image: "/HERO.jpg",
};

const fallbackHomepageContent: SiteContentSnapshot = {
  hero: fallbackHeroContent,
  experiences: [],
  packages: [],
  testimonials: [],
  posts: [],
  seo: {
    title: "Sonnenschein Reise - Discover Sri Lanka",
    description:
      "Authentic Sri Lanka travel experiences, curated journeys, and cultural adventures.",
  },
};

function toLocalizedValue(
  value: SanityLocalizedValue | undefined,
  fallbackEn: string,
  fallbackDe: string,
) {
  return {
    en: value?.en ?? fallbackEn,
    de: value?.de ?? fallbackDe,
  };
}

function mapHomepageContent(data: HomepageQueryResult | null): SiteContentSnapshot {
  if (!data) {
    return fallbackHomepageContent;
  }

  return {
    ...fallbackHomepageContent,
    hero: {
      eyebrow: toLocalizedValue(
        data.heroEyebrow,
        fallbackHeroContent.eyebrow.en,
        fallbackHeroContent.eyebrow.de,
      ),
      title: toLocalizedValue(
        data.heroTitle,
        fallbackHeroContent.title.en,
        fallbackHeroContent.title.de,
      ),
      titleAccent: toLocalizedValue(
        data.heroTitleAccent,
        fallbackHeroContent.titleAccent?.en ?? "",
        fallbackHeroContent.titleAccent?.de ?? "",
      ),
      subtitle: toLocalizedValue(
        data.heroSubtitle,
        fallbackHeroContent.subtitle.en,
        fallbackHeroContent.subtitle.de,
      ),
      ctaLabel: toLocalizedValue(
        data.heroCtaLabel,
        fallbackHeroContent.ctaLabel.en,
        fallbackHeroContent.ctaLabel.de,
      ),
      image: fallbackHeroContent.image,
    },
    seo: {
      title: data.seoTitle ?? fallbackHomepageContent.seo.title,
      description: data.seoDescription ?? fallbackHomepageContent.seo.description,
    },
  };
}

export async function getHomepageContent(): Promise<SiteContentSnapshot> {
  if (!hasSanityConfig || !sanityClient) {
    return fallbackHomepageContent;
  }

  try {
    const data = await sanityClient.fetch<HomepageQueryResult | null>(homepageQuery);
    return mapHomepageContent(data);
  } catch {
    return fallbackHomepageContent;
  }
}
