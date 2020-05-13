# Prototype for NR Docs
Prototype for NR docs site. Uses Gatsby to transform markdown files to generate static site. Deploys to Netlify for now.

## 🚀 Quick start

Navigate into your new site’s directory and start it up.

```shell
git clone git@github.com:roadlittledawn/gatsby-netlify-cms-example.git
cd gatsby-netlify-cms-example
npm install
npm start
```

Your site is now running at `http://localhost:8000`!

# TODO
* Add sitewide nav menu
* Add redirects
* Add [gatsby-plugin-json-output](https://www.gatsbyjs.org/packages/gatsby-plugin-json-output/) for JSON files and feeds
* Add sample content from all contnet types on current site
* Add field validation for certain graphql/frontmatter types
  * `path`: ensure unique. decide if user should supply or automatically generated based on directory? use default gatsby pattern (slugified directory and filename path) if not specified
* Add / figure out how translation (smartling)
* Add categories in frontmatter (category pages too?)
* Use frontmatter to set `<meta>` and other related tags (swiftype, SEO, hreflang links)