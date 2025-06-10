import { Marker } from '@vis.gl/react-mapbox';
import PlaceIcon from '@mui/icons-material/Place';
import { Box, SvgIconProps } from '@mui/material';
import { lazy, LazyExoticComponent, Suspense, useMemo } from 'react';
import { EventType, type EventDto } from '~/api/events';

interface CustomMarkerProps {
  event: EventDto;
  onClick?: () => void;
  onHover?: () => void;
}

const LazyIcons: Record<EventType, LazyExoticComponent<typeof PlaceIcon>> = {
  FOOTBALL: lazy(() => import('@mui/icons-material/SportsSoccer')),
  RALLY: lazy(() => import('@mui/icons-material/DirectionsCar')),
  CONCERT: lazy(() => import('@mui/icons-material/MusicNote')),
};

export default function CustomMarker({ event, onClick, onHover }: CustomMarkerProps) {
  const icon = useMemo(() => {
    if (event.iconUrl) return <img src={event.iconUrl} />;

    const defaultIcon = <PlaceIcon sx={{ color: 'primary.main' }} />,
      LazyEventIcon = LazyIcons[event.type];
    return LazyEventIcon ? (
      <Suspense fallback={defaultIcon}>
        <LazyEventIcon sx={{ color: 'primary.main' }} />
      </Suspense>
    ) : (
      defaultIcon
    );
  }, []);

  return (
    <Marker latitude={event.latitude} longitude={event.longitude}>
      <Box
        onClick={onClick}
        onMouseEnter={onHover}
        sx={{
          backgroundColor: 'white',
          borderRadius: '50%',
          boxShadow: 2,
          p: 0.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {icon}
      </Box>
    </Marker>
  );
}
