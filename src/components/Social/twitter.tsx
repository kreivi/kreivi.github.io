import React from 'react';
import { Tooltip } from '@material-ui/core';
import { Twitter as Icon } from 'mdi-material-ui';

import LinkIconButton from '../LinkIconButton';

const GitHubLinkButton: React.FC<{}> = () => {
  return (
    <LinkIconButton href='https://twitter.com/kreivi_krapula' aria-label='Twitter' size='small'>
      <Tooltip title='Twitter'>
        <Icon />
      </Tooltip>
    </LinkIconButton>
  );
};

export default GitHubLinkButton;
