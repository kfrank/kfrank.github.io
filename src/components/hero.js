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
      <header className={styles.hero}>
        <div className={styles.max}>
          <div className={styles.heroContent}>
            <h1>{data.site.siteMetadata.intro}</h1>
            <p>{data.site.siteMetadata.description}</p>
          </div>
          <figure>{/* <img src={HeroImg} alt="Klare" /> */}</figure>
        </div>
      </header>
    )}
  />
)
