import PlaceIcon from '@mui/icons-material/Place';
import { Box, Tooltip } from '@mui/material';
import { Marker } from '@vis.gl/react-mapbox';
import { Suspense, useReducer } from 'react';
import { EventPopup } from './EventPopup';

interface CustomMarkerProps {
  event: any;
  onClick?: () => void;
  onHover?: () => void;
}

// const LazyIcons: Record<EventType, LazyExoticComponent<typeof PlaceIcon>> = {
//   FOOTBALL: lazy(() => import('@mui/icons-material/SportsSoccer')),
//   RALLY: lazy(() => import('@mui/icons-material/DirectionsCar')),
//   CONCERT: lazy(() => import('@mui/icons-material/MusicNote')),
// };

export default function CustomMarker({ event }: CustomMarkerProps) {
  const [open, updateOpen] = useReducer((ps) => !ps, false);
  //   const EventIcon = useMemo(() => LazyIcons[event.type], [event]);

  return (
    <Marker latitude={event.lat} longitude={event.lng}>
      <Tooltip title={<EventPopup event={event} />}>
        <Box
          onClick={updateOpen}
          sx={(theme) => ({
            color: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            '&>svg:first-of-type': {
              color: 'background.paper',
              fontSize: '4rem',
              filter: `drop-shadow(0px 0px 4px rgb(${theme.palette.primary.mainChannel}/0.5))`,
            },
            '&>svg:nth-of-type(2)': {
              position: 'absolute',
              bgcolor: 'background.paper',
              top: 0,
              mt: 1.5,
            },
          })}
        >
          <PlaceIcon />

          <Suspense fallback={null}>{/* <EventIcon /> */}</Suspense>
        </Box>
      </Tooltip>
    </Marker>
  );
}
