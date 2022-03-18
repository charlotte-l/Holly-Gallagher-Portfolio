export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'This is the page where your profile will be',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image'
    },
    {
      name: 'bio',
      type: 'bioPortableText',
      title: 'Biography'
    },
    {
      name: 'key_experience',
      type: 'aboutPortableText',
      title: 'Key Experience'
    },
    {
      name: 'training_support',
      type: 'aboutPortableText',
      title: 'Training and Support'
    },
    {
      name: 'courses_institutions',
      type: 'table',
      title: 'Courses and Institutions'
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
}
