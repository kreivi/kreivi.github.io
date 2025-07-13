import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText, ListSubheader, Chip } from '@mui/material';

import { work, gameEngines, programmingLanguages } from './experiences';

/**
 * About contains short summary of experience and personality.
 * @returns About element
 */
const About: React.FC<{}> = () => {
  return (
    <Paper
      sx={{
        marginTop: 2,
        marginBottom: 2,
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 2,
        paddingBottom: 2,
      }}
      component='article'
    >
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
          <ListItem
            key={item.key}
            sx={{
              paddingTop: 0.5,
              paddingBottom: 0.5,
            }}
            disableGutters
          >
            <ListItemText primary={item.primary} />
          </ListItem>
        ))}
        <ListSubheader disableSticky disableGutters>
          Programming languages:
        </ListSubheader>
        {programmingLanguages.map((item) => (
          <Chip key={item.key} label={item.primary} />
        ))}
        <ListSubheader disableSticky disableGutters>
          Game engines:
        </ListSubheader>
        {gameEngines.map((item) => (
          <Chip key={item.key} label={item.primary} />
        ))}
      </List>
    </Paper>
  );
};

export default About;
