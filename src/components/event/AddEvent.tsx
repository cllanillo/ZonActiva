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

      <div
        sx={[
          (theme) => ({
            position: 'absolute',
            maxHeight: '75dvh',
            width: '50vw',
            borderRadius: 1,
            p: 2,
            top: 46,
            left: 16,
            zIndex: -1,
            scale: 0,
            transformOrigin: 'top left',
            transition: theme.transitions.create('all'),
          }),
          open && { zIndex: 1, scale: 1, boxShadow: 1, bgcolor: 'background.paper', color: 'text.primary' },
        ]}
      >
        <EventForm />
      </div>
      {/* <Popover
        open={open}
        anchorEl={buttonRef.current}
        slots={{ transition: (props) => props.children }}
        slotProps={{ backdrop: { slots: { transition: (props) => props.children } }, }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={updateOpen}
      > 
        <EventForm />
      </Popover>*/}
    </>
  );
}
