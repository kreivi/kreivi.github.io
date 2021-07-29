import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Typography, Link } from '@material-ui/core';

const muiParagraph = (props) => <Typography {...props} />;
const muiH1 = (props) => <Typography varianth='h1' {...props} />;
const muiH2 = (props) => <Typography varianth='h2' {...props} />;
const muiH3 = (props) => <Typography varianth='h3' {...props} />;
const muiH4 = (props) => <Typography varianth='h4' {...props} />;
const muiH5 = (props) => <Typography varianth='h5' {...props} />;
const muiH6 = (props) => <Typography varianth='h6' {...props} />;
const muiLink = (props) => <Link {...props} />;

const components = {
  p: muiParagraph,
  h1: muiH1,
  h2: muiH2,
  h3: muiH3,
  h4: muiH4,
  h5: muiH5,
  h6: muiH6,
  a: muiLink,
};

const MuiComponentProvider = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MuiComponentProvider;
