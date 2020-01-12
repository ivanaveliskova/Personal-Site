import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";

export default function AboutMe({ data, location }) {
  const { aboutMe } = data.site.siteMetadata;
  const headline = (
    <div className="About__text">
      {aboutMe}
      <span className="is-highlighted">.</span>
    </div>
  );
  return (
    <Layout location={location} headline={headline} className="About">
      <SEO title="About Me" />
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        aboutMe
      }
    }
  }
`;
