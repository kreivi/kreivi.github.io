import React from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
  Typography,
  ImageList,
  ImageListItem,
  Paper,
  Box,
  Tooltip,
} from '@material-ui/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { StaticImage } from 'gatsby-plugin-image';

import LinkIconButton from '../LinkIconButton';

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
  gameLink?: string;
  gameplayVideoLink?: string;
  sourceCodeLink?: string;
  children?: string;
};

/**
 * Renders single game showcase.
 * @param props game properties
 * @returns game element
 */
const Game: React.FC<GameProps> = ({
  title,
  creationDate,
  shortDescription,
  gameLink,
  gameplayVideoLink,
  sourceCodeLink,
  children,
}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} component='article'>
      <Typography variant='h3' align='center'>
        {title}
      </Typography>
      <Typography className={classes.shortDescription} variant='body2' align='center' component='em'>
        {shortDescription}
      </Typography>
      {gameLink && (
        <LinkIconButton href={gameLink} aria-label='Link to game page' size='medium'>
          <Tooltip title='Itch page'>
            <StaticImage src='https://static.itch.io/images/badge-color.svg' alt='Itch page' />
          </Tooltip>
        </LinkIconButton>
      )}
      {gameplayVideoLink && (
        <LinkIconButton href={gameplayVideoLink} aria-label='Link to gameplay video' size='medium'>
          <Tooltip title='YouTube video'>
            <StaticImage src='../../../static/assets/images/youtube_social_icon_red.png' alt='YouTube video' />
          </Tooltip>
        </LinkIconButton>
      )}
      {sourceCodeLink && (
        <LinkIconButton href={gameplayVideoLink} aria-label='Link to game source code' size='medium'>
          <Tooltip title='GitHub repository'>
            <StaticImage src='../../../static/assets/images/static/GitHub_Logo_White.png' alt='GitHub repository' />
          </Tooltip>
        </LinkIconButton>
      )}
      <MDXRenderer frontmatter={{ title, creationDate, shortDescription }}>{children}</MDXRenderer>
      <div className={classes.margin} />
    </Paper>
  );
};

export default Game;
