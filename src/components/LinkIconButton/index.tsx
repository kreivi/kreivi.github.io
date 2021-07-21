import React from 'react';
import { IconButton, IconButtonProps, Link } from '@material-ui/core';

export type LinkIconButtonType = {
  href: string;
} & IconButtonProps;

/**
 * IconButton that acts as Link.
 * @param {LinkIconButtonType} props 
 * @returns LinkIconButton element.
 */
const LinkIconButton: React.FC<LinkIconButtonType> = ({ href, children, ...rest }) => {
  return (
    <IconButton component={Link} href={href} rel='noreferrer' target='_blank' {...rest}>
      {children}
    </IconButton>
  );
};

export default LinkIconButton;
