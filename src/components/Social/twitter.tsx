import React from 'react';
import { Tooltip } from '@mui/material';
import { Twitter as Icon } from 'mdi-material-ui';

import LinkIconButton from '../LinkIconButton';

/**
 * Twitter specific LinkIconButton.
 * @returns Twitter LinkIconButton.
 */
const TwitterLinkButton: React.FC<{}> = () => {
  return (
    <LinkIconButton href='https://twitter.com/kreivi_krapula' aria-label='Twitter' size='small'>
      <Tooltip title='Twitter'>
        <Icon />
      </Tooltip>
    </LinkIconButton>
  );
};

export default TwitterLinkButton;
