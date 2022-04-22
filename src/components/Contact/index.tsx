import React from 'react';
import { Typography, Box } from '@mui/material';

import Avatar from '../Avatar';
import Social from '../Social';
import About from '../About';

/**
 * Contact element will display basic contact information.
 * @returns Contact element.
 */
const Contact: React.FC<{}> = () => {
  return (
    <Box component={'section'} id='contact' sx={{ width: '100%' }}>
      <Avatar />
      <Typography sx={{ fontFamily: 'Patua One, Serif' }} color={'inherit'} variant='h4' component='h1' align='center'>
        SEVERI VIDNÄS
      </Typography>
      <Typography sx={{ fontFamily: 'Patua One, Serif' }} color={'inherit'} variant='h6' component='p' align='center'>
        SOFTWARE DEVELOPER
      </Typography>
      <Social />
      <About />
    </Box>
  );
};

export default Contact;
