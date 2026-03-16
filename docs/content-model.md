# Content Model Plan

## What "production content" means

Production content should not live inside component files. Instead, React components should receive structured data and render it.

Good production content is:

- editable by non-developers
- structured and reusable
- SEO-friendly
- versionable
- translatable

## Homepage content shape

The homepage should eventually be driven by a single Sanity document with sections such as:

- hero
- featured experiences
- why choose us
- featured tours
- reviews
- blog highlights
- inquiry CTA

## Tour package content shape

Each tour package should include:

- title
- slug
- short summary
- hero image
- gallery
- duration
- destination list
- highlights
- inclusions
- exclusions
- pricing notes
- FAQ items
- SEO fields

## Blog content shape

Each blog post should include:

- title
- slug
- excerpt
- publish date
- cover image
- author
- category
- rich body content
- SEO fields

## Testimonial content shape

Each testimonial should include:

- traveler name
- country
- quote
- rating
- related tour optional
- photo optional

## Multilingual note

Because the site already uses English and German, the CMS should support bilingual fields from the start.

At minimum, these content areas should be bilingual:

- headings
- body copy
- button labels
- package descriptions
- blog metadata where appropriate

## Editing rule for this repo

When refactoring existing components, move content into reusable objects or fetchers first, then replace those with Sanity queries later. This lets the UI stay stable while the backend evolves.
