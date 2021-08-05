import React from 'react';
import { createStyles, makeStyles, Theme, Tooltip } from '@material-ui/core';
import { Linkedin as Icon } from 'mdi-material-ui';

import LinkIconButton from '../LinkIconButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      color: '#2867B2',
    },
  })
);

//
/**
 * LinkedIn specific LinkIconButton.
 * @returns LinkedIn LinkIconButton.
 */
const LinkedInLinkButton: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <LinkIconButton href='https://www.linkedin.com/in/severi-vidnas/' aria-label='LinkedIn' size='small'>
      <Tooltip title='LinkedIn'>
        <Icon className={classes.icon} />
      </Tooltip>
    </LinkIconButton>
  );
};

export default LinkedInLinkButton;
