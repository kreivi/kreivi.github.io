import React from 'react';
import { makeStyles, createStyles, Theme, Typography, Paper, Tooltip } from '@material-ui/core';
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
    links: {
      alignSelf: 'center',
      justifyContent: 'center',
      transform: 'translateZ(0)',
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
      <MDXRenderer frontmatter={{ title, creationDate, shortDescription }}>{children}</MDXRenderer>
      <ul className={classes.links}>
        {gameLink && (
          <LinkIconButton href={gameLink} aria-label='Link to game page' size='small'>
            <Tooltip title='Itch page'>
              <StaticImage
                src='../../../static/assets/images/itch-badge-color.png'
                alt='Itch page'
                placeholder='blurred'
                width={75}
              />
            </Tooltip>
          </LinkIconButton>
        )}
        {gameplayVideoLink && (
          <LinkIconButton href={gameplayVideoLink} aria-label='Link to gameplay video' size='small'>
            <Tooltip title='YouTube video'>
              <StaticImage
                src='../../../static/assets/images/youtube_social_icon_red.png'
                alt='YouTube video'
                placeholder='blurred'
                width={30}
              />
            </Tooltip>
          </LinkIconButton>
        )}
        {sourceCodeLink && (
          <LinkIconButton href={sourceCodeLink} aria-label='Link to game source code' size='small'>
            <Tooltip title='GitHub repository'>
              <StaticImage
                src='../../../static/assets/images/GitHub_Logo_White.png'
                alt='GitHub repository'
                placeholder='blurred'
                width={50}
              />
            </Tooltip>
          </LinkIconButton>
        )}
      </ul>
      <div className={classes.margin} />
    </Paper>
  );
};

export default Game;
