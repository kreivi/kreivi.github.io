import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Typography, Link, Divider, List, ListItem, Table, TableRow, TableCell } from '@mui/material';

interface MuiComponentProviderProps {
  children: React.ReactNode;
}

const components = {
  p: (props: any) => <Typography gutterBottom align='justify' {...props} />,
  h1: (props: any) => <Typography variant='h1' gutterBottom {...props} />,
  h2: (props: any) => <Typography variant='h2' gutterBottom {...props} />,
  h3: (props: any) => <Typography variant='h3' gutterBottom {...props} />,
  h4: (props: any) => <Typography variant='h4' gutterBottom {...props} />,
  h5: (props: any) => <Typography variant='h5' gutterBottom {...props} />,
  h6: (props: any) => <Typography variant='h6' gutterBottom {...props} />,
  blockquote: (props: any) => <Typography gutterBottom variant="body2" component='blockquote' sx={{ borderLeft: 4, borderColor: 'primary.main', marginLeft: 2, paddingLeft: 1 }}>{props.children}</Typography>,
  table: (props: any) => (
    <Table
      sx={{
        marginY: 2,
        display: 'table',
        width: '100%',
        borderCollapse: 'collapse',
        border: 1,
        borderColor: 'divider'
      }}
    >
      {props.children}
    </Table>
  ),
  tr: (props: any) => <TableRow {...props} />,
  th: (props: any) => (<TableCell
    component="th"
    sx={{
      fontWeight: 'bold',
      backgroundColor: 'divider',
      border: 1,
      borderColor: 'divider'
    }}
  >
    {props.children}
  </TableCell>
  ),
  td: (props: any) => (
      <TableCell
        sx={{
          border: 1,
          borderColor: 'divider'
        }}
      >
        {props.children}
      </TableCell>
    ),
  pre: (props: any) => (<Typography
        gutterBottom
        component='pre'
        sx={{
          whiteSpace: 'pre-wrap',
          overflowX: 'auto',
          backgroundColor: 'divider',
          mx: 2,
          my: 1,
          py: 1,
          px: 0.5,
          borderRadius: 1,
          borderLeft: 4,
          borderColor: 'primary.main',
          '& code': {
            border: 'none',
            backgroundColor: 'transparent',
            padding: 0,
            margin: 0,
          }
        }}>
        {props.children}
      </Typography>
      ),

  code: (props: any) => <Typography component='code' sx={{ fontFamily: 'monospace', backgroundColor: 'divider', paddingX: 0.5, paddingY: 0.25, borderRadius: 1, fontSize: '0.875rem', alignSelf: 'center'}}>{props.children}</Typography>,
  em: (props: any) => <Typography component='em' {...props} />,
  strong: (props: any) => <Typography component='strong' {...props} />,
  delete: (props: any) => <Typography component='del' {...props} />,
  inlineCode: (props: any) => <Typography component='code' {...props} />,
  hr: (props: any) => <Divider component='hr' {...props} />,
  a: (props: any) => <Link target='_blank' rel='noreferrer' {...props} />,
};

const MuiComponentProvider: React.FC<MuiComponentProviderProps> = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MuiComponentProvider;
