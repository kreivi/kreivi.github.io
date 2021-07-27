import { Typography } from '@material-ui/core';
import React from 'react';

export type GameType = {
  title?: string;
  creationDate?: string;
  shortDescription?: string;
};

const Game: React.FC<GameType> = ({ title, creationDate, shortDescription }) => {
  return (
    <>
      <Typography variant='h3'>{title}</Typography>
      <Typography variant='body2'>{creationDate}</Typography>
      <Typography>{shortDescription}</Typography>
    </>
  );
};

export default Game;
