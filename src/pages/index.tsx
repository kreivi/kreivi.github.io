import React from 'react';
import { PageProps } from 'gatsby';
import { Typography } from '@material-ui/core';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Contact from '../components/Contact';
import Games from '../components/Games';

const IndexPage: React.FC<PageProps<{}>> = () => {
  return (
    <Layout>
      <SEO />
      <Typography variant='subtitle1' component='h6' color='error' align='center'>
        Work in progress
      </Typography>
      <Contact />
      <Games />
    </Layout>
  );
};

export default IndexPage;
