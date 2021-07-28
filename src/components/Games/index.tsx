import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles, createStyles, Theme, Paper, List, ListItem } from '@material-ui/core';
import { MDXProvider } from '@mdx-js/react';

import Game from '../Game';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
  })
);

const Games: React.FC<{}> = () => {
  const classes = useStyles();
  // TODO: This needs to be refined once there is some other markdown content than games
  const {
    allMdx: { nodes },
  } = useStaticQuery(graphql`
    query allGamesQuery {
      allMdx(sort: { fields: frontmatter___creationDate, order: DESC }) {
        nodes {
          id
          body
          frontmatter {
            creationDate(formatString: "Do MMM YYYY")
            shortDescription
            title
          }
        }
      }
    }
  `);
  console.log(nodes);
  return (
    <Paper className={classes.root} component='section'>
      <List>
        {nodes.map((game) => {
          console.log(game);
          return (
            <ListItem key={game.id}>
              <Game {...game.frontmatter}>{game.body}</Game>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};

export default Games;
