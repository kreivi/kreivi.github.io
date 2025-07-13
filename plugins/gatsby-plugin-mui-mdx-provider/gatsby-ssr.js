/* eslint-disable import/prefer-default-export, react/prop-types */
import React from 'react';
import MuiComponentProvider from './MuiComponentsProvider';

export const wrapRootElement = ({ element }) => {
  return <MuiComponentProvider>{element}</MuiComponentProvider>;
};
