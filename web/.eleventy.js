const { DateTime } = require("luxon");
const htmlmin = require("html-minifier");
const util = require("util");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItLinkAttributes = require("markdown-it-link-attributes");
const pluginCSS = require("eleventy-postcss-extension");
const urlFor = require("./src/utils/imageUrl");
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
  eleventyConfig.addPassthroughCopy("src/images");

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };

  let markdownItLinkAttributesOpts = process.env.ELEVENTY_ENV === "production" ? {
    pattern: /^(?!(https:\/\/holly-gallagher-portfolio\.com|#)).*$/gm,
    attrs: {
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  } : {};

  let opts = {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#",
  };

  eleventyConfig.setLibrary("md", markdownIt(options).use(markdownItAnchor, opts));

  eleventyConfig.addNunjucksAsyncShortcode("image", shortcodes.imageShortcode);

  eleventyConfig.addShortcode("imageUrlFor", (image, width = "400") => {
    return urlFor(image).width(width).auto("format").url();
  });

  eleventyConfig.addShortcode("croppedUrlFor", (image, width, height) => {
    return urlFor(image).width(width).height(height).auto("format").url();
  });

  eleventyConfig.addFilter("dump", (obj) => {
    return util.inspect(obj);
  });

  eleventyConfig.addNunjucksGlobal("currentYear", new Date().getFullYear());

  eleventyConfig.addNunjucksAsyncFilter("jsmin", filters.jsmin);

  eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));

  eleventyConfig.addPlugin(svgSprite, {
    path: "./src/images/svg",
  });

  eleventyConfig.addFilter("markdownify", (value) => {
    const md = new markdownIt(options).use(markdownItLinkAttributes, markdownItLinkAttributesOpts);
    return md.render(value);
  });

  eleventyConfig.addFilter("excerpt", (post) => {
    const content = post.replace(/(<([^>]+)>)/gi, "");
    return content.substr(0, content.lastIndexOf(" ", 250)) + "...";
  });

  eleventyConfig.addFilter("addNbsp", (str) => {
    if (!str) {
      return;
    }
    let title = str.replace(/((.*)\s(.*))$/g, "$2&nbsp;$3");
    title = title.replace(/"(.*)"/g, '\\"$1\\"');
    return title;
  });

  eleventyConfig.addFilter("pluck", function (arr, value, attr) {
    return arr.filter((item) => item.data[attr] === value);
  });

  eleventyConfig.addTransform("htmlmin", function(content) {
    if( this.outputPath && this.outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
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
