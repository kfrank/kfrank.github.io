import React from "react"
import styles from "./hero.module.scss"
// import HeroImg from "../images/klare.jpg"
import { StaticQuery, graphql } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeroQuery {
        site {
          siteMetadata {
            intro
            description
          }
        }
      }
    `}
    render={data => (
      <header className={`relative pt-12 ${styles.hero}`}>
        <div
          className={`grid container relative items-center justify-between mx-auto px-3 ${styles.max}`}
        >
          <div className={`mb-8 ${styles.heroContent}`}>
            <h1 className={`mb-4`}>{data.site.siteMetadata.intro}</h1>
            <p className="max-w-xl">{data.site.siteMetadata.description}</p>
          </div>
          <figure className="absolute top-0 right-0">
            {/* <img src={HeroImg} alt="Klare" /> */}
          </figure>
        </div>
      </header>
    )}
  />
)
