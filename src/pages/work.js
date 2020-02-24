import React from "react"
import { graphql } from "gatsby"

import Projects from "../components/projects"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Work extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="My projects & posts" />
        <Projects />
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
