import { useAuth0 } from '@auth0/auth0-react';
import LoginIcon from '@mui/icons-material/AccountCircleRounded';
import LogoutIcon from '@mui/icons-material/LogoutRounded';
import MenuOpenIcon from '@mui/icons-material/MenuOpenRounded';
import MenuIcon from '@mui/icons-material/MenuRounded';
import { Avatar, Button, Typography } from '@mui/material';
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

  const { loginWithPopup, logout, isAuthenticated, user, ...x } = useAuth0();
  console.log('🚀 ~ Header ~ x:', { loginWithPopup, logout, isAuthenticated, user, ...x });

  return (
    <header
      sx={{
        width: 1,
        px: 2,
        py: 1.5,
        display: 'flex',
        justifyContent: 'space-between',
        backdropFilter: 'blur(2px)',
        position: 'sticky',
        top: 0,
        gap: 1.5,
        '&>h1': { fontSize: 40, fontWeight: 600, letterSpacing: 1, color: 'primary.main', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 1, pointerEvents: { xs: 'none', md: 'auto' } },
      }}
    >
      <Typography variant="h1" onClick={updateExpand}>
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
          <Avatar src={user.picture} title={i18n.authLogout} onClick={() => logout({})} sx={{}}>
            {`${user.given_name?.[0]?.toUpperCase()} ${user.family_name?.[0]?.toUpperCase()}`}
          </Avatar>
          <LogoutIcon />
        </span>
      ) : (
        <Button title={`${i18n.authLogin}/${i18n.authRegister}`} onClick={() => loginWithPopup()} sx={{ px: 1, gap: 1, '&>span': { display: { xs: 'none', md: 'initial' } } }}>
          <LoginIcon />
          <span>
            {i18n.authLogin}/{i18n.authRegister}
          </span>
        </Button>
      )}
    </header>
  );
}
Header.expandClassName = 'Header-expand' as const;
