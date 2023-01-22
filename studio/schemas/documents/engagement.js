export default {
  name: 'engagement',
  type: 'document',
  title: 'Engagement',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Page content'
    }
  ]
}
