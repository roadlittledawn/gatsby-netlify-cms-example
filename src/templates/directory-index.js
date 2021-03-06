import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { FaFileAlt, FaFolder } from "react-icons/fa";

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
    path: m.fields.slug,
    display: m.frontmatter.title,
    isDir: false
  }}));
  return (
    <Layout>
      <SEO title={`${props.pageContext.slug}`} />
      <h1>Generated Index Page - {`${displayName}`}</h1>
      <div className="directoryListingWrapper">
        <div className="directoryListingRow">
          <FaFolder />
          <Link to={`${props.uri + '/../'}`}>..</Link>
        </div>
        {listings.map((listing)=>{
          return (
            <div className="directoryListingRow" key={`${listing.path + ((new Date()).getTime())}`}>
              {listing.isDir ? <FaFolder /> : <FaFileAlt />}
              {'  '}
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
