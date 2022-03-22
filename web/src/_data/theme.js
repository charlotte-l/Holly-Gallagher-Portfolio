const groq = require("groq");
const client = require('../utils/sanityClient.js')

async function getTheme() {
  return await client.fetch(groq`
    *[_id == "siteSettings"]{
      mainColor,
      secondaryColor,
      textColor,
    }[0]
  `);
}

module.exports = getTheme