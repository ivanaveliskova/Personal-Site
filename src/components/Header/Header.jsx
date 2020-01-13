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
  // {
  //   title: "Blog",
  //   url: "/blog",
  // },
];

const socialItems = [
  {
    name: "github",
    icon: Github,
    url: "https://www.github.com/",
  },
  {
    name: "codepen",
    icon: Codepen,
    url: "https://www.codepen.io/",
  },
  {
    name: "twitter",
    icon: Twitter,
    url: "https://www.twitter.com/",
  },
  {
    name: "linkedin",
    icon: LinkedIn,
    url: "https://www.linkedin.com/in/",
  },
  {
    name: "instagram",
    icon: Instagram,
    url: "https://www.instagram.com/",
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
  const { author, social } = data.site.siteMetadata;

  const rootPath = `${__PATH_PREFIX__}/`;

  const imageClasses = ClassNames("Header__image", {
    "is-small": location.pathname !== rootPath,
  });

  const headerClasses = ClassNames("Header__main", {
    "is-grid": location.pathname !== rootPath,
  });

  const navItems = menuItems.map(item => {
    const navClasses = ClassNames("Header__link", {
      "is-selected": location.pathname === item.url,
    });
    return (
      <Link to={item.url} className={navClasses}>
        {item.title}
      </Link>
    );
  });

  const socialIcons = socialItems.map(socialItem => {
    return (
      <a
        className="Header__icon-link"
        href={`${socialItem.url}${social[socialItem.name]}`}
      >
        <socialItem.icon className="Header__icon" />
      </a>
    );
  });

  return (
    <header className="Header">
      <nav className="Header__nav">{navItems}</nav>
      <div className={headerClasses}>
        <h1 className="Header__greeting">
          Hi<span className="is-highlighted">_</span>
        </h1>
        <div className="Header__image-and-social">
          <Image
            className={imageClasses}
            fluid={fluid}
            alt={author}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
          <div className="Header__social">{socialIcons}</div>
        </div>
        {headline}
      </div>
    </header>
  );
}
