export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'homepage',
      title: 'Homepage',
    },
    {
      name: 'colors',
      title: 'Site Colors',
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of your website',
      group: 'seo',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your website for search engines and social media.',
      group: 'seo',
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describe your website.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      },
      group: 'seo',
    },
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{type: 'author'}],
      group: 'seo',
    },
    {
      name: 'heroBgColor',
      type: 'colorPicker',
      title: 'Hero background color',
      description: 'The color of the background on the homepage, the hero section at the tops of pages, the header and footer navigation, and any contrast sections',
      group: 'colors',
    },
    {
      name: 'heroTextColor',
      type: 'colorPicker',
      title: 'Hero text color',
      description: 'The text color for text in contrast sections',
      group: 'colors',
    },
    {
      name: 'heroLinkColor',
      type: 'colorPicker',
      title: 'Hero link color',
      description: 'The text color for links and background color for buttons in contrast sections',
      group: 'colors',
    },
    {
      name: 'bodyBgColor',
      type: 'colorPicker',
      title: 'Body background color',
      description: 'The background color for non-contrast sections',
      group: 'colors',
    },
    {
      name: 'bodyTextColor',
      type: 'colorPicker',
      title: 'Body text color',
      description: 'The text color for non-contrast sections',
      group: 'colors',
    },
    {
      name: 'bodyLinkColor',
      type: 'colorPicker',
      title: 'Body link color',
      description: 'The text color for links in non-contrast sections',
      group: 'colors',
    },
    {
      name: 'heroImage',
      type: 'image',
      title: 'Homepage image',
      description: 'Select a main image to display on the homepage of your website',
      required: true,
      group: 'homepage',
    },
    {
      name: 'featuredLink',
      type: 'url',
      title: 'Homepage featured link',
      description: 'A link to a page on your website. This will be shown on the homepage',
      group: 'homepage',
    }
  ],
}
