import { ButtonBase } from '@mui/material';
import { styled } from '@mui/material-pigment-css';
import { createLink, type CreateLinkProps } from '@tanstack/react-router';
import { type FC, useMemo } from 'react';

const NavLinkBase = createLink(ButtonBase);
// const NavLinkBase = styled(createLink(ButtonBase))(({ theme }) => {
//   return {
//     '&': {
//       width: '100%',
//       justifyContent: 'flex-start',
//       gap: theme.spacing(1),
//       paddingInline: theme.spacing(1),
//       height: 40,
//       borderRadius: `var(--mui-shape-borderRadius,${theme.shape.borderRadius}px)`,
//       color: `var(--mui-palette-primary-main,${theme.palette.primary.main})`,
//       transition: theme.transitions.create('all'),
//     },
//     '&.active': {
//       color: `var(--mui-palette-primary-contrastText,${theme.palette.primary.contrastText})`,
//       backgroundColor: `var(--mui-palette-primary-main,${theme.palette.primary.main})`,
//     },
//   };
// });

interface NavLinkProps extends CreateLinkProps {
  icon: FC;
  label?: string;
}

export const NavLink = ({ icon: Icon, label, ...props }: NavLinkProps) => {
  //   const Link = useMemo(() => createLink(ButtonBase), []);
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
