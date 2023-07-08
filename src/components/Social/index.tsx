import React from "react";
import { Box } from "@mui/material";

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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LinkedIn />
      <GitHub />
      <Mastodon />
      <Itch />
      <YouTube />
    </Box>
  );
};

export default Social;
