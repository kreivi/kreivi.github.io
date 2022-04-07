import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Box from '@mui/material/Box';
import { StaticImage } from 'gatsby-plugin-image';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       ,
//     },
//     container: {

//     },
//     image: {
//       borderRadius: '50%',
//     },
//   })
// );

/**
 * Static image that shows avatar. Avatar size will vary depending on the breakpoints.
 * @returns Avatar element
 */
const Avatar: React.FC<{}> = () => {
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
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 1,
      }}
    >
      <Box
        sx={{
          width: 80,
          height: 80,
          //  [theme.breakpoints.up('md')]: {
          //    width: 100,
          //    height: 100,
          //  },
          //  [theme.breakpoints.up('lg')]: {
          //    width: 120,
          //    height: 120,
          //  },
        }}
      >
        <StaticImage
          // className={classes.image}
          src='../../../static/assets/images/avatar_artistic.png'
          alt={author}
          placeholder='blurred'
        />
      </Box>
    </Box>
  );
};

export default Avatar;
