import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Portal from '@mui/material/Portal';
import { lazy, Suspense, useEffect, useMemo, useReducer, useState } from 'react';

const AddIcon = lazy(() => import('@mui/icons-material/Add'));
const CloseIcon = lazy(() => import('@mui/icons-material/Close'));
const EventForm = lazy(() => import('./EventForm'));

export function AddEvent() {
  const [open, updateOpen] = useReducer((p) => !p, false);
  const [portalAnchor, setPortalAnchor] = useState<HTMLElement>();
  useEffect(() => {
    const e = document.getElementById('nav');
    if (e) return setPortalAnchor(e);

    const interval = setInterval(() => {
      const e = document.getElementById('nav');
      e && setPortalAnchor(e), clearInterval(interval);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Fade in={open} mountOnEnter unmountOnExit sx={{ position: 'absolute', zIndex: 10, inset: 0, backdropFilter: 2, bgcolor: 'background.paper' }}>
        <span>
          <Suspense fallback={null}>
            <EventForm />
          </Suspense>
        </span>
      </Fade>

      {portalAnchor && (
        <Portal container={portalAnchor}>
          <Button startIcon={<Suspense fallback={null}>{open ? <CloseIcon /> : <AddIcon />}</Suspense>} sx={{ backdropFilter: 1, width: 136, minWidth: 'max-content' }} onClick={updateOpen}>
            {open ? 'Close' : 'Create Event'}
          </Button>
        </Portal>
      )}
    </>
  );
}
