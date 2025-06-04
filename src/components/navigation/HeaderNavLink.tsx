import { type CreateLinkProps } from '@tanstack/react-router';
import { type FC } from 'react';
import { NavLinkBase } from './NavLinkBase';

export interface HeaderNavLinkProps extends CreateLinkProps {
  icon: FC;
  label?: string;
}

export const HeaderNavLink = ({ icon: Icon, label, ...props }: HeaderNavLinkProps) => {
  return (
    <NavLinkBase
      preload="intent"
      viewTransition
      {...props}
      sx={(theme) => ({
        width: '100%',
        justifyContent: 'flex-start',
        gap: 0.75,
        paddingInline: 1,
        height: 40,
        color: 'text.disabled',
        bgcolor: 'background.paper',
        border: 1,
        backdropFilter: 1,
        borderRadius: 1,
        transition: theme.transitions.create('all'),
        '&>svg': { px: 0.25, borderRadius: 1, boxSizing: 'content-box' },
        '&.active': {
          bgcolor: 'primary.glass',
          color: 'primary.main',
        },
      })}
    >
      <Icon /> <p children={label} />
    </NavLinkBase>
  );
};
