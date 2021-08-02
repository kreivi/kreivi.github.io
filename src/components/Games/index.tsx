import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles, createStyles, Theme, Paper, List, ListItem, ThemeProvider } from '@material-ui/core';
import { MDXProvider } from '@mdx-js/react';

import Game from '../Game';
import theme from './theme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
  })
);

/**
 * Lists games found under from `content/game`.
 * @returns games element
 */
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
            screenshots
          }
        }
      }
    }
  `);

  return (
    <Paper id='showcase' className={classes.root} component='section'>
      <List>
        <ThemeProvider theme={theme}>
          {nodes.map((game, index) => {
            return (
              <ListItem key={game.id}>
                <Game {...game?.frontmatter}>{game?.body}</Game>
              </ListItem>
            );
          })}
        </ThemeProvider>
      </List>
    </Paper>
  );
};

export default Games;
