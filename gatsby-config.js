module.exports = {
  siteMetadata: {
    title: `Klare Frank, product designer`,
    author: `Klare Frank`,
    authorFirst: `Klare`,
    authorLast: `Frank`,
    intro: `Klare Frank is a cross‑functional design and product leader`,
    description: `Hello! I'm currently working to build better development tools and support the front-end design and dev community at CodePen.`,
    siteUrl: `https://klare.io`,
    social: {
      twitter: `klare`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `project`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Noe Display"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-49926701-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Klare Frank`,
        short_name: `klare`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2d0c8a`,
        display: `minimal-ui`,
        icon: `content/assets/klare-icon.png`,
      },
    },
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
  ],
}
