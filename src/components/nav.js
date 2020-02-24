import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            author
          }
        }
      }
    `}
    render={data => (
      <header>
        <h1>
          <Link>{data.site.siteMetadata.author}</Link>
        </h1>
        <div className="navLeft">
          <Link activeClassName="Link--is-active" to="/work">
            Work
          </Link>
          <Link activeClassName="Link--is-active" to="/about">
            About
          </Link>
          <Link activeClassName="Link--is-active" to="/writing">
            Writing
          </Link>
        </div>
        <div className="navRight">
          <Link activeClassName="Link--is-active" to="/contact">
            Contact
          </Link>
        </div>
      </header>
    )}
  />
)
