import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';

import formMetaTags from './formMetaTags';

export type SEOType = {
  title?: string;
  author?: string;
  description?: string;
};

/**
 * SEO component for meaningful SEO tags. Fallbacks to use values from configuration if no props are passed.
 */
const SEO: React.FC<SEOType> = ({ author, title, description }: SEOType) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            title
            description
            siteUrl
          }
        }
      }
    `
  );
  const { pathname } = useLocation();
  const seoTitle = title ? `${title} | ${siteMetadata.title}` : siteMetadata.title;
  const seoDescription = description || siteMetadata.description;
  const seoCanonical = `${siteMetadata.siteUrl}${pathname}`;
  const metaTags = formMetaTags(seoTitle, seoDescription, seoCanonical);
  return (
    <Helmet defer={false} defaultTitle={siteMetadata.title} title={seoTitle} meta={metaTags}>
      <link rel='canonical' href={seoCanonical} />
    </Helmet>
  );
};

export default SEO;
