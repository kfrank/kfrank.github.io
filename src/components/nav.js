import React from "react"
import styles from "./nav.module.scss"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            authorFirst
            authorLast
          }
        }
      }
    `}
    render={data => (
      <header
        className={styles.globalHeader}
        data-sal="slide-down"
        data-sal-duration="500"
      >
        <h1>
          <Link>
            <span>{data.site.siteMetadata.authorFirst}</span>
            <span>{data.site.siteMetadata.authorLast}</span>
          </Link>
        </h1>
        <nav className={styles.navFirst}>
          <Link activeClassName="Link--is-active" to="/work">
            Work
          </Link>
          <Link activeClassName="Link--is-active" to="/writing">
            Writing
          </Link>
        </nav>
        <nav className={styles.navSecond}>
          <Link activeClassName="Link--is-active" to="/about">
            About
          </Link>
          <Link activeClassName="Link--is-active" to="/contact">
            Contact
          </Link>
        </nav>
      </header>
    )}
  />
)
