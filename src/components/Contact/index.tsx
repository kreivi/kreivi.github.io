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
    name: {
      fontFamily: 'Patua One, Serif',
    },
  })
);

/**
 * Contact element will display basic contact information.
 * @returns Contact element.
 */
const Contact: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <section className={classes.root} id='contact'>
      <Avatar />
      <Typography className={classes.name} variant='h4' component='h1' align='center'>
        SEVERI VIDNÄS
      </Typography>
      <Typography className={classes.name} color='textSecondary' variant='h6' component='p' align='center'>
        SOFTWARE DEVELOPER
      </Typography>
      <Social />
      <About />
    </section>
  );
};

export default Contact;
