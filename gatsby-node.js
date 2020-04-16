const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const projectPost = path.resolve(`./src/templates/project-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                posttype
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog-list pages
  const blogPosts = result.data.allMarkdownRemark.edges
  const blogPostsPerPage = 12
  const numBlogPages = Math.ceil(blogPosts.length / blogPostsPerPage)
  Array.from({
    length: numBlogPages,
  }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/writing` : `/writing/${i + 1}`,
      component: path.resolve("./src/templates/blog-list-template.js"),
      context: {
        limit: blogPostsPerPage,
        skip: i * blogPostsPerPage,
        numBlogPages,
        currentPage: i + 1,
      },
    })
  })

  // Create project-list pages
  const projectPosts = result.data.allMarkdownRemark.edges
  const projectPostsPerPage = 4
  const numProjectPages = Math.ceil(projectPosts.length / projectPostsPerPage)
  Array.from({
    length: numProjectPages,
  }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/work` : `/work/${i + 1}`,
      component: path.resolve("./src/templates/project-list-template.js"),
      context: {
        limit: projectPostsPerPage,
        skip: i * projectPostsPerPage,
        numProjectPages,
        currentPage: i + 1,
      },
    })
  })

  // Create blog posts pages.
  result.data.allMarkdownRemark.edges.forEach(({ node, next, previous }) => {
    if (node.frontmatter.posttype === "project") {
      createPage({
        path: node.fields.slug,
        component: projectPost,
        context: {
          slug: node.fields.slug,
        },
      })
    } else {
      createPage({
        path: node.fields.slug,
        component: blogPost,
        context: {
          slug: node.fields.slug,
        },
      })
    }
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
