import { Container, Box, Grid } from "@mui/material";
import React from "react";

import Header from "../Header";
import Footer from "../Footer";

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
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Container
        sx={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 1,
          marginBottom: 2,
        }}
      >
        <Grid container spacing={1}>
          <Grid>
            <Box component="main">main</Box>
          </Grid>
          <Grid>
            <Box component="aside">about</Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
    // <Box
    //   sx={{
    //     display: "flex",
    //     flexDirection: "column",
    //     minHeight: "100vh",
    //   }}
    // >
    //   <Header />
    //   <Container
    //     sx={{
    //       display: "flex",
    //       alignItems: "center",
    //       flexDirection: "row",
    //       marginTop: 1,
    //       marginBottom: 2,
    //     }}
    //     component="main"
    //   >
    //     <Box
    //       sx={{
    //         display: "flex",
    //         alignItems: "flex-start",
    //         flexDirection: "column",
    //       }}
    //     >
    //       test
    //     </Box>
    //     {children}
    //     <Box>test2</Box>
    //   </Container>
    //   <Footer />
    // </Box>
  );
};

export default Layout;
