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
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for accessiblity and SEO.',
      validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
}
