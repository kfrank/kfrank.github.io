import React from "react"
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
    <section>
      <h2>Case Studies</h2>
      {projects.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <>
            <div key={node.fields.slug}>
              <h3>
                <Link to={node.fields.slug}>{title}</Link>
              </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          </>
        )
      })}
      <Link to="/work">View all case studies </Link>
    </section>
  )
}

export default Projects
