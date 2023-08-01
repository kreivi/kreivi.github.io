import React from "react";
/* @ts-ignore */ // This package is part of the main package.json
import { PageProps } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Blogs from "../components/Blogs";
import MiniAbout from "../components/MiniAbout";

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
    <>
      <SEO />
      <Layout
        main={<Blogs />}
        aside={
          <MiniAbout />
        }
      >
      </Layout>
    </>
  );
};

export default IndexPage;
