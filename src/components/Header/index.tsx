import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export type HeaderType = {
  title?: string;
};

/**
 * Site wide Header.
 */
const Header: React.FC<HeaderType> = ({ title = 'Portfolio' }) => {
  return (
    <AppBar position='static' color='default'>
      <Toolbar></Toolbar>
    </AppBar>
  );
};

export default Header;
