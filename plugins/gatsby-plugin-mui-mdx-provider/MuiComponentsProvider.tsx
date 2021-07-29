import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Typography, Link, Divider, List, ListItem } from '@material-ui/core';

const components = {
  p: (props) => <Typography {...props} />,
  h1: (props) => <Typography varianth='h1' {...props} />,
  h2: (props) => <Typography varianth='h2' {...props} />,
  h3: (props) => <Typography varianth='h3' {...props} />,
  h4: (props) => <Typography varianth='h4' {...props} />,
  h5: (props) => <Typography varianth='h5' {...props} />,
  h6: (props) => <Typography varianth='h6' {...props} />,
  thematicBreak: (props) => <Divider {...props} />,
  blockquote: (props) => <Typography variant='body2' component='blockquote' {...props} />,
  a: (props) => <Link {...props} />,
  ul: (props) => <List {...props} />,
  ol: (props) => <List component='ol' {...props} />,
  li: (props) => <ListItem {...props} />,
};

const MuiComponentProvider = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MuiComponentProvider;
