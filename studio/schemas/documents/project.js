export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'This is a unique suffix that is appended to the URL of your website in order to create a unique link to this post. Click `Generate` to generate one automatically from the title, or enter a custom one here. Slugs should not contain spaces!',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your project in social media.'
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [
        {
          type: 'reference',
          to: {
            type: 'category'
          }
        }
      ],
      validation: Rule => Rule.unique(),
    },
    {
      name: 'credits',
      type: 'aboutPortableText',
      title: 'Credits'
    },
    {
      name: 'description',
      type: 'aboutPortableText',
      title: 'Description'
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    },
    {
      name: 'imageGallery',
      title: 'Image Gallery',
      type: 'array',
      of: [
        {
          type: 'galleryImage',
        },
      ],
     }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare ({title = 'No title', slug = {}, media}) {
      return {
        title,
        media,
        subtitle: `/projects/${slug.current}/`,
      }
    }
  }
}
