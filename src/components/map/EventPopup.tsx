import { Box, Card, Typography } from '@mui/material';
import type { EventRowDto } from '~/api/events';

interface EventPopupProps {
  event: EventRowDto;
  onClick?: () => void;
}

export default function EventMapPopup({ event }: EventPopupProps) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        maxWidth: '60ch',
        p: 1,
        gap: 1,
        boxShadow: 4,
        borderRadius: 1,
        bgcolor: 'background.paper',
      }}
    >
      <img src={event.imageUrl} alt={event.name} sx={{ aspectRatio: 1 / 1, borderRadius: 1, objectFit: 'cover' }} />

      <Box sx={{ p: 0, flex: 1 }}>
        <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 0.5 }}>
          {event.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {event.description}
        </Typography>
      </Box>
    </Card>
  );
}
