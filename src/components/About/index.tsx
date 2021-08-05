import React from 'react';
import {
  Paper,
  Typography,
  makeStyles,
  createStyles,
  Theme,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Chip,
} from '@material-ui/core';

import { work, gameEngines, programmingLanguages } from './experiences';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    experienceListItem: {
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.5),
    },
  })
);

/**
 * About contains short summary of experience and personality.
 * @returns About element
 */
const About: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} component='article'>
      <Typography variant='h2' align='center' gutterBottom>
        About
      </Typography>
      <Typography gutterBottom>
        I'm a Software Developer with broad experience of different programming languages and software development
        methodologies. While my professional career has mostly been business application oriented my personal interests
        in the field have always been game industry focused. I love spending my free time developing as much as playing
        games.
      </Typography>
      <Typography gutterBottom>
        I'm a team player capable of doing compromises for common goal but at the same time am not afraid to stand my
        ground. I like my code clean and automatically tested so I strive to keep code quality high.
      </Typography>
      <Typography variant='h2' align='center' gutterBottom>
        Experience
      </Typography>
      <List disablePadding>
        {work.map((item) => (
          <ListItem key={item.key} className={classes.experienceListItem} disableGutters>
            <ListItemText primary={item.primary} />
          </ListItem>
        ))}
        <ListSubheader disableSticky disableGutters>
          Programming languages:
        </ListSubheader>
        {programmingLanguages.map((item) => (
          <Chip key={item.key} label={item.primary} color='secondary' />
        ))}
        <ListSubheader disableSticky disableGutters>
          Game engines:
        </ListSubheader>
        {gameEngines.map((item) => (
          <Chip key={item.key} label={item.primary} color='secondary' />
        ))}
      </List>
    </Paper>
  );
};

export default About;
