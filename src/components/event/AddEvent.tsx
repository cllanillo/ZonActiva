import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Portal from '@mui/material/Portal';
import { lazy, Suspense, useEffect, useMemo, useReducer, useState } from 'react';

const AddIcon = lazy(() => import('@mui/icons-material/Add'));
const CloseIcon = lazy(() => import('@mui/icons-material/Close'));
const EventForm = lazy(() => import('./EventForm'));

export function AddEvent() {
  const [open, updateOpen] = useReducer((p) => !p, false);

  return (
    <>
      <Fade in={open} mountOnEnter unmountOnExit sx={{ position: 'absolute', zIndex: 10, inset: 0, backdropFilter: 4, bgcolor: 'background.paperGlass' }}>
        <span>
          <Suspense fallback={null}>
            <EventForm />
          </Suspense>
        </span>
      </Fade>

      <Button
        startIcon={<Suspense fallback={null}>{open ? <CloseIcon /> : <AddIcon />}</Suspense>}
        sx={{
          bgcolor: 'background.paperGlass',
          zIndex: 110,
          pointerEvents: 'all',
          backdropFilter: 1,
          width: 136,
          minWidth: 'max-content',
          mt: 2,
          mr: 'calc(16 * 2px + 46px)',
          position: 'absolute',
          right: 0,
        }}
        onClick={updateOpen}
      >
        {open ? 'Close' : 'Create Event'}
      </Button>
    </>
  );
}
