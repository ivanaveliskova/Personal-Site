import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";

import "../sass/About.scss";

export default function AboutMe({ data, location }) {
  const { aboutMe } = data.site.siteMetadata;
  const headline = (
    <div className="Header__text">
      {aboutMe}
      <span className="is-highlighted">.</span>
    </div>
  );
  return (
    <Layout location={location} headline={headline} className="About">
      <SEO title="About Me" />
      <div className="About__content">
        <p>
          👩🏼‍💻Hey there! I'm currently a Front End Senior Software Engineer at
          Guru. I get to work mostly in React.js and Sass working on our webapp
          and browser extension. My biggest focus is writing clean and DRY code.
          I have experience with accessibility and giving users a great
          experience.
        </p>
        <p>
          👩🏼‍💻Before Guru, I was a Front End Developer at a company formerly known
          as WebLinc, LLC (now WorkArea), where I worked in HAML, Sass,
          JavaScript and jQuery, and I occasionally dabbled in Ruby on Rails.
          Recently, they open sourced their product and one of the Ruby Gems I
          mostly built still exists and has most of my original code (even
          though someone else uploaded it to GitHub, my name is still in the
          author line of the gemspec)!
        </p>
        <p>
          👩🏼‍🏫I love to speak and write about my journey into software
          development, my experiences as I advance within my career, and the
          occasional dev talk. I previously taught an advanced HTML and CSS
          concepts class as well as an intro to jQuery class. In November 2018,
          I co-hosted a talk on how to build a blog website using Gatsby!
        </p>

        <p>
          👫🐕👩🏼‍🍳When I'm not developing, I love to hike with my husband (who is
          also a developer) and our wonderful dog, &Scaron;tafl&iacute;k, or you
          can find me buried in a cookbook looking for the next thing I want to
          bake.
        </p>
      </div>
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
