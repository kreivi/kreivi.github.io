import React from 'react';
import { Tooltip } from '@material-ui/core';
import { Github as Icon } from 'mdi-material-ui';

import LinkIconButton from '../LinkIconButton';

/**
 * GitHub specific LinkIconButton.
 * @returns GitHub LinkIconButton.
 */
const GitHubLinkButton: React.FC<{}> = () => {
  return (
    <LinkIconButton href='https://github.com/kreivi' aria-label='GitHub' size='small'>
      <Tooltip title='GitHub'>
        <Icon />
      </Tooltip>
    </LinkIconButton>
  );
};

export default GitHubLinkButton;
