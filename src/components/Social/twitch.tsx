import React from 'react';
import { Tooltip, makeStyles, Theme, createStyles } from '@material-ui/core';
import { Twitch as Icon } from 'mdi-material-ui';

import LinkIconButton from '../LinkIconButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      color: '#9146FF',
    },
  })
);

/**
 * Twitch specific LinkIconButton.
 * @returns Twitch LinkIconButton.
 */
const TwitchLinkButton: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <LinkIconButton href='https://www.twitch.tv/kreivi_krapula' aria-label='Twitch' size='small'>
      <Tooltip title='Twitch'>
        <Icon className={classes.icon} />
      </Tooltip>
    </LinkIconButton>
  );
};

export default TwitchLinkButton;
