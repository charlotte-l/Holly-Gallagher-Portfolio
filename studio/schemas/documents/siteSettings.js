export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your website for search engines and social media.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describe your website.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{type: 'author'}]
    },
    {
      name: 'mainColor',
      type: 'colorPicker',
      title: 'Main brand color',
      description: 'The main brand color - this will be used as the background color of the site'
    },
    {
      name: 'secondaryColor',
      type: 'colorPicker',
      title: 'Secondary brand color',
      description: 'The secondary brand color - this will be used for elements like buttons and links on the site'
    },
    {
      name: 'textColor',
      type: 'colorPicker',
      title: 'Text color',
      description: 'The color of all text on the site (excluding links)'
    },
  ],
}
