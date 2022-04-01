const imageUrl = require("./imageUrl");

// Learn more on https://www.sanity.io/guides/introduction-to-portable-text
module.exports = {
  types: {
    authorReference: ({ node }) => `[${node.name}](/authors/${node.slug.current})`,
    code: ({ node }) => "```" + node.language + "\n" + node.code + "\n```",
    mainImage: ({ node }) => `![${node.alt}](${imageUrl(node).width(600).url()})`,
    table: ({ rows }) => {
      let tableStr = '\n|||\n| --- | --- |\n';
      rows.forEach(row => {
        let rowStr = '';
        row.cells.forEach(cell => {
          rowStr += `| ${cell} `
        })
        rowStr += `|\n`
        tableStr += rowStr;
      });
      return tableStr.slice(0, -1);
    },
    youtube: ({node}) => `<iframe class="w-full aspect-video mb-4" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="680" height="380" src="https://www.youtube.com/embed/${node.url.split('?v=')[1]}"></iframe>`,
  },
};
