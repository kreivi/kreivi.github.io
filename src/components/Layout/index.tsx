import { createStyles, makeStyles, Container, Theme } from "@material-ui/core";
import React from "react";

import Header from "../Header";
import Footer from "../Footer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },
    contentArea: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
    },
  })
);

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Container className={classes.contentArea} component="main">
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
