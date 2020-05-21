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
                frontmatter {
                  title
                  path
                }
                html
                fields {
                  urlPath
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
        url: `http://localhost:8000${node.fields.urlPath}/index.json`,
        title: node.frontmatter.title,
      })),
      nodesPerFeedFile: 100,
      feedName: 'allContent'
      }
    },
    {
      resolve: `gatsby-plugin-json-output`,
      options: {
        siteUrl: 'http://localhost.com:8000',
        graphQLQuery: `
        {
          allMarkdownRemark(filter: {frontmatter: {contentType: {eq: "attributeDefinition"}}}) {
            edges {
              node {
                frontmatter {
                  title
                  path
                  dataSources
                  dataTypes
                  shortDescription
                  unitOfMeasure
                }
                html
                fields {
                  urlPath
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
        url: `http://localhost:8000${node.fields.urlPath}/index.json`,
        title: node.frontmatter.title,
        dataSources: node.frontmatter.dataSources,
        dataTypes: node.frontmatter.dataTypes,
        shortDescription: node.frontmatter.shortDescription,
        unitOfMeasure: node.frontmatter.unitOfMeasure,
        html: node.html
      })),
      nodesPerFeedFile: 100,
      feedName: 'attributeDefinitions'
      }
    },
    {
      resolve: `gatsby-plugin-json-output`,
      options: {
        siteUrl: 'http://localhost.com:8000',
        graphQLQuery: `
        {
          allDirectory(filter: {relativeDirectory: {eq: "docs"}}) {
            edges {
              node {
                name
                id
                relativePath
              }
            }
          }
        }
      `,
      serializeFeed: results => results.data.allDirectory.edges.map(({ node }) => ({
        id: node.id,
        name: node.name,
        path: node.relativePath
      })),
      nodesPerFeedFile: 100,
      feedName: 'docs-folders'
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
    },
  ],
};
