import React from 'react';
import { Tooltip } from '@material-ui/core';
import { Twitch as Icon } from 'mdi-material-ui';

import LinkIconButton from '../LinkIconButton';

const GitHubLinkButton: React.FC<{}> = () => {
  return (
    <LinkIconButton href='https://www.twitch.tv/kreivi_krapula' aria-label='Twitch' size='small'>
      <Tooltip title='Twitch'>
        <Icon />
      </Tooltip>
    </LinkIconButton>
  );
};

export default GitHubLinkButton;
