import React from "react";
import { Tooltip } from "@mui/material";
import { Mastodon as Icon } from "mdi-material-ui";

import LinkIconButton from "../LinkIconButton";

/**
 * Mastodon specific LinkIconButton
 * @returns Mastodon LinkIconButton
 */
const MastodonLinkIconButton: React.FC<{}> = () => {
  return (
    <LinkIconButton
      href="https://mastodon.gamedev.place/@kreivi"
      aria-label="Mastodon"
      size="small"
    >
      <Tooltip title="Mastodon">
        <Icon />
      </Tooltip>
    </LinkIconButton>
  );
};

export default MastodonLinkIconButton;
