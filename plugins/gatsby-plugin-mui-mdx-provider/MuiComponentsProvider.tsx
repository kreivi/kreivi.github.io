import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Typography, Link, Divider, List, ListItem, Table, TableRow, TableCell } from '@mui/material';

const components = {
  p: (props) => <Typography gutterBottom align='justify' {...props} />,
  h1: (props) => <Typography variant='h1' gutterBottom {...props} />,
  h2: (props) => <Typography variant='h2' gutterBottom {...props} />,
  h3: (props) => <Typography variant='h3' gutterBottom {...props} />,
  h4: (props) => <Typography variant='h4' gutterBottom {...props} />,
  h5: (props) => <Typography variant='h5' gutterBottom {...props} />,
  h6: (props) => <Typography variant='h6' gutterBottom {...props} />,
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
  a: (props) => <Link color='primary' {...props} />,
};

const MuiComponentProvider = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MuiComponentProvider;
