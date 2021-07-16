import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core';

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

const Social: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinkedIn />
      <Twitter />
      <GitHub />
      <Itch />
      <YouTube />
      <Twitch />
    </div>
  );
};

export default Social;
