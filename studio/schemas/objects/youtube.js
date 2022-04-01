export default {
  name: 'youtube',
  type: 'object',
  title: 'YouTube',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'YouTube video URL'
    }
  ],
  preview: {
  	select: {
  		url: 'url',
  	},
    prepare ({url}) {
        return {
            title: url,
            url,
            imageUrl: `http://i1.ytimg.com/vi/${url.split('?v=')[1]}/default.jpg`
        }
    }
  }
}