import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import { Box, Paper, Typography } from "@mui/material";
import BlogPostList from "../components/BlogPostsList";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Box sx={{ borderLeft: 4, borderRight: 4, borderRadius: 0, borderColor: 'primary.main', paddingX: 2, marginTop: 3, paddingBottom: 2 }}>
        <Typography variant="h1">Blogs</Typography>
      </Box>
      <Paper elevation={3} sx={{ borderRadius: 0, padding: 2 }}>
        <BlogPostList />
      </Paper>
    </Layout>
  );
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <title>Personal site</title>
    <meta name="description" content="Welcome to the home page of our blog" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <meta name="description" content="Personal website built with Gatsby, Material UI & Decap CMS. Hosted on Github Pages." />
    <meta property="og:title" content="Personal site" />
    <meta property="og:description" content="Personal website built with Gatsby, Material UI & Decap CMS. Hosted on Github Pages." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`https://kreivi.github.io/`} />
    <meta property="twitter:card" content="summary_large_image" />
    <link rel="canonical" href={`https://kreivi.github.io/`} />
  </>
);