import React from 'react';
import { Tooltip, makeStyles, Theme, createStyles } from '@material-ui/core';
import { Github as Icon } from 'mdi-material-ui';

import LinkIconButton from '../LinkIconButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      color: '#FFFFFF',
    },
  })
);

/**
 * GitHub specific LinkIconButton.
 * @returns GitHub LinkIconButton.
 */
const GitHubLinkButton: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <LinkIconButton href='https://github.com/kreivi' aria-label='GitHub' size='small'>
      <Tooltip title='GitHub'>
        <Icon className={classes.icon} />
      </Tooltip>
    </LinkIconButton>
  );
};

export default GitHubLinkButton;
