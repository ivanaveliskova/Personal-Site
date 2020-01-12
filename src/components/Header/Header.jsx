import React from "react";
import Image from "gatsby-image";
import { useStaticQuery, graphql, Link } from "gatsby";
import ClassNames from "classnames";

import "./Header.scss";

import Github from "../../../content/assets/svgs/github.svg";
import Codepen from "../../../content/assets/svgs/codepen.svg";
import Twitter from "../../../content/assets/svgs/twitter.svg";
import LinkedIn from "../../../content/assets/svgs/linkedin.svg";
import Instagram from "../../../content/assets/svgs/instagram.svg";

const menuItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About Me",
    url: "/about-me",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

const socialItems = [
  {
    name: "github",
    icon: Github,
  },
  {
    name: "codepen",
    icon: Codepen,
  },
  {
    name: "twitter",
    icon: Twitter,
  },
  {
    name: "linkedin",
    icon: LinkedIn,
  },
  {
    name: "instagram",
    icon: Instagram,
  },
];

export default function Header({ headline, location }) {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
            linkedin
            github
            instagram
            codepen
          }
        }
      }
    }
  `);

  const { fluid } = data.avatar.childImageSharp;
  const { author } = data.site.siteMetadata;

  const rootPath = `${__PATH_PREFIX__}/`;

  const imageClasses = ClassNames("Header__image", {
    ["is-small"]: location.pathname !== rootPath,
  });

  const navItems = menuItems.map(item => {
    return (
      <Link to={item.url} className="Header__link">
        {item.title}
      </Link>
    );
  });

  return (
    <header className="Header">
      <nav className="Header__nav">{navItems}</nav>
      <div className="Header__main">
        <h1 className="Header__greeting">
          Hi<span className="is-highlighted">_</span>
        </h1>
        <Image
          className={imageClasses}
          fluid={fluid}
          alt={author}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        {headline}
      </div>
    </header>
  );
}
