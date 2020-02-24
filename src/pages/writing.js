import React from "react"
import { graphql } from "gatsby"

import Posts from "../components/posts"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Work extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="My projects & posts" />
        <Posts />
      </Layout>
    )
  }
}

export default Work

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
