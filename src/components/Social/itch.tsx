import React from 'react';
import { Tooltip } from '@material-ui/core';
import { LinkBoxOutline as Icon } from 'mdi-material-ui';

import LinkIconButton from '../LinkIconButton';

const GitHubLinkButton: React.FC<{}> = () => {
  return (
    <LinkIconButton href='https://kreivi.itch.io/' aria-label='Itch.io' size='small'>
      <Tooltip title='Itch.io'>
        <Icon />
      </Tooltip>
    </LinkIconButton>
  );
};

export default GitHubLinkButton;
