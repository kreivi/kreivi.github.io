import React from "react";
import {
  Paper,
  Typography,
  makeStyles,
  createStyles,
  Theme,
  ThemeProvider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Chip,
} from "@material-ui/core";

import theme from "./theme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      padding: theme.spacing(2),
    },
    chip: {
      marginRight: theme.spacing(1),
    },
  })
);

export type SimpleListItemType = {
  key: string;
  primary: string;
};

const experiences: Array<SimpleListItemType> = [
  {
    key: "experience-01",
    primary: "+10 years of professional experience in software development",
  },
  {
    key: "experience-02",
    primary: "+5 years of experience in game development",
  },
];
const programmingLanguages: Array<SimpleListItemType> = [
  {
    key: "programming-language-01",
    primary: "JavaScript/TypeScript",
  },
  {
    key: "programming-language-02",
    primary: "C++",
  },
  {
    key: "programming-language-03",
    primary: "GDScript",
  },
  {
    key: "programming-language-04",
    primary: "Java",
  },
  {
    key: "programming-language-05",
    primary: "LuaScript",
  },
  {
    key: "programming-language-06",
    primary: "C#",
  },
];
const gameEngines: Array<SimpleListItemType> = [
  {
    key: "game-engine-01",
    primary: "Unreal Engine",
  },
  {
    key: "game-engine-02",
    primary: "Godot Engine",
  },
  {
    key: "game-engine-03",
    primary: "Unity",
  },
];

const About: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.root}>
        <Typography variant="h2" align="center">
          About
        </Typography>
        <Typography align="justify">
          I'm Software Developer with broad experience of different programming
          languages and software development methodologies.
        </Typography>
        <Typography>
          Personal interests in the field are very game focused and I love to
          spend my free time developing as much as playing games.
        </Typography>
        <Typography variant="h2" align="center">
          Experience
        </Typography>
        <List>
          {experiences.map((item) => (
            <ListItem key={item.key} disableGutters>
              <ListItemText primary={item.primary} />
            </ListItem>
          ))}
          <ListSubheader>Programming languages:</ListSubheader>
          {programmingLanguages.map((item) => (
            <Chip
              className={classes.chip}
              key={item.key}
              label={item.primary}
            />
          ))}
          <ListSubheader>Game engines:</ListSubheader>
          {gameEngines.map((item) => (
            <Chip
              className={classes.chip}
              key={item.key}
              label={item.primary}
            />
          ))}
        </List>
      </Paper>
    </ThemeProvider>
  );
};

export default About;
