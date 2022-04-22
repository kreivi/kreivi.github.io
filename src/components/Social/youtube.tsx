import React from 'react';
import { Tooltip } from '@mui/material';
import { Youtube as Icon } from 'mdi-material-ui';

import LinkIconButton from '../LinkIconButton';

/**
 * YouTube specific LinkIconButton.
 * @returns YouTube LinkIconButton.
 */
const YouTubeLinkButton: React.FC<{}> = () => {
  return (
    <LinkIconButton href='https://www.youtube.com/channel/UCnBgkNXb-9QKU7a4xyc4pHw' aria-label='YouTube' size='small'>
      <Tooltip title='YouTube'>
        <Icon />
      </Tooltip>
    </LinkIconButton>
  );
};

export default YouTubeLinkButton;
