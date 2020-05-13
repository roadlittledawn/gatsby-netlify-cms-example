import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import BreadcrumbBar from '../components/BreadcrumbBar';
import Container from '../components/Container';

export default function BasicDocPageTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  // TODO use graphql to fetch these
  const crumbs = [
    { displayName: 'Explore Data', url: '/explore-data' },
    { displayName: 'GraphQL API', url: '/guides/graphql-api' },
  ];

  return (
    <Layout>
      {/* <BreadcrumbBar crumbs={crumbs} /> */}
      <Container>
        <div className="basicDocPageTemplate-container">
          <div>
            <h1>{frontmatter.title}</h1>
            <div
              className="basicDocPageTemplate-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: {urlPath: {eq: $path}}) {
      html
      frontmatter {
        path
        title
        topics
      }
    }
  }
`;
BasicDocPageTemplate.propTypes = {
  data: PropTypes.object,
};
