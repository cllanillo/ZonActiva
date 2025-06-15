import CloseIcon from '@mui/icons-material/Close';
import { Button, CircularProgress, Fade } from '@mui/material';
import { lazy, Suspense, useReducer } from 'react';

const AddIcon = lazy(() => import('@mui/icons-material/Add'));
const EventForm = lazy(() => import('./EventForm'));

export function AddEvent() {
  const [open, updateOpen] = useReducer((p) => !p, false);

  return (
    <>
      <Fade
        in={open}
        mountOnEnter
        unmountOnExit
        sx={{ position: 'absolute', zIndex: 10, inset: 0, backdropFilter: 4, bgcolor: 'background.paperGlass', display: 'flex', '&>.MuiCircularProgress-root': { m: 'auto' } }}
      >
        <span>
          <Suspense fallback={<CircularProgress />}>
            <EventForm />
          </Suspense>
        </span>
      </Fade>

      <Button
        key={Number(open)}
        startIcon={!open && <AddIcon />}
        sx={[
          {
            bgcolor: 'background.paperGlass',
            zIndex: 110,
            pointerEvents: 'all',
            backdropFilter: 1,
            minWidth: 'max-content',
            maxHeight: 40,
            mt: 2,
            mr: 'calc(16 * 2px + 46px)',
            position: 'absolute',
            right: 0,
            py: 7 / 8,
          },
          open && { mr: 2, px: 1.25 },
        ]}
        onClick={updateOpen}
      >
        {open ? <CloseIcon /> : 'Create Event'}
      </Button>
    </>
  );
}
