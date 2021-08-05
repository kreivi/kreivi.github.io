import React from 'react';
import { Tooltip, makeStyles, Theme, createStyles } from '@material-ui/core';
import { Youtube as Icon } from 'mdi-material-ui';

import LinkIconButton from '../LinkIconButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      color: '#FF0000',
    },
  })
);

/**
 * YouTube specific LinkIconButton.
 * @returns YouTube LinkIconButton.
 */
const YouTubeLinkButton: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <LinkIconButton href='https://www.youtube.com/channel/UCnBgkNXb-9QKU7a4xyc4pHw' aria-label='YouTube' size='small'>
      <Tooltip title='YouTube'>
        <Icon className={classes.icon} />
      </Tooltip>
    </LinkIconButton>
  );
};

export default YouTubeLinkButton;
