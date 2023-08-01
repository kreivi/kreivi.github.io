import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Theme, Paper, List, ListItem, Box } from "@mui/material";

import Blog from "../Blog";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

/**
 * Lists games found under from `content/game`.
 * @returns games element
 */
const Blogs: React.FC<{}> = () => {
  // TODO: This needs to be refined once there is some other markdown content than games
  const {
    allMdx: { nodes },
  } = useStaticQuery(graphql`
    query allBlogsQuery {
      allMdx(
        sort: { fields: frontmatter___creationDate, order: DESC }
        filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      ) {
        nodes {
          id
          body
          frontmatter {
            creationDate(formatString: "Do MMM YYYY")
            shortDescription
            title
          }
        }
      }
    }
  `);

  return (
    <Box
      id="showcase"
      component="section"
      sx={{
        width: "100%",
      }}
    >
      <List>
        {nodes.map((blog, index) => {
          return (
            <ListItem
              key={blog.id}
              sx={{
                padding: 0,
                marginBottom: 2,
              }}
            >
              <Blog {...blog?.frontmatter}>{blog?.body}</Blog>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Blogs;
