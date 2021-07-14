module.exports = {
  siteMetadata: {
    title: `Severi Vidnäs Portfolio`,
    author: `Severi Vidnäs`,
    description: `Portfolio site for personal use.`,
    siteUrl: `https://kreivi.github.io`,
  },
  plugins: [
    `gatsby-plugin-top-layout`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
  ],
};
