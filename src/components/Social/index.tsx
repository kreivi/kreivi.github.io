import React from 'react';
import { Box } from '@mui/material';

import LinkedIn from './linkedin';
import GitHub from './github';
import Twitter from './twitter';
import Twitch from './twitch';
import Itch from './itch';
import YouTube from './youtube';

/**
 * Collection of social link elements.
 * @returns Social element.
 */
const Social: React.FC<{}> = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <LinkedIn />
      <Twitter />
      <GitHub />
      <Itch />
      <YouTube />
      <Twitch />
    </Box>
  );
};

export default Social;
