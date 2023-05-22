import { List, ListItem, Theme } from '@mui/material';
import { graphql, useStaticQuery } from 'gatsby';
import { Box } from 'mdi-material-ui';
import React from 'react';
import Blog from '../Blog';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

const Blogs: React.FC<{}> = () => {
  const {
    allMdx: { nodes },
  } = useStaticQuery(graphql`
    query allGamesQuery {
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
    <Box id='blogs' component='section' sx={{ width: '100%' }}>
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
