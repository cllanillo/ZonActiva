import { Collapse, Slide } from '@mui/material';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useLocation } from '@tanstack/react-router';
import { lazy, useReducer, type PropsWithChildren } from 'react';
import { SwitchTransition } from 'react-transition-group';
import { NavLink } from '🪟/NavLink';

const HomeIcon = lazy(() => import('@mui/icons-material/Home'));
const MenuIcon = lazy(() => import('@mui/icons-material/MenuRounded'));
const MenuOpenIcon = lazy(() => import('@mui/icons-material/MenuOpenRounded'));
const MovieIcon = lazy(() => import('@mui/icons-material/MovieOutlined'));
const PlaceIcon = lazy(() => import('@mui/icons-material/Place'));

export function Layout({ children }: PropsWithChildren) {
  //   console.log('🚀 ~ Layout ~ children:', children);
  const [expand, updateExpand] = useReducer((p) => !p, false);

  const loc = useLocation();

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

      <main
        id="main"
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          flexGrow: 1,
          borderTop: 2,
          borderRadius: 2,
          borderTopRightRadius: '.5%',
          borderBottomLeftRadius: '.5%',
          borderBottomRightRadius: 0,
          ml: 3,
          overflow: 'hidden',
          color: 'background.paper',
          bgcolor: 'currentColor',
          boxShadow: '16px 16px 24px currentColor',
          '&>*': { flexGrow: 1 },
        }}
      >
        <SwitchTransition mode="in-out">
          <Slide direction="up" key={loc.href}>
            <span sx={{ position: 'relative' }}>
              {children}
              <div
                sx={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 1,
                  boxShadow: '0px 0px 0px 8px currentColor,inset 4px 4px 20px rgb(0,0,0)',
                  borderRadius: 1,
                  pointerEvents: 'none',
                }}
              />
            </span>
          </Slide>
        </SwitchTransition>

        <nav
          sx={[
            {
              maxWidth: 'fit-content',
              py: 3,
              px: 0.5,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              gap: 0.5,
              borderRight: 1,
              borderColor: 'inherit',
              zIndex: 1,
            },
            !expand &&
              ((theme) => ({
                '&>a': {
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
          <NavLink to="/" icon={HomeIcon} label="Home" />

          <NavLink to="/map" icon={PlaceIcon} label="Map" />

          <NavLink to="/stories" icon={MovieIcon} label="Stories" />
        </nav>
      </main>
    </>
  );
}
