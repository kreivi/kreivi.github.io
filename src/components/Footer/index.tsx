import React from "react";
import { AppBar } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

import Copyright from "../Copyright";
import Social from "../Social";

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    marginTop: "auto",
    padding: theme.spacing(1),
  },
}));

/**
 * Site wide footer component
 * @returns footer element
 */
const Footer: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <AppBar
      position="relative"
      color="default"
      className={classes.footer}
      component="footer"
    >
      <Social />
      <Copyright />
    </AppBar>
  );
};

export default Footer;
