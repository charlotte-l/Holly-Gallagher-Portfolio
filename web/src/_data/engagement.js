const groq = require("groq");
const client = require("../utils/sanityClient");
const BlocksToMarkdown = require("@sanity/block-content-to-markdown");
const serializers = require("../utils/serializers");

function parseBody(content) {
  return {
    ...content,
    body: BlocksToMarkdown(content.body, { serializers, ...client.config() }),
  };
}

module.exports = async function () {
  const res = await client
    .fetch(
      groq`
    *[_id == "engagement"]{
      ...,
    }[0]
  `
    )
    .catch((err) => console.error(err));

  const engagement = parseBody(res);
  return engagement;
};
