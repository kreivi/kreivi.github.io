import React from 'react';
import { AppBar, Link, Toolbar, Typography } from '@material-ui/core';

/**
 * Site wide header component
 * @returns header element
 */
const Header: React.FC<{}> = () => {
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
