module.exports = {
  siteMetadata: {
    title: `New Relic Developers`,
    description: `Do more on our platform and make New Relic your own with APIs, SDKs, code snippets, tutorials, and more developer tools.`,
    author: `New Relic`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-json-output`,
      options: {
        siteUrl: 'http://localhost.com:8000',
        graphQLQuery: `
        {
          allMarkdownRemark {
            edges {
              node {
                html
                fields { urlPath }
                frontmatter {
                  title
                  path
                }
              }
            }
          }
        }
      `,
      serialize: results => results.data.allMarkdownRemark.edges.map(({ node }) => ({
        path: node.fields.urlPath, // MUST contain a path
        title: node.frontmatter.title,
        html: node.html,
      })),
      serializeFeed: results => results.data.allMarkdownRemark.edges.map(({ node }) => ({
        id: node.fields.urlPath,
        url: 'http://localhost:8000' + node.fields.urlPath,
        title: node.frontmatter.title,
      })),
      nodesPerFeedFile: 100,
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
    },
  ],
};
