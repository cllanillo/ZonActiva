import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/MovieOutlined';
import PlaceIcon from '@mui/icons-material/Place';
import { createRef, useMemo, type PropsWithChildren, type RefObject } from 'react';
import { NavLink } from '🪟/NavLink';
import { Header } from './Header';

export function Layout({ children }: PropsWithChildren) {
  const expandableRefs = useMemo(() => [createRef()] as Array<RefObject<HTMLElement>>, []);

  return (
    <>
      <Header expandableRefs={expandableRefs} />

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
          bgcolor: 'background.paperGlass',
          boxShadow: '16px 16px 24px var(--mui-palette-background-paper)',
          '&>div:first-of-type': { borderRadius: 2, overflow: 'hidden' },
        }}
      >
        {children}

        <nav
          id="nav"
          ref={expandableRefs[0]}
          sx={{
            position: 'absolute',
            zIndex: 1000,
            top: 0,
            left: 0,
            mt: 2,
            ml: 2,
            maxWidth: 'fit-content',
            display: 'flex',
            alignItems: 'start',
            gap: 2,
            pointerEvents: 'none',
            '& *': { pointerEvents: 'auto' },
            [`&:not(.${Header.expandClassName}) a`]: {
              gap: 0,
              '&>p': {
                width: 0,
                overflow: 'hidden',
                interpolateSize: 'allow-keywords',
              },
            },
          }}
          onClick={(event) => {
            const anchorTarget = event.target instanceof HTMLAnchorElement && event.target;
            if (!anchorTarget) return;
          }}
        >
          <span sx={{ display: 'flex', flexDirection: 'column', gap: 'inherit' }}>
            <NavLink to="/" icon={HomeIcon} label="Home" />

            <NavLink to="/map" icon={PlaceIcon} label="Map" />

            <NavLink to="/stories" icon={MovieIcon} label="Stories" />
          </span>
        </nav>

        <div
          sx={(theme) => ({
            position: `absolute`,
            inset: 0,
            zIndex: 1_000_000,
            outline: 8,
            outlineColor: `background.paper`,
            boxShadow: `inset 4px 4px 20px rgb(0,0,0)`,
            borderRadius: 1,
            pointerEvents: `none`,
          })}
        />
      </span>
    </>
  );
}
