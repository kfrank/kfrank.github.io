import React from "react"
import styles from "./posts.module.scss"
import { useStaticQuery, graphql, Link } from "gatsby"

const Posts = () => {
  const data = useStaticQuery(graphql`
    query PostsQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { posttype: { eq: "blog" } } }
        limit: 4
      ) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM YYYY")
              title
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
      <header
        data-sal="slide-down"
        data-sal-duration="500"
        data-sal-delay="200"
      >
        <h2 className="split-text">
          <span>Recent</span> <span>Articles</span>
        </h2>
        <Link to="/writing">View all Writing</Link>
      </header>
      <main>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Link
              to={node.fields.slug}
              className={styles.postLink}
              data-sal="slide-down"
              data-sal-duration="500"
              data-sal-delay="100"
            >
              <time>{node.frontmatter.date}</time>
              <h3>{title}</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
              <span className={styles.postLinkAction}>Read More</span>
            </Link>
          )
        })}
      </main>
    </section>
  )
}

export default Posts
