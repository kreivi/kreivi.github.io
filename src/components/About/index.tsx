import React from 'react';
import { Paper, Typography, makeStyles, createStyles, Theme, ThemeProvider } from '@material-ui/core';

import theme from './theme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      padding: theme.spacing(2),
    },
  })
);

const About: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.root}>
        <Typography variant='h2' align='center'>
          Caption goes here
        </Typography>
        <Typography>Single line summary</Typography>
        <Typography></Typography>
      </Paper>
    </ThemeProvider>
  );
};

export default About;
