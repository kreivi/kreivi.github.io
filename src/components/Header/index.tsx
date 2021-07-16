import React from 'react';
import { AppBar, Link, Toolbar, Typography } from '@material-ui/core';

export type HeaderType = {
  title?: string;
};

/**
 * Site wide Header.
 */
const Header: React.FC<HeaderType> = ({ title = 'Portfolio' }) => {
  return (
    <AppBar position='static' color='default'>
      <Toolbar>
        <Link color='textPrimary' variant='h6' component='h3' href='#contact'>
          Info
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
