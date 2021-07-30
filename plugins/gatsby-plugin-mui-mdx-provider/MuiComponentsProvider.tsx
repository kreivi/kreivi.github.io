import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Typography, Link, Divider, List, ListItem, Table, TableRow, TableCell } from '@material-ui/core';
import { StaticImage } from 'gatsby-plugin-image';

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
  ul: (props) => <List {...props} />,
  ol: (props) => <List component='ol' {...props} />,
  li: (props) => <ListItem {...props} />,
  table: (props) => <Table {...props} />,
  tr: (props) => <TableRow {...props} />,
  th: (props) => <TableCell component='thead' {...props} />,
  td: (props) => <TableCell {...props} />,
  pre: (props) => <Typography component='pre' {...props} />,
  code: (props) => <Typography component='code' {...props} />,
  em: (props) => <Typography component='em' {...props} />,
  strong: (props) => <Typography component='strong' {...props} />,
  delete: (props) => <Typography component='del' {...props} />,
  inlineCode: (props) => <Typography component='code' {...props} />,
  hr: (props) => <Divider component='hr' {...props} />,
  a: (props) => <Link {...props} />,
};

const MuiComponentProvider = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MuiComponentProvider;
