import { Container, Box, Grid } from "@mui/material";
import React from "react";

import Header from "../Header";
import Footer from "../Footer";

/**
 * Layout properties
 */
export type LayoutProps = {
  main: React.ReactNode;
  aside?: React.ReactNode;
};

/**
 * Root layout of the site.
 * @param props component properties
 * @returns Layout element
 */
const Layout: React.FC<LayoutProps> = ({ main, aside }: LayoutProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Container
        sx={{
          justifyContent: "center",
          marginTop: 1,
          marginBottom: 2,
        }}
      >
        <Grid container direction="row">
          <Grid xs={10}>
            <Box component="main" sx={{ marginX: 2}}>{main}</Box>
          </Grid>
          <Grid xs={2}>
            <Box component="aside">{aside}</Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
