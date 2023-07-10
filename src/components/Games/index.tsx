import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Theme, Paper, List, ListItem, Box } from "@mui/material";

import Game from "../Game";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

/**
 * Lists games found under from `content/game`.
 * @returns games element
 */
const Games: React.FC<{}> = () => {
  // TODO: This needs to be refined once there is some other markdown content than games
  const {
    allMdx: { nodes },
  } = useStaticQuery(graphql`
    query allGamesQuery {
      allMdx(sort: { frontmatter: { creationDate: DESC } }) {
        nodes {
          id
          body
          frontmatter {
            creationDate(formatString: "Do MMM YYYY")
            shortDescription
            title
            gameLink
            gameplayVideoLink
            sourceCodeLink
          }
        }
      }
    }
  `);

  return (
    <Box
      id="showcase"
      component="section"
      sx={{
        width: "100%",
      }}
    >
      <List>
        {nodes.map((game, index) => {
          return (
            <ListItem
              key={game.id}
              sx={{
                padding: 0,
                marginBottom: 2,
              }}
            >
              <Game {...game?.frontmatter}>{game?.body}</Game>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Games;
