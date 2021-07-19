import React from 'react';
import { Typography, makeStyles, createStyles, Theme } from '@material-ui/core';

import Avatar from '../Avatar';
import Social from '../Social';
import About from '../About';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
  })
);

const Contact: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id='contact'>
      <Avatar />
      <Typography variant='h4' component='h1' align='center'>
        VIDNÄS SEVERI
      </Typography>
      <Typography color='textSecondary' variant='h6' component='p' align='center'>
        SOFTWARE DEVELOPER
      </Typography>
      <Social />
      <About />
    </div>
  );
};

export default Contact;
