import React from 'react';
/* @ts-ignore */ // This package is part of the main package.json
import { PageProps } from 'gatsby';

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
const IndexPage: React.FC<IndexPageProps> = (props) => {
  return (
    <Layout>
      <SEO />
      <Contact />
      <Games />
    </Layout>
  );
};

export default IndexPage;
