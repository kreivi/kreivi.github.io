module.exports = {
  siteMetadata: {
    title: `Severi Vidnäs`,
    author: `Severi Vidnäs`,
    description: `Developer site for personal use.`,
    siteUrl: `https://kreivi.github.io`,
  },
  plugins: [
    `gatsby-plugin-top-layout`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `image`,
        path: `${__dirname}/static/assets/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `game`,
        path: `${__dirname}/content/game`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    `gatsby-plugin-mui-mdx-provider`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `${__dirname}/static/assets/images/favicon.png`,
      },
    },
  ],
};
