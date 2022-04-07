import React from 'react';
import { Tooltip, Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import { Twitter as Icon } from 'mdi-material-ui';

import LinkIconButton from '../LinkIconButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      color: '#1DA1F2',
    },
  })
);

/**
 * Twitter specific LinkIconButton.
 * @returns Twitter LinkIconButton.
 */
const TwitterLinkButton: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <LinkIconButton href='https://twitter.com/kreivi_krapula' aria-label='Twitter' size='small'>
      <Tooltip title='Twitter'>
        <Icon className={classes.icon} />
      </Tooltip>
    </LinkIconButton>
  );
};

export default TwitterLinkButton;
