const imageUrl = require("./imageUrl");
const BlocksToMarkdown = require("@sanity/block-content-to-markdown");
const client = require("../utils/sanityClient");
const config = client.config();

// Learn more on https://www.sanity.io/guides/introduction-to-portable-text
const serializers = {
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
    textAlign: ({ node }) => `<div style="text-align: ${node.alignment}">${BlocksToMarkdown(node.text, { serializers, ...client.config() })}</div>`,
  },
  marks: {
    color: (props) => `<span style="color: ${props.mark.hex}">${props.children}</span>`,
    assetReference: (props) => {
      const [_file, id, extension] = props.mark.file.asset._ref.split('-');
      return `[${props.children}](https://cdn.sanity.io/files/${config.projectId}/${config.dataset}/${id}.${extension}){target="_blank"}`;
    },
  }
};

module.exports = serializers;
