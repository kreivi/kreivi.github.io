import React from 'react';
import { Typography, Paper, Tooltip, List, Box } from '@mui/material';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { StaticImage } from 'gatsby-plugin-image';

import LinkIconButton from '../LinkIconButton';

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
  let GameLinkComponent = null;
  // if (gameLink) {
  //   GameLinkComponent = React.forwardRef((props, ref) => (
  //     <LinkIconButton href={gameLink} aria-label='Link to game page' size='small'>
  //       <Tooltip ref={ref} title='Itch page'>
  //         <StaticImage
  //           ref={ref}
  //           src='../../../static/assets/images/itch-badge-color.png'
  //           alt='Itch page'
  //           placeholder='blurred'
  //           width={75}
  //         />
  //       </Tooltip>
  //     </LinkIconButton>
  //   ));
  // }
  return (
    <Paper
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
      }}
      component='article'
    >
      <Typography variant='h3' align='center'>
        {title}
      </Typography>
      <Typography sx={{ marginBottom: 2 }} variant='body2' align='center' component='em'>
        {shortDescription}
      </Typography>
      <MDXRenderer frontmatter={{ title, creationDate, shortDescription }}>{children}</MDXRenderer>
      <List
        sx={{
          alignSelf: 'center',
          justifyContent: 'center',
          transform: 'translateZ(0)',
        }}
      >
        {GameLinkComponent && <GameLinkComponent />}
        {/* {gameLink && (
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
        )} */}
      </List>
      <Box sx={{ margin: 1 }} />
    </Paper>
  );
};

export default Game;
