import {defineArrayMember, defineField, defineType} from 'sanity'

export const homepageType = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroEyebrow',
      title: 'Hero Eyebrow',
      type: 'localizedString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'localizedString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroTitleAccent',
      title: 'Hero Title Accent',
      type: 'localizedString',
      description: 'Optional highlighted part of the hero title.',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'localizedString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroCtaLabel',
      title: 'Hero CTA Label',
      type: 'localizedString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featuredExperiencesHeading',
      title: 'Featured Experiences Heading',
      type: 'localizedString',
    }),
    defineField({
      name: 'featuredTourPackageIds',
      title: 'Featured Tour Packages',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'tourPackage'}],
        }),
      ],
    }),
    defineField({
      name: 'featuredTestimonials',
      title: 'Featured Testimonials',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'testimonial'}],
        }),
      ],
    }),
    defineField({
      name: 'featuredPosts',
      title: 'Featured Blog Posts',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'blogPost'}],
        }),
      ],
    }),
    defineField({
      name: 'contactHeading',
      title: 'Contact Heading',
      type: 'localizedString',
    }),
    defineField({
      name: 'contactBody',
      title: 'Contact Body',
      type: 'localizedString',
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
    }),
  ],
})
