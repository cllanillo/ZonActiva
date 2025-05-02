import { ClickAwayListener, Fade, Portal } from '@mui/material';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import { lazy, useReducer, useRef } from 'react';

const AddIcon = lazy(() => import('@mui/icons-material/Add'));
const EventForm = lazy(() => import('./EventForm'));

export function AddEvent() {
  const [open, updateOpen] = useReducer((p) => !p, false);

  return (
    <>
      <Fade in={open} mountOnEnter unmountOnExit sx={{ position: 'absolute', inset: 0, backdropFilter: 1, bgcolor: 'background.paper' }}>
        <span>
          <EventForm />
        </span>
      </Fade>

      <Portal container={() => document.getElementById('nav')}>
        <Button startIcon={open ? null : <AddIcon />} sx={{ backdropFilter: 1, width: 136, minWidth: 'max-content' }} onClick={updateOpen}>
          {open ? 'Close' : 'Create Event'}
        </Button>
      </Portal>
    </>
  );
}
