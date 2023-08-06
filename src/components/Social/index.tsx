import React from "react";
import { Box, Grid } from "@mui/material";

import LinkedIn from "./linkedin";
import GitHub from "./github";
import Mastodon from "./mastodon";
import Itch from "./itch";
import YouTube from "./youtube";

/**
 * Collection of social link elements.
 * @returns Social element.
 */
const Social: React.FC<{}> = () => {
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid>
        <LinkedIn />
      </Grid>
      <Grid>
        <GitHub />
      </Grid>
      <Grid>
        <Mastodon />
      </Grid>
      <Grid>
        <Itch />
      </Grid>
      <Grid>
        <YouTube />
      </Grid>
    </Grid>
  );
};

export default Social;
