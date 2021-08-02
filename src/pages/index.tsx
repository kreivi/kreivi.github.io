import React from 'react';
import { PageProps } from 'gatsby';
import { Typography } from '@material-ui/core';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Contact from '../components/Contact';
import Games from '../components/Games';

/**
 * Index page properties.
 */
type IndexPageProps = PageProps<{}>;

/**
 * Domain index page.
 * @returns page element
 */
const IndexPage: React.FC<IndexPageProps> = () => {
  return (
    <Layout>
      <SEO />
      <Contact />
      <Games />
    </Layout>
  );
};

export default IndexPage;
