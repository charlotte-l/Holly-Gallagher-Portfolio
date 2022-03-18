const { DateTime } = require("luxon");
const util = require("util");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginCSS = require("eleventy-postcss-extension");
const filters = require("./src/utils/filters");
const shortcodes = require("./src/utils/shortcodes");
const svgSprite = require("eleventy-plugin-svg-sprite");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/styles");
  eleventyConfig.addPlugin(pluginCSS);

  eleventyConfig.addFilter("debug", function (value) {
    return util.inspect(value, { compact: false });
  });

  eleventyConfig.addPassthroughCopy({ "src/fonts": "styles/fonts" });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toDateString();
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };
  let opts = {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#",
  };

  eleventyConfig.setLibrary("md", markdownIt(options).use(markdownItAnchor, opts));

  eleventyConfig.addNunjucksAsyncShortcode("image", shortcodes.imageShortcode);
  eleventyConfig.addNunjucksAsyncFilter("jsmin", filters.jsmin);

  eleventyConfig.addPlugin(svgSprite, {
    path: "./src/images/svg",
  });

  eleventyConfig.addFilter("markdownify", function (value) {
    const md = new markdownIt(options);
    return md.render(value);
  });
  return {
    templateFormats: ["md", "njk", "html", "liquid"],

    pathPrefix: "/",

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: "_site",
    },
  };
};
