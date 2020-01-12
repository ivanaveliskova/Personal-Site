import React from "react";
import ClassNames from "classnames";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./Layout.scss";

export default function Layout({ location, headline, children, className }) {
  const classes = ClassNames("Layout", className);

  return (
    <div className={classes}>
      <Header headline={headline} location={location} />
      {Boolean(children.length) && <main>{children}</main>}
      <Footer />
    </div>
  );
}
