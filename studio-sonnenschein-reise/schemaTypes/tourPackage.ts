import {defineArrayMember, defineField, defineType} from 'sanity'

export const tourPackageType = defineType({
  name: 'tourPackage',
  title: 'Tour Package',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Package Name',
      type: 'localizedString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name.en', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'localizedString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'durationLabel',
      title: 'Duration Label',
      type: 'localizedString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startingPriceLabel',
      title: 'Starting Price Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'localizedString',
        }),
      ],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
    }),
  ],
  preview: {
    select: {
      title: 'name.en',
      subtitle: 'durationLabel.en',
      media: 'heroImage',
    },
  },
})
