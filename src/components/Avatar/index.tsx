import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import { StaticImage } from "gatsby-plugin-image";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: theme.spacing(1),
    },
    container: {
      width: 80,
      height: 80,
      [theme.breakpoints.up("md")]: {
        width: 100,
        height: 100,
      },
      [theme.breakpoints.up("lg")]: {
        width: 120,
        height: 120,
      },
    },
    image: {
      borderRadius: "50%",
    },
  })
);

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
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <StaticImage
          className={classes.image}
          src="../../assets/images/avatar_artistic.png"
          alt={author}
          placeholder="blurred"
        />
      </div>
    </div>
  );
};

export default Avatar;
