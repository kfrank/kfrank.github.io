import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default class ProjectList extends React.Component {
  render() {
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const prevPageLink = "/work/" + prevPage
    const nextPage = (currentPage + 1).toString()
    const nextPageLink = "/work/" + nextPage
    const posts = this.props.data.allMarkdownRemark.edges
    return (
      <Layout>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return <div key={node.fields.slug}>{title}</div>
        })}

        {!isFirst && (
          <Link to={prevPageLink} rel="prev">
            ← Previous Page
          </Link>
        )}
        {!isLast && (
          <Link to={nextPageLink} rel="next">
            Next Page →
          </Link>
        )}
      </Layout>
    )
  }
}

export const projectListQuery = graphql`
  query projectListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { posttype: { eq: "project" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
