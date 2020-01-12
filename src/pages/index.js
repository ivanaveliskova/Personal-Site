import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";

export default function Main({ data, location }) {
  const { blurb, introduction } = data.site.siteMetadata;

  const introText = (
    <div className="Main__text">
      <h3 className="Main__introduction">
        {introduction}
        <span className="is-highlighted">.</span>
      </h3>
      <h3 className="Main__blurb">
        {blurb}
        <span className="is-highlighted">.</span>
      </h3>
    </div>
  );

  return (
    <Layout location={location} headline={introText} className="Main">
      <SEO title="HomePage" />
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        blurb
        introduction
      }
    }
  }
`;
