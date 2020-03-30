import React from "react"
import styles from "./projects.module.scss"
import { useStaticQuery, graphql, Link } from "gatsby"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { posttype: { eq: "project" } } }
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
              description
              company
              posttype
            }
          }
        }
      }
    }
  `)

  const projects = data.allMarkdownRemark.edges

  return (
    <section className={styles.projectList}>
      <h2>Case Studies</h2>
      {projects.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <Link to={node.fields.slug} className={styles.projectLink}>
            <h3>{node.frontmatter.company}</h3>
            <h4>{title}</h4>
            <span className={styles.projectLinkAction}>
              Read the Case Study
            </span>
          </Link>
        )
      })}
    </section>
  )
}

export default Projects
