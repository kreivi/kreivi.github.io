import React from 'react';
import { PageProps } from 'gatsby';
import { Typography } from '@material-ui/core';

import Layout from '../components/Layout';

const IndexPage: React.FC<PageProps<{}>> = () => {
  return (
    <Layout>
      <Typography align='center'>Work in progress</Typography>
    </Layout>
  );
};

export default IndexPage;
