import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Typography } from '@mui/material';

/**
 * Copyright text. Automatically gets current year and author name
 * from `gatsby-config` and wraps it into `Typography`
 * @returns Copyright text element
 */
const Copyright: React.FC<{}> = () => {
  const {
    site: {
      siteMetadata: { author },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  );
  return (
    <Typography color='textSecondary'>
      &copy;&nbsp;{new Date().getUTCFullYear()}&nbsp;{author}
    </Typography>
  );
};

export default Copyright;
