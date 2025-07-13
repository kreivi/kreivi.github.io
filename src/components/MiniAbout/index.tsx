import React from 'react';
import { Paper } from '@mui/material';

import Profile from '../Profile';

const MiniAbout: React.FC<{}> = () => {
  return (
    <Paper sx={{paddingX: 1, paddingBottom: 2, marginTop: 1, paddingTop: 1}}>
      <Profile />
    </Paper>
  );
};

export default MiniAbout;
