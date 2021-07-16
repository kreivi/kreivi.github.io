import React from 'react';
import { Typography } from '@material-ui/core';

import Avatar from '../Avatar';
import Social from '../Social';
import About from '../About';

const Contact: React.FC<{}> = () => {
  return (
    <div id='contact'>
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
