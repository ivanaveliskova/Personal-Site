import React from "react"

import "./Footer.scss"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="Footer">
      <span className="Footer__text">&copy; {year} Ivana Veliskova</span>
      <span className="Footer__text">Made with love in Gatsby</span>
    </footer>
  )
}
