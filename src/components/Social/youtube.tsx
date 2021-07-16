import React from 'react';
import { Tooltip } from '@material-ui/core';
import { Youtube as Icon } from 'mdi-material-ui';

import LinkIconButton from '../LinkIconButton';

const GitHubLinkButton: React.FC<{}> = () => {
  return (
    <LinkIconButton href='https://www.youtube.com/channel/UCnBgkNXb-9QKU7a4xyc4pHw' aria-label='YouTube' size='small'>
      <Tooltip title='YouTube'>
        <Icon />
      </Tooltip>
    </LinkIconButton>
  );
};

export default GitHubLinkButton;
