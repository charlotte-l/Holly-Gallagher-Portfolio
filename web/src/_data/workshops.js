const groq = require("groq");
const client = require("../utils/sanityClient");
const BlocksToMarkdown = require("@sanity/block-content-to-markdown");
const serializers = require("../utils/serializers");

function parseBody(workshop) {
  return {
    ...workshop,
    body: BlocksToMarkdown(workshop.body, { serializers, ...client.config() }),
  };
}

module.exports = async function () {
  const res = await client
    .fetch(
      groq`
    *[_id == "workshops"]{
      ...,
    }[0]
  `
    )
    .catch((err) => console.error(err));

  const workshops = parseBody(res);
  return workshops;
};
