import { useAuth0 } from '@auth0/auth0-react';
import MenuOpenIcon from '@mui/icons-material/MenuOpenRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MenuIcon from '@mui/icons-material/MenuRounded';
import { Avatar, Box, Button, Typography } from '@mui/material';
import { type RefObject, useReducer } from 'react';
import { i18n } from '~/lang';

interface HeaderProps {
  expandableRefs?: Array<RefObject<HTMLElement>>;
}

export function Header({ expandableRefs }: HeaderProps) {
  const [expand, updateExpand] = useReducer((p) => {
    if (p) {
      expandableRefs?.forEach((ref) => ref.current?.classList.remove(Header.expandClassName));
      return false;
    }

    expandableRefs?.forEach((ref) => ref.current?.classList.add(Header.expandClassName));
    return true;
  }, false);

  const { loginWithPopup, logout, isAuthenticated, user } = useAuth0();

  return (
    <header sx={{ width: 1, px: 2, py: 1.5, display: 'flex', justifyContent: 'space-between', backdropFilter: 'blur(2px)', position: 'sticky', top: 0, gap: 1.5 }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: 40,
          fontWeight: 600,
          letterSpacing: 1,
          color: 'primary.main',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
        onClick={updateExpand}
      >
        {expand ? <MenuOpenIcon /> : <MenuIcon />} ZonActiva
      </Typography>

      {user && isAuthenticated ? (
        <span
          sx={(theme) => ({
            position: 'relative',
            '&,&>.MuiAvatar-root, &>svg': {
              height: 40,
              width: 40,
              borderRadius: '50%',
              color: 'primary.main',
              bgcolor: 'background.paper',
              boxShadow: `0px 0px 4px rgb(${theme.palette.primary.mainChannel}/0.5)`,
            },
            '&:hover>svg': { opacity: 1 },
            '&>svg': {
              p: 1,
              pr: 0.75,
              position: 'absolute',
              inset: 0,
              opacity: 0,
              color: 'primary.main',
              bgcolor: 'background.paper',
              transition: theme.transitions.create('opacity'),
              '& path': { filter: `drop-shadow(0px 0px 4px rgb(${theme.palette.primary.mainChannel}/0.5))` },
            },
          })}
        >
          <Avatar src={user.picture} title={i18n.authLogout} onClick={() => logout()} sx={{}}>
            {`${user.given_name?.[0]?.toUpperCase()} ${user.family_name?.[0]?.toUpperCase()}`}
          </Avatar>
          <LogoutRoundedIcon />
        </span>
      ) : (
        <Button title={`${i18n.authLogin}/${i18n.authRegister}`} onClick={() => loginWithPopup()}>
          {i18n.authLogin}/{i18n.authRegister}
        </Button>
      )}
    </header>
  );
}
Header.expandClassName = 'Header-expand' as const;
