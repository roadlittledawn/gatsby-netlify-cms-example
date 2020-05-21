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
* Add automatic directory index pages for each directory
  * Change index.md template to use its own template
* Add redirects
* Use frontmatter to set `<meta>` and other related tags (swiftype, SEO, hreflang links)
* Add field validation for certain graphql/frontmatter types
  * `path`: ensure unique. decide if user should supply or automatically generated based on directory? use default gatsby pattern (slugified directory and filename path) if not specified
* Add / figure out how translation (smartling)

# Notes to self (or whomever is reading)
* I'm inclined to not make API doc its own content type, because many fields are HTML fields and it won't really work with frontmatter syntax.
* Site nav: Dynamically navigate through all directories OR links off to landing pages?
* Decision: How much of frontmatter is optional / required? What are defaults if any?