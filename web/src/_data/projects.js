const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const groq = require('groq')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generateProject (project) {
  return {
    ...project,
    excerpt: BlocksToMarkdown(project.excerpt, { serializers, ...client.config() }),
    credits: BlocksToMarkdown(project.credits, { serializers, ...client.config() }),
    description: BlocksToMarkdown(project.description, { serializers, ...client.config() }),
    body: BlocksToMarkdown(project.body, { serializers, ...client.config() }),
  }
}

async function getProjects() {
  // Learn more: https://www.sanity.io/docs/data-store/how-queries-work
  const filter = groq`*[_type == "project" && defined(slug)]`
  const projection = groq`{
    _id,
    title,
    slug,
    featuredOrder,
    excerpt,
    mainImage,
    credits,
    description,
    body[]{
      ...,
      children[]{
        ...,
        // Join inline reference
        _type == "authorReference" => {
          // check /studio/documents/authors.js for more fields
          "name": @.author->name,
          "slug": @.author->slug
        }
      }
    },
    "authors": authors[].author->,
    categories[] -> {
      title,
      description,
      "slug": slug.current,
    },
    imageGallery,
  }`
  
  const query = [filter, projection].join(' ')
  const docs = await client.fetch(query).catch(err => console.error(err))
  const reducedDocs = overlayDrafts(hasToken, docs)
  const prepareProjects = reducedDocs.map(generateProject)
  return prepareProjects
}

module.exports = getProjects
