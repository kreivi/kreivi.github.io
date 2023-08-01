import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <html lang='en' />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Patua+One:400&display=swap' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Monserrat:400&display=swap' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Lato:400&display=swap' />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
