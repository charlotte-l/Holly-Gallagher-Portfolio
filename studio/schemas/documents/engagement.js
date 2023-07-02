export default {
  name: 'engagement',
  type: 'document',
  title: 'Engagement',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      initialValue: 'Engagement',
      readOnly: true
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Page content'
    }
  ]
}
