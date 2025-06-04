import FavoriteIcon from '@mui/icons-material/Favorite';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Box, Card, CardContent, Grid, IconButton, Typography } from '@mui/material';
import { linkOptions } from '@tanstack/react-router';
import MediaContent from '🪟/MediaContent';
import { NavLinkBase } from '🪟/navigation';
import { storyItems } from './testData';

export default function StoryGrid() {
  return (
    <Box sx={{ bgcolor: 'black', minHeight: '100vh', p: 2 }}>
      <Grid container spacing={2}>
        {storyItems.map((item) => (
          <Grid size={{ xs: 6, md: 3 }} key={item.id}>
            <NavLinkBase {...linkOptions({ to: '/stories/$storyId', params: { storyId: item.id } })} style={{ textDecoration: 'none' }}>
              <Card sx={{ position: 'relative', aspectRatio: '9/16', bgcolor: '#1e1e1e', borderRadius: 2, overflow: 'hidden' }}>
                {/* 
                    // region Preview 
                */}
                <Box sx={{ width: '100%', height: '100%' }}>
                  <MediaContent src={item.src} type={item.type as 'video' | 'image'} isPreview />
                </Box>

                {/* 
                    // region Overlay
                */}
                <CardContent
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    bgcolor: 'background.paper',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: 1,
                  }}
                >
                  <Typography variant="body2" color="primary">
                    <FavoriteIcon fontSize="small" /> {item.likes}
                  </Typography>
                  {item.type === 'video' && (
                    <IconButton size="small" color="primary">
                      <VolumeUpIcon fontSize="small" />
                    </IconButton>
                  )}
                </CardContent>

                <Box sx={{ position: 'absolute', bottom: 4, left: 8 }}>
                  <Typography variant="caption" color="gray">
                    @{item.user}
                  </Typography>
                </Box>
              </Card>
            </NavLinkBase>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
