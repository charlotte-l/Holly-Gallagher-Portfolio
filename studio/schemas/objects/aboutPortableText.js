export default {
  name: 'aboutPortableText',
  type: 'array',
  title: 'Body',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Number', value: 'number' }
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' }
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url'
              }
            ]
          }
        ]
      },
    },
  ]
}
