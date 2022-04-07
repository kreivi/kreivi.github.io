import React from 'react';
import { AppBar } from '@mui/material';

import Copyright from '../Copyright';
import Social from '../Social';

/**
 * Site wide footer component
 * @returns footer element
 */
const Footer: React.FC<{}> = () => {
  return (
    <AppBar
      sx={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        marginTop: 'auto',
        padding: 1,
      }}
      position='relative'
      color='default'
      component='footer'
    >
      <Social />
      <Copyright />
    </AppBar>
  );
};

export default Footer;
