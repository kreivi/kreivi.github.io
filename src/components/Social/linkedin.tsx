import React from 'react';
import { Tooltip } from '@mui/material';
import { Linkedin as Icon } from 'mdi-material-ui';

import LinkIconButton from '../LinkIconButton';

//
/**
 * LinkedIn specific LinkIconButton.
 * @returns LinkedIn LinkIconButton.
 */
const LinkedInLinkButton: React.FC<{}> = () => {
  return (
    <LinkIconButton href='https://www.linkedin.com/in/severi-vidnas/' aria-label='LinkedIn' size='small'>
      <Tooltip title='LinkedIn'>
        <Icon />
      </Tooltip>
    </LinkIconButton>
  );
};

export default LinkedInLinkButton;
