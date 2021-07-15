import React from 'react';
import { Tooltip } from '@material-ui/core';
import { Linkedin as Icon } from 'mdi-material-ui';

import LinkIconButton from '../LinkIconButton';

const GitHubLinkButton: React.FC<{}> = () => {
  return (
    <LinkIconButton href='https://www.linkedin.com/in/severi-vidnas/' aria-label='LinkedIn' size='small'>
      <Tooltip title='LinkedIn'>
        <Icon />
      </Tooltip>
    </LinkIconButton>
  );
};

export default GitHubLinkButton;
