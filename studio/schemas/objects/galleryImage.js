export default {
  name: 'galleryImage',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: false,
  },
  fields: [
    {
      name: 'caption',
      type: 'text',
      title: 'Caption',
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for accessiblity and SEO.',
      validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
}
