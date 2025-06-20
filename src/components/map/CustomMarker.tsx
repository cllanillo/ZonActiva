import PlaceIcon from '@mui/icons-material/Place';
import { Box, CircularProgress, Fade, Tooltip } from '@mui/material';
import { Marker } from '@vis.gl/react-mapbox';
import { lazy, LazyExoticComponent, Suspense, useMemo, useReducer } from 'react';
import { EventPopup } from './EventPopup';
import { EventType } from '~/api/events';

const EventDetail = lazy(() => import('🪟/event/EventDetails'));

interface CustomMarkerProps {
  event: any;
  onClick?: () => void;
  onHover?: () => void;
}

const LazyIcons: Record<EventType, LazyExoticComponent<typeof PlaceIcon>> = {
  FOOTBALL: lazy(() => import('@mui/icons-material/SportsSoccer')),
  RALLY: lazy(() => import('@mui/icons-material/DirectionsCar')),
  CONCERT: lazy(() => import('@mui/icons-material/MusicNote')),
};

export default function CustomMarker({ event }: CustomMarkerProps) {
  console.log('🚀 ~ CustomMarker ~ event:', event);
  const [open, updateOpen] = useReducer((ps) => !ps, false);
  const EventIcon = useMemo(() => (event.icon ? () => <img src={event.icon} /> : LazyIcons[(event.type as EventType) ?? 'CONCERT']), [event]);

  if (!event.lat || !event.lng) return null;
  return (
    <>
      <Fade in={open} mountOnEnter unmountOnExit sx={{ position: 'absolute', zIndex: 1000, inset: 0, bgcolor: 'background.paper', display: 'flex', '&>.MuiCircularProgress-root': { m: 'auto' } }}>
        <span>
          <Suspense fallback={<CircularProgress />}>
            <EventDetail event={event} onClose={updateOpen} />
          </Suspense>
        </span>
      </Fade>

      <Marker latitude={event.lat} longitude={event.lng}>
        <Tooltip title={<EventPopup event={event} />} placement="right-start" slotProps={{ tooltip: { sx: { p: 0, backgroundColor: 'transparent' } } }}>
          <Box
            onClick={updateOpen}
            sx={(theme) => ({
              color: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transform: 'translate(0,-39%)',
              '&>svg:first-of-type': {
                color: 'background.paper',
                fontSize: '4rem',
                filter: `drop-shadow(0px 0px 4px rgb(${theme.palette.primary.mainChannel}/0.5))`,
              },
              '&>*:nth-child(2)': {
                position: 'absolute',
                height: 34,
                width: 34,
                borderRadius: '50%',
                bgcolor: 'background.paper',
                top: 0,
                mt: 7 / 8,
              },
            })}
          >
            <PlaceIcon />

            <Suspense fallback={null}>
              <EventIcon />
            </Suspense>
          </Box>
        </Tooltip>
      </Marker>
    </>
  );
}
