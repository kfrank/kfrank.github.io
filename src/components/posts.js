import React from "react"
import styles from "./posts.module.scss"
import { useStaticQuery, graphql, Link } from "gatsby"

const Posts = () => {
  const data = useStaticQuery(graphql`
    query PostsQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { posttype: { eq: "blog" } } }
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
              posttype
            }
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges

  return (
    <section className={styles.postList}>
      <h2 data-sal="slide-down" data-sal-duration="500">
        Writing
      </h2>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <Link to={node.fields.slug} className={styles.postLink}>
            <h3>{title}</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
            <span className={styles.postLinkAction}>Read the Article</span>
          </Link>
        )
      })}
      <Link to="/writing">View all articles</Link>
    </section>
  )
}

export default Posts
