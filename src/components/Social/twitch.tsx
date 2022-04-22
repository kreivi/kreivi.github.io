import React from 'react';
import { Tooltip } from '@mui/material';
import { Twitch as Icon } from 'mdi-material-ui';

import LinkIconButton from '../LinkIconButton';

/**
 * Twitch specific LinkIconButton.
 * @returns Twitch LinkIconButton.
 */
const TwitchLinkButton: React.FC<{}> = () => {
  return (
    <LinkIconButton href='https://www.twitch.tv/kreivi_krapula' aria-label='Twitch' size='small'>
      <Tooltip title='Twitch'>
        <Icon />
      </Tooltip>
    </LinkIconButton>
  );
};

export default TwitchLinkButton;
