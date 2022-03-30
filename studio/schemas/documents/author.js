export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      readOnly: true
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
      media: 'image'
    }
  }
}
