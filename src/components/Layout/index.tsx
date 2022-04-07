import { Container, Box } from '@mui/material';
import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

/**
 * Layout properties
 */
type LayoutProps = React.PropsWithChildren<{}>;

/**
 * Root layout of the site.
 * @param props component properties
 * @returns Layout element
 */
const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: 1,
          marginBottom: 2,
        }}
        component='main'
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
