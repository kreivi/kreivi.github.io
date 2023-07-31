import React from 'react';

import { PageProps } from 'gatsby';
import { Paper } from '@mui/material';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Games from '../components/Games';
import MiniAbout from '../components/MiniAbout';

type GamesPageProps = PageProps<{}>;

const GamesPage: React.FC<GamesPageProps> = (props) => {
  return (
    <>
      <SEO title='Games'/>
      <Layout main={<Games />} aside={
        <Paper><MiniAbout /></Paper>}
      />
    </>
  );
};

export default GamesPage;
