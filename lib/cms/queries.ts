export const homepageQuery = `
  *[_type == "homepage"][0]{
    heroEyebrow,
    heroTitle,
    heroTitleAccent,
    heroSubtitle,
    heroCtaLabel,
    seoTitle,
    seoDescription
  }
`;
