import React from 'react';
import { makeStyles, createStyles, Theme, Typography, ImageList, ImageListItem, Paper, Box } from '@material-ui/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(2),
    },
    imageList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    img: {
      objectFit: 'contain',
    },
    margin: {
      margin: theme.spacing(1),
    },
    shortDescription: {
      marginBottom: theme.spacing(2),
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
  screenshots?: string[];
  children?: string;
};

/**
 * Renders single game showcase.
 * @param props game properties
 * @returns game element
 */
const Game: React.FC<GameProps> = ({ title, creationDate, shortDescription, screenshots, children }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} component='article'>
      <Typography variant='h3' align='center'>
        {title}
      </Typography>
      <Typography className={classes.shortDescription} variant='body2' align='center' component='em'>
        {shortDescription}
      </Typography>
      <MDXRenderer frontmatter={{ title, creationDate, shortDescription, screenshots }}>{children}</MDXRenderer>
      <div className={classes.margin} />
      <ImageList className={classes.imageList} rowHeight={300}>
        {screenshots.map((screenshot, index) => (
          <ImageListItem key={index}>
            <img className={classes.img} src={screenshot} alt={screenshot} />
          </ImageListItem>
        ))}
      </ImageList>
    </Paper>
  );
};

export default Game;
