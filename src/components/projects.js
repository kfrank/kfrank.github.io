import React from "react"
import styles from "./projects.module.scss"
import { useStaticQuery, graphql, Link } from "gatsby"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { posttype: { eq: "project" } } }
        limit: 3
      ) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              company
              posttype
              intro
            }
          }
        }
      }
    }
  `)

  const projects = data.allMarkdownRemark.edges

  return (
    <section className={styles.projectList}>
      <header
        data-sal="slide-down"
        data-sal-duration="500"
        data-sal-delay="300"
      >
        <h2 className="split-text">
          <span>Case</span> <span>Studies</span>
        </h2>
        <Link to="/work">View all Work</Link>
      </header>
      {projects.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <Link
            to={node.fields.slug}
            className={styles.projectLink}
            data-sal="slide-down"
            data-sal-duration="500"
            data-sal-delay="100"
          >
            <h3>{node.frontmatter.company}</h3>
            <h4>{title}</h4>
            <p>{node.frontmatter.intro}</p>
            {/* <span className={styles.projectLinkAction}>
              Read the Case Study
            </span> */}
          </Link>
        )
      })}
    </section>
  )
}

export default Projects
