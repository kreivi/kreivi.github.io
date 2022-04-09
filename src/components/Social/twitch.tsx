import React from 'react';
import { Tooltip, Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
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
