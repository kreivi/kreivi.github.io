import React from 'react';
import { Typography } from '@material-ui/core';

import Avatar from '../Avatar';

const Contact: React.FC<{}> = () => {
  return (
    <div>
      <Avatar />
      <Typography variant='h4' component='h1' align='center'>
        VIDNÄS SEVERI
      </Typography>
    </div>
  );
};

export default Contact;
