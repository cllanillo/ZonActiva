import PlaceIcon from '@mui/icons-material/Place';
import { Box } from '@mui/material';
import { Marker } from '@vis.gl/react-mapbox';
import { Suspense } from 'react';
import { type EventAddDto } from '~/api/events';

interface CustomMarkerProps {
  event: EventAddDto;
  onClick?: () => void;
  onHover?: () => void;
}

// const LazyIcons: Record<EventType, LazyExoticComponent<typeof PlaceIcon>> = {
//   FOOTBALL: lazy(() => import('@mui/icons-material/SportsSoccer')),
//   RALLY: lazy(() => import('@mui/icons-material/DirectionsCar')),
//   CONCERT: lazy(() => import('@mui/icons-material/MusicNote')),
// };

export default function CustomMarker({ onClick, onHover }: CustomMarkerProps) {
  //   const EventIcon = useMemo(() => LazyIcons[event.type], [event]);

  return (
    <Marker latitude={43.314546} longitude={-3.856231}>
      <Box
        onClick={onClick}
        onMouseEnter={onHover}
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
    </Marker>
  );
}
