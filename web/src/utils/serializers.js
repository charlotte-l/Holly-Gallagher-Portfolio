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
  },
};
