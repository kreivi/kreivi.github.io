import React from 'react';
import { IconButton, IconButtonProps, Link } from '@mui/material';

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
    <IconButton component={Link} href={href} rel='noreferrer' target='_blank' size='large' {...rest}>
      {children}
    </IconButton>
  );
};

export default LinkIconButton;
