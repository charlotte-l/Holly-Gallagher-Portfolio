export default {
  name: 'workshops',
  type: 'document',
  title: 'Workshops',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The main heading on the page'
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Page content'
    }
  ]
}
