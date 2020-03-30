import React from "react"
import styles from "./hero.module.scss"
import HeroImg from "../images/klare.jpg"
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
        <div className={styles.heroContent}>
          <h1
            data-sal="slide-down"
            data-sal-duration="500"
            data-sal-delay="100"
          >
            {data.site.siteMetadata.intro}
          </h1>
          <p data-sal="slide-down" data-sal-duration="500" data-sal-delay="200">
            {data.site.siteMetadata.description}
          </p>
        </div>
        <figure>
          <img src={HeroImg} alt="Klare" />
        </figure>
      </header>
    )}
  />
)
