import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Paper, List, ListItem } from '@material-ui/core';

import Game from '../Game';

const Games: React.FC<{}> = () => {
  // TODO: This needs to be refined once there is some other markdown content than games
  const {
    allMdx: { nodes },
  } = useStaticQuery(graphql`
    query allGamesQuery {
      allMdx {
        nodes {
          id
          frontmatter {
            creationDate
            shortDescription
            title
          }
        }
      }
    }
  `);
  console.log(nodes);
  return (
    <Paper component='section'>
      <List>
        {nodes.map((game) => {
          console.log(game);
          return (
            <ListItem key={game.id}>
              <Game {...game.frontmatter}></Game>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};

export default Games;
