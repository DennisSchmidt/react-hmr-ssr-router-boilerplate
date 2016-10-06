import React from 'react'
import Helmet from "react-helmet"

import { Link } from 'react-router'

const Layout = ({
  children
}) => (
  <div>
    <Helmet
      title="Layout title"
      meta={[
        { name: "description", content: "Layout description" },
        { name: "robots", content: "noodp, noydir" },
        { name: "lang", content: "de" },
        { "http-equiv": "Content-Type", content: "text/html; charset=UTF-8" }
      ]}
    />
    <nav>
      <ul>
        <li><Link to="/">Welcome</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/imprint">Imprint</Link></li>
        <li><Link to="/not-matching-route">Not Matching Route</Link></li>
      </ul>
      <hr />
    </nav>
    <main>{children}</main>
    <footer>Footer</footer>
  </div>
)

export default Layout
