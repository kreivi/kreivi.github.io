import React from 'react';
import { Typography } from '@mui/material';

import Avatar from '../Avatar';
import Social from '../Social';

const Profile: React.FC<{}> = () => {
  return (
    <>
      <Avatar />
      <Typography
        sx={{ fontFamily: 'Patua One, sans-serif' }}
        color={'inherit'}
        variant='h4'
        component='h1'
        align='center'
      >
        SEVERI VIDNÄS
      </Typography>
      <Typography
        sx={{ fontFamily: 'Monserrat, sans-serif' }}
        color={'inherit'}
        variant='h6'
        component='p'
        align='center'
      >
        SOFTWARE DEVELOPER
      </Typography>
      <Social />
    </>
  );
};

export default Profile;
