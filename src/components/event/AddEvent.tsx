import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import { lazy, useReducer, useRef } from 'react';

const AddIcon = lazy(() => import('@mui/icons-material/Add'));
const EventForm = lazy(() => import('./EventForm'));

export function AddEvent() {
  const buttonRef = useRef<HTMLButtonElement>(undefined);
  const [open, updateOpen] = useReducer((p) => !p, false);

  return (
    <>
      <Button ref={buttonRef} startIcon={<AddIcon />} sx={{ position: 'absolute', top: 16, left: 16 }} onClick={updateOpen}>
        Create Event
      </Button>

      <Popover open={open} anchorEl={buttonRef.current} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} transformOrigin={{ vertical: 'top', horizontal: 'left' }} onClose={updateOpen}>
        <EventForm />
      </Popover>
    </>
  );
}
