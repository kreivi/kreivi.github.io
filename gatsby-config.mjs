import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";


const config = {
  siteMetadata: {
    title: `Development Blog`,
    author: `Severi Vidnäs`,
    description: `Development blog for personal use.`,
    siteUrl: `https://kreivi.github.io`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-top-layout",
    "gatsby-plugin-mui-mdx-provider",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "static/assets/images/favicon.png"
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            }
          },
        ],
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `./content/blogs`,
      },
      __key: "blogs"
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `authors`,
        path: `./content/meta/authors`,
      },
      __key: "authors"
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tags`,
        path: `./content/meta/tags`,
      },
      __key: "tags"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "images",
        path: `./static/assets/images/`
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "pages",
        path: "./src/pages/"
      },
      __key: "pages"
    },
    "gatsby-plugin-decap-cms",
  ]
};

export default config;
