import { Box, Card, Typography } from '@mui/material';

interface EventPopupProps {
  event: any;
  onClick?: () => void;
}

export function EventPopup({ event }: EventPopupProps) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        maxWidth: '60ch',
        p: 1,
        gap: 1,
        boxShadow: 4,
        borderRadius: 1,
        bgcolor: 'background.paperGlass',
        backdropFilter: 2,
        '&>h6': {
          display: 'flex',
          alignItems: 'center',
          '&>img': { height: 32, width: 32, aspectRatio: 1, objectFit: 'contain' },
        },
        '& img': { maxWidth: 0.5, maxHeight: 150, borderRadius: 1, ml: 1, objectFit: 'contain', float: 'right' },
      }}
    >
      <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 0.5 }}>
        {!!event.icon && <img src={event.icon} alt={`icon:${event.name}`} />}
        {event.name}
      </Typography>

      <Box sx={{ p: 0, flex: 1 }}>
        {!!event.image && <img src={event.image} alt={`image:${event.name}`} />}

        <Typography variant="body2">{event.description?.split('\n')[0]}</Typography>
      </Box>
    </Card>
  );
}
