import React from 'react';

import { PageProps } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Games from '../components/Games';

type GamesPageProps = PageProps<{}>;

const GamesPage: React.FC<GamesPageProps> = (props) => {
  return (
    <Layout>
      <SEO />
      <Games />
    </Layout>
  );
};

export default GamesPage;
