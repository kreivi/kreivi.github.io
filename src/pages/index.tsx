import React from 'react';
import { PageProps } from 'gatsby';
import { Typography } from '@material-ui/core';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Avatar from '../components/Avatar';

const IndexPage: React.FC<PageProps<{}>> = () => {
  return (
    <Layout>
      <SEO />
      <Avatar />
    </Layout>
  );
};

export default IndexPage;
