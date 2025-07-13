import React from 'react';

import { PageProps } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Contact from '../components/Contact';

type AboutPageProps = PageProps<{}>;

const AboutPage: React.FC<AboutPageProps> = (props) => {
  return (
    <>
      <SEO title='About' />
      <Layout main={<Contact />} />
    </>
  );
};

export default AboutPage;
