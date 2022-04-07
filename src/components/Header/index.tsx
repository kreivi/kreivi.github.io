import React from 'react';
import { Link } from 'gatsby';
import { AppBar, Link as MuiLink, Toolbar } from '@mui/material';

import { navigation } from './navigation';

/**
 * Site wide header component
 * @returns header element
 */
const Header: React.FC<{}> = () => {
  return (
    <AppBar position='static' color='default'>
      <Toolbar component='nav'>
        {navigation.map((link) => (
          <MuiLink
            key={link.key}
            component={Link}
            color='textPrimary'
            variant='h6'
            to={link.to}
            sx={{
              marginLeft: 2,
              marginRight: 2,
            }}
          >
            {link.label}
          </MuiLink>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
