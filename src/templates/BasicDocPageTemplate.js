import React, { useState } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import pages from '../data/primary-nav.json';
import BreadcrumbBar from '../components/BreadcrumbBar';
import Container from '../components/Container';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

export default function BasicDocPageTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data; // data.mdx holds your post data
  const { frontmatter, body } = mdx;
  const [isOpen, setIsOpen] = useState(false);

  // TODO use graphql to fetch these
  const crumbs = [
    { displayName: 'Explore Data', url: '/explore-data' },
    { displayName: 'GraphQL API', url: '/guides/graphql-api' },
  ];

  return (
    <Layout>
      {/* <BreadcrumbBar crumbs={crumbs} /> */}
      <Container className="ReferenceTemplate">
        <Sidebar
          pages={pages}
          isOpen={isOpen}
          toggle={() => setIsOpen(!isOpen)}
        />
        <div className="ReferenceTemplate-content">
          <div>
            <h1>{frontmatter.title}</h1>
            <div className="guideTemplate-content">
              <MDXProvider>
                <MDXRenderer>{body}</MDXRenderer>
              </MDXProvider>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
export const pageQuery = graphql`
  query($path: String!) {
    mdx(fields: {urlPath: {eq: $path}}) {
      body
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
