import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default (props) => {
  const displayName = props.pageContext.slug;
  const children = props.pageContext.meta.children;
  // Compile listings - subdirectories and files
  let listings = [];
  listings = listings.concat(children.dirs.map(function(d){return {
    path: '/' + d.relativePath,
    display: '/' + d.name,
    isDir: true
  }}));
  listings = listings.concat(children.md.map(function(m){return {
    path: m.fields.urlPath,
    display: m.frontmatter.title,
    isDir: false
  }}));
  return (
    <Layout>
      <SEO title={`${props.pageContext.slug}`} />
      <h1>Generated Index Page - {`${displayName}`}</h1>
      <div className="directoryListingWrapper">
        <div className="directoryListingRow">
          <i className="material-icons">folder</i>
          <Link to={`${document.location.pathname + '/../'}`}>..</Link>
        </div>
        {listings.map((listing)=>{
          return (
            <div className="directoryListingRow" key={`${listing.path + ((new Date()).getTime())}`}>
              <i className="material-icons">{listing.isDir ? 'folder' : 'description'}</i>
              <Link to={`${listing.path}`}>
                {listing.display}
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
