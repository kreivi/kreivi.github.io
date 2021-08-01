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
    createdAtContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: theme.spacing(1),
    },
    createdAtCaption: {
      marginRight: theme.spacing(0.25),
    },
    createdAtValue: {
      marginLeft: theme.spacing(0.25),
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
    <Paper className={classes.root}>
      <Typography variant='h3' align='center'>
        {title}
      </Typography>
      <Typography variant='body2' align='center'>
        {shortDescription}
      </Typography>
      <Box className={classes.createdAtContainer} component='span'>
        <Typography className={classes.createdAtCaption} variant='caption'>
          Created at:
        </Typography>
        <Typography className={classes.createdAtValue} variant='caption'>
          {creationDate}
        </Typography>
      </Box>
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
