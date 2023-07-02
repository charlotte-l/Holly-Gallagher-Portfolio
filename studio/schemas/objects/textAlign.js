export default {
  name: 'textAlign',
  type: 'object',
  title: 'Aligned Text',
  initialValue: {
    alignment: 'left'
  },
  fields: [
    {
      title: 'Content',
      name: 'text',
      type: 'bodyPortableText'
    },
    {
      title: 'Alignment',
      name: 'alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
          { title: 'Center', value: 'center' }
        ]
      }
    }
  ],
  preview: {
    select: {
      title: 'text'
    },
    prepare(selection) {
      const block = (selection.title || []).find(block => block._type === 'block')
      return {
        title: block
          ? block.children
              .filter(child => child._type === 'span')
              .map(span => span.text)
              .join('')
          : 'Empty alignment block'
      }
    }
  }
}
