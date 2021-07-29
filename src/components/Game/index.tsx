import React from 'react';
import { makeStyles, createStyles, Theme, Typography } from '@material-ui/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
  })
);

/**
 * Game properties.
 */
export type GameProps = {
  title?: string;
  creationDate?: string;
  shortDescription?: string;
  children?: string;
};

/**
 * Renders single game showcase.
 * @param props game properties
 * @returns game element
 */
const Game: React.FC<GameProps> = ({ title, creationDate, shortDescription, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant='h3' align='center'>
        {title}
      </Typography>
      <Typography variant='body2'>{creationDate}</Typography>
      <Typography>{shortDescription}</Typography>
      <MDXRenderer frontmatter={{ title, creationDate, shortDescription }}>{children}</MDXRenderer>
    </div>
  );
};

export default Game;
