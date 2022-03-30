const BlocksToMarkdown = require("@sanity/block-content-to-markdown");
const groq = require("groq");
const client = require("../utils/sanityClient.js");
const serializers = require("../utils/serializers");
const overlayDrafts = require("../utils/overlayDrafts");
const hasToken = !!client.config().token;

function generateCategory(category) {
  let formattedPosts = category.posts.map((post) => {
    return {
      ...post,
      excerpt: BlocksToMarkdown(post.excerpt, { serializers, ...client.config() }),
      body: BlocksToMarkdown(post.body, { serializers, ...client.config() }),
    };
  });

  return {
    ...category,
    posts: formattedPosts,
  };
}

async function getCategories() {
  const filter = groq`*[_type == "category"]`;
  const projection = groq`{
    // grab category data
    ...,
    // grab posts that reference category id
   "posts": *[_type == "post" && references(^._id)]{
      title,
      slug,
      mainImage,
      body,
      publishedAt,
      excerpt,
      "categories": categories[]{
        "title": ^->title,
        "slug": ^->slug.current
      }
    },
    "projects": *[_type == "project" && references(^._id)]{
      title,
      slug,
      mainImage,
      body,
      excerpt,
      "categories": categories[]{
        "title": ^->title,
        "slug": ^->slug.current
      }
    },
  }`;
  const query = [filter, projection].join(" ");
  const docs = await client.fetch(query).catch((err) => console.error(err));
  const categories = docs.map(generateCategory);
  const reducedCategories = overlayDrafts(hasToken, categories);
  return reducedCategories;
}

module.exports = getCategories;
