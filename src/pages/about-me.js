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
          There would be no cuts, real people in there, real tellers. If ever I
          try to predict, I'm sure I will be instantly humbled. You tell me
          where we start, where we're going, where we're going afterwards. I
          went through puberty in a theme park. There's a hundred thousand
          streets in this city.
        </p>
        <p>
          And its important to know that there are some changes you can't
          control and that there are others you can. Because I was
          home-schooled, I didn't have a lot of friends and I did ballet, which
          was always just girls. You just have to hang out in places that are
          more interesting than you are. I wrote you everyday for a year. I was
          very excited.
        </p>
        <p>
          I think American news is pretty tragic in general. Because for me,
          they're all me. You have a shelf life as an actor, so you have to find
          another way to express yourself. He said that I was going to get to
          rob the bank for real. You get a new one.
        </p>

        <p>
          I'm really not good at knowing what people want, because don't have
          that talent. I'm not a good enough actor to become a character. I
          drive. I think like a girl, I think. I relate to these characters
          because aspects of their personality are like me.
        </p>

        <p>
          Anything happens in that five minutes, then I'm yours, no matter what.
          I give you five minutes when we get there. You just tell me what you
          want, and I'm gonna be that for you. The pictures which will be
          accompanying this interview are basically of me in tight wet T-shirts
          and tiny leather jackets going around in the rain and pretending that
          I'm a lot cooler than I am. I love being Canadian. I think growing up
          in Canada gives you a world perspective that I certainly enjoy.
        </p>

        <p>
          There would be no cuts, real people in there, real tellers. If ever I
          try to predict, I'm sure I will be instantly humbled. You tell me
          where we start, where we're going, where we're going afterwards. I
          went through puberty in a theme park. There's a hundred thousand
          streets in this city.
        </p>
        <p>
          And its important to know that there are some changes you can't
          control and that there are others you can. Because I was
          home-schooled, I didn't have a lot of friends and I did ballet, which
          was always just girls. You just have to hang out in places that are
          more interesting than you are. I wrote you everyday for a year. I was
          very excited.
        </p>
        <p>
          I think American news is pretty tragic in general. Because for me,
          they're all me. You have a shelf life as an actor, so you have to find
          another way to express yourself. He said that I was going to get to
          rob the bank for real. You get a new one.
        </p>

        <p>
          I'm really not good at knowing what people want, because don't have
          that talent. I'm not a good enough actor to become a character. I
          drive. I think like a girl, I think. I relate to these characters
          because aspects of their personality are like me.
        </p>

        <p>
          Anything happens in that five minutes, then I'm yours, no matter what.
          I give you five minutes when we get there. You just tell me what you
          want, and I'm gonna be that for you. The pictures which will be
          accompanying this interview are basically of me in tight wet T-shirts
          and tiny leather jackets going around in the rain and pretending that
          I'm a lot cooler than I am. I love being Canadian. I think growing up
          in Canada gives you a world perspective that I certainly enjoy.
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
