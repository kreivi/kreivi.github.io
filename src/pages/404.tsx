import React from 'react';
import { Link, PageProps } from 'gatsby';

import Layout from '../components/Layout';
import { Typography, Link as MuiLink, Paper } from '@mui/material';

/**
 * NotFound page properties
 */
type NotFoundPageProps = PageProps<{}>;

/**
 * Not found error page
 * @returns not found page element
 */
const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  return (
    <Layout>
      <Paper
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography sx={{ margin: 2 }} variant='h1' color='error'>
          Oops!
        </Typography>
        <Typography sx={{ margin: 2 }}>The page does not exist</Typography>
        <MuiLink sx={{ margin: 4 }} component={Link} to='/'>
          Home
        </MuiLink>
      </Paper>
    </Layout>
  );
};

export default NotFoundPage;
