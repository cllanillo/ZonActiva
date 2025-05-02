import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { lazy, useReducer, type PropsWithChildren } from 'react';
import { NavLink } from '🪟/NavLink';

const HomeIcon = lazy(() => import('@mui/icons-material/Home'));
const MenuIcon = lazy(() => import('@mui/icons-material/MenuRounded'));
const MenuOpenIcon = lazy(() => import('@mui/icons-material/MenuOpenRounded'));
const MovieIcon = lazy(() => import('@mui/icons-material/MovieOutlined'));
const PlaceIcon = lazy(() => import('@mui/icons-material/Place'));

export function Layout({ children }: PropsWithChildren) {
  const [expand, updateExpand] = useReducer((p) => !p, false);

  return (
    <>
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

        <TextField label={'Search'} />
      </header>

      <span
        id="main"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexGrow: 1,
          borderTop: 2,
          borderRadius: 2,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          borderColor: 'background.paper',
          color: 'text.primary',
          bgcolor: 'background.paper',
          boxShadow: '16px 16px 24px var(--mui-palette-background-paper)',
          '&>div:first-of-type': { borderRadius: 2, overflow: 'hidden' },
        }}
      >
        {children}

        <nav
          id="nav"
          sx={[
            (theme) => ({
              position: 'absolute',
              top: theme.spacing(2),
              left: theme.spacing(2),
              maxWidth: 'fit-content',
              display: 'flex',
              alignItems: 'start',
              gap: 2,
              pointerEvents: 'none',
              '& *': { pointerEvents: 'auto' },
            }),
            !expand &&
              ((theme) => ({
                '& a': {
                  gap: theme.spacing(0),
                  '&>p': {
                    width: 0,
                    overflow: 'hidden',
                    interpolateSize: 'allow-keywords',
                  },
                },
              })),
          ]}
          onClick={(event) => {
            const anchorTarget = event.target instanceof HTMLAnchorElement && event.target;
            if (!anchorTarget) return;

            console.log('🚀 ~ onClick.aside:', event.target, anchorTarget.getBoundingClientRect());
          }}
        >
          <span sx={{ display: 'flex', flexDirection: 'column', gap: 'inherit' }}>
            <NavLink to="/" icon={HomeIcon} label="Home" />

            <NavLink to="/map" icon={PlaceIcon} label="Map" />

            <NavLink to="/stories" icon={MovieIcon} label="Stories" />
          </span>
        </nav>

        <div
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            color: 'background.paper',
            outline: 8,
            outlineColor: 'currentcolor',
            boxShadow: 'inset 4px 4px 20px rgb(0,0,0)',
            borderRadius: 1,
            pointerEvents: 'none',
          }}
        />
      </span>
    </>
  );
}
