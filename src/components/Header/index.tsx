import React from 'react';
import { Link } from 'gatsby';
import { makeStyles, createStyles, Theme, AppBar, Link as MuiLink, Toolbar } from '@material-ui/core';

import { navigation } from './navigation';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  })
);

/**
 * Site wide header component
 * @returns header element
 */
const Header: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <AppBar position='static' color='default'>
      <Toolbar component='nav'>
        {navigation.map((link) => (
          <MuiLink
            key={link.key}
            className={classes.link}
            component={Link}
            color='textPrimary'
            variant='h6'
            to={link.to}
          >
            {link.label}
          </MuiLink>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
