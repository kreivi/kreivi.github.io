import React from "react";
import { Typography, Paper, Box } from "@mui/material";
import { MDXRenderer } from "gatsby-plugin-mdx";

/**
 * Blog properties.
 */
export type BlogProps = {
  title?: string;
  creationDate?: string;
  shortDescription?: string;
  children?: string;
};

/**
 * Renders single blog entry.
 * @param props blog properties
 * @returns blog element
 */
const Blog: React.FC<BlogProps> = ({
  title,
  creationDate,
  shortDescription,
  children,
}) => {
  return (
    <Paper
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 2,
      }}
      component="article"
    >
      <Typography variant="h3" align="center">
        {title}
      </Typography>
      <Typography
        sx={{ marginBottom: 2 }}
        variant="body2"
        align="center"
        component="em"
      >
        {shortDescription}
      </Typography>
      <MDXRenderer frontmatter={{ title, creationDate, shortDescription }}>
        {children}
      </MDXRenderer>
      <Box sx={{ margin: 1 }} />
    </Paper>
  );
};

export default Blog;
