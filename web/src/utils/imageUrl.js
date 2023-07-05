const imageUrlBuilder = require('@sanity/image-url')
const sanityClient = require('./sanityClient')

const builder = imageUrlBuilder(sanityClient.config())

function urlFor(source) {
  return builder.image(source)
}

module.exports = urlFor
