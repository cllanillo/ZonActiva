import { Box, Typography, Divider, List, ListItem, ListItemText } from '@mui/material';
import MediaContent from '🪟/MediaContent';
import { storyItems } from './testData';

export default function Story({ storyId }: { storyId: string }) {
  const storyItem = storyItems.find((it) => it.id === storyId);

  if (!storyItem) {
    return (
      <Box sx={{ bgcolor: 'black', height: '100vh', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography>No se encontró el contenido.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: 'black', color: 'white' }}>
      {/* 
       // region Media
      */}
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#1e1e1e' }}>
        <Box sx={{ width: '100%', height: '100%' }}>
          <MediaContent src={storyItem.src} type={storyItem.type} fullScreen />
        </Box>
      </Box>

      {/* 
       // region Comments
      */}
      <Box sx={{ width: 400, borderLeft: '1px solid #333', p: 2, display: { xs: 'none', md: 'block' }, overflowY: 'auto' }}>
        <Typography variant="h6" gutterBottom>
          Comentarios
        </Typography>
        <Divider sx={{ mb: 2, bgcolor: '#555' }} />
        <List>
          <ListItem alignItems="flex-start">
            <ListItemText primary="@juan" secondary="¡Brutal este evento!" />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText primary="@sofia" secondary="¿Alguien sabe dónde fue esto?" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
