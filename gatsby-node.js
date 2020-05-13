const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            topics
            templateKey
            path
            contentType
          }
          parent {
            ... on File {
              relativePath
            }
          }
        }
      }
    }
  }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const relativePath = node.parent.relativePath.split('.')
    createPage({
      path: node.frontmatter.path || `/${relativePath[0]}`,
      component: path.resolve(
        `src/templates/${node.frontmatter.templateKey}.js`
      ),
      context: {}, // additional data can be passed via context
    });
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    let slug = node.frontmatter.path || createFilePath({ node, getNode, trailingSlash: false })
    createNodeField({
      node,
      name: 'urlPath',
      value: slug,
    })
  }
}