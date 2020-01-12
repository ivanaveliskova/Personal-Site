import React from "react";

import Love from "../../../content/assets/svgs/love.svg";
import Gatsby from "../../../content/assets/svgs/gatsby.svg";

import "./Footer.scss";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="Footer">
      <span className="Footer__text">&copy; {year} Ivana Veliskova</span>
      <span className="Footer__text">
        Made with <Love className="Footer__icon Footer__icon--love" /> in{" "}
        <a href="https://www.gatsbyjs.org">
          Gatsby <Gatsby className="Footer__icon Footer__icon--gatsby" />
        </a>
      </span>
    </footer>
  );
}
