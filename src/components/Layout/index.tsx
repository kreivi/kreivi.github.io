import { Container, Box, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/styles";
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
  const theme = useTheme();
  const enableAside = useMediaQuery(theme.breakpoints.up("md"));
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
        <Grid container direction={enableAside ? "row" : "column-reverse"}>
          <Grid xs={enableAside ? 10 : 12}>
            <Box component="main" sx={{ marginX: 2 }}>
              {main}
            </Box>
          </Grid>
          <Grid xs={enableAside ? 2 : 12}>
            <Box
              sx={{
                marginX: enableAside ? 0 : 2,
              }}
              component="aside"
            >
              {aside}
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
