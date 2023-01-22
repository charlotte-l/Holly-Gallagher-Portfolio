const groq = require("groq");
const client = require('../utils/sanityClient.js')

async function getTheme() {
  return await client.fetch(groq`
    *[_id == "siteSettings"]{
      heroBgColor,
      heroTextColor,
      heroLinkColor,
      bodyBgColor,
      bodyTextColor,
      bodyLinkColor
    }[0]
  `);
}

module.exports = getTheme