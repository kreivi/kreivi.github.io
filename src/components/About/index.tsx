import React from 'react';
import { Paper, Typography, makeStyles, createStyles, Theme, ThemeProvider } from '@material-ui/core';

import theme from './theme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
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
          About
        </Typography>
        <Typography align='justify'>
          I'm Software Developer with broad experience of different languages and software development methodologies.
        </Typography>
        <Typography>
          Personal interests in the field are very game focused and I love to spend my free time developing as much as
          playing games.
        </Typography>
        <Typography variant='h3' align='center'>
          Experience
        </Typography>
        <ul>
          <Typography component='li'>+10 years of professional software development</Typography>
          <Typography component='li'>+5 years of game development</Typography>
          <Typography component='li'>PROGRAMMING LANGUAGES:</Typography>
          <ul>
            <Typography component='li'>JavaScript/TypeScript</Typography>
            <Typography component='li'>C++</Typography>
            <Typography component='li'>GDScript</Typography>
            <Typography component='li'>Java</Typography>
            <Typography component='li'>LuaScript</Typography>
            <Typography component='li'>C#</Typography>
          </ul>
          <Typography component='li'>GAME ENGINES:</Typography>
          <ul>
            <Typography component='li'>Unreal Engine</Typography>
            <Typography component='li'>Godot Engine</Typography>
            <Typography component='li'>Unity</Typography>
          </ul>
        </ul>
      </Paper>
    </ThemeProvider>
  );
};

export default About;
