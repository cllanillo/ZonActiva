import ButtonBase from '@mui/material/ButtonBase';
import { createLink, type CreateLinkProps } from '@tanstack/react-router';
import { type FC } from 'react';

const NavLinkBase = createLink(ButtonBase);

interface NavLinkProps extends CreateLinkProps {
  icon: FC;
  label?: string;
}

export const NavLink = ({ icon: Icon, label, ...props }: NavLinkProps) => {
  return (
    <NavLinkBase
      preload="intent"
      viewTransition
      {...props}
      sx={(theme) => ({
        width: '100%',
        justifyContent: 'flex-start',
        gap: 1,
        paddingInline: 1,
        height: 40,
        borderRadius: 1,
        color: 'primary.main',
        transition: theme.transitions.create('all'),
        '&.active': {
          color: 'primary.contrastText',
          backgroundColor: 'primary.main',
        },
      })}
    >
      <Icon /> <p children={label} />
    </NavLinkBase>
  );
};
