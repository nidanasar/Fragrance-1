import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alternative text',
              type: 'string',
            }
          ]
        }
      ],
      validation: (Rule) => Rule.min(1),
    }),
   defineField({
  name: 'variants',
  title: 'Variants',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        defineField({
          name: 'size',
          title: 'Size',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'sku',
          title: 'SKU',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'price',
          title: 'Price',
          type: 'number',
          validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
          name: 'currency',
          title: 'Currency',
          type: 'string',
          options: {
            list: [
              { title: 'PKR', value: 'PKR' },
            ],
            layout: 'dropdown',
          },
          initialValue: 'PKR',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'compareAtPrice',
          title: 'Compare At Price',
          type: 'number',
        }),
        defineField({
          name: 'stock',
          title: 'Stock',
          type: 'number',
          validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
          name: 'isDefault',
          title: 'Is Default',
          type: 'boolean',
        }),
      ],
      preview: {
        select: {
          title: 'size',
          media: 'image',
        },
      },
    }
  ],
  validation: (Rule) => Rule.required().min(1),
}),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}],
        }
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'fragranceNotes',
      title: 'Fragrance Notes',
      type: 'object',
      fields: [
        defineField({
          name: 'top',
          title: 'Top Notes',
          type: 'array',
          of: [{type: 'string'}],
        }),
        defineField({
          name: 'middle',
          title: 'Middle Notes',
          type: 'array',
          of: [{type: 'string'}],
        }),
        defineField({
          name: 'base',
          title: 'Base Notes',
          type: 'array',
          of: [{type: 'string'}],
        }),
      ],
    }),
    defineField({
      name: 'specifications',
      title: 'Specifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
            }),
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
            }),
          ],
        }
      ],
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingredients',
      type: 'text',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'isFeatured',
      title: 'Is Featured',
      type: 'boolean',
    }),
    defineField({
      name: 'isNewArrival',
      title: 'Is New Arrival',
      type: 'boolean',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Active', value: 'active'},
          {title: 'Inactive', value: 'inactive'},
        ],
      },
      initialValue: 'active',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'trackInventory',
      title: 'Track Inventory',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'averageRating',
      title: 'Average Rating',
      type: 'number',
      description: 'Average customer rating (out of 5)',
      validation: (Rule) => Rule.min(0).max(5),
    }),
    defineField({
      name: 'numberOfReviews',
      title: 'Number of Reviews',
      type: 'number',
      description: 'Total number of customer reviews',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'shippingInfo',
      title: 'Shipping Information',
      type: 'string',
      description: 'Custom shipping information for this product',
    }),
    defineField({
      name: 'returnPolicy',
      title: 'Return Policy',
      type: 'string',
      description: 'Custom return policy for this product',
    }),
    defineField({
      name: 'howToUse',
      title: 'How To Use',
      type: 'text',
      description: 'Instructions on how to use the product',
    }),
    defineField({
      name: 'careInstructions',
      title: 'Care Instructions',
      type: 'text',
      description: 'Instructions on how to care for the product',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'ogImage',
          title: 'Open Graph Image',
          type: 'image',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'images.0',
    },
  },
})