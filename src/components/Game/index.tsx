import React from 'react';
import { makeStyles, createStyles, Theme, Typography, ImageList, ImageListItem } from '@material-ui/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    imageList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    img: {
      objectFit: 'contain',
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
    <div className={classes.root}>
      <Typography variant='h3' align='center'>
        {title}
      </Typography>
      <Typography variant='body2'>{creationDate}</Typography>
      <Typography>{shortDescription}</Typography>
      <MDXRenderer frontmatter={{ title, creationDate, shortDescription, screenshots }}>{children}</MDXRenderer>
      <ImageList className={classes.imageList} rowHeight={300}>
        {screenshots.map((screenshot, index) => (
          <ImageListItem key={index}>
            <img className={classes.img} src={screenshot} alt={screenshot} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Game;
