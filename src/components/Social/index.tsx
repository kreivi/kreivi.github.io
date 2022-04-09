import React from 'react';
import { Theme } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';

import LinkedIn from './linkedin';
import GitHub from './github';
import Twitter from './twitter';
import Twitch from './twitch';
import Itch from './itch';
import YouTube from './youtube';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);

/**
 * Collection of social link elements.
 * @returns Social element.
 */
const Social: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <LinkedIn />
      <Twitter />
      <GitHub />
      <Itch />
      <YouTube />
      <Twitch />
    </nav>
  );
};

export default Social;
