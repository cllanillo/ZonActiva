import FavoriteIcon from '@mui/icons-material/Favorite';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Box, ButtonBase, Card, CardContent, Collapse, Drawer, Grid, IconButton, Paper, Typography } from '@mui/material';
import { useReducer } from 'react';
import { type ThreadDto, useGetEventThreads, useGetThreads } from '~/api/threads';
import MediaContent from '🪟/MediaContent';

export interface StoryGridProps {
  eventId?: string;
}

export default function StoryGrid({ eventId }: StoryGridProps) {
  const [thread, updateThread] = useReducer((prevState: ThreadDto | null, t: ThreadDto) => (prevState === t ? null : t), null);
  const threadsQuery = eventId ? useGetEventThreads(eventId) : useGetThreads();

  return (
    <>
      <Grid container spacing={2} sx={{ height: 1, overflow: 'auto', scrollbarWidth: 'thin', py: 4, px: 10 }}>
        {threadsQuery.data?.map((t) => (
          <Grid size={{ xs: 6, md: 4, xl: 3 }} key={t.id}>
            <ButtonBase sx={{ height: 1, width: 1, borderRadius: 1, textDecoration: 'none', boxShadow: 2 }} onClick={() => updateThread(t)}>
              <Card sx={{ position: 'relative', aspectRatio: '9/16', bgcolor: '#1e1e1e', borderRadius: 1, overflow: 'hidden', height: 1, width: 1 }}>
                {/* 
                    // region Preview 
                */}
                <Box sx={{ width: '100%', height: '100%', objectFit: 'contain' }}>
                  <MediaContent src={t.src} type={t.type as 'video' | 'image'} isPreview />
                </Box>

                {/* 
                    // region Overlay
                */}
                <CardContent
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    height: 48,
                    width: '100%',
                    bgcolor: 'background.paper',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: 1,
                    pt: 0,
                  }}
                >
                  <Typography variant="body2" color="primary" sx={{ display: 'flex' }}>
                    <FavoriteIcon fontSize="small" /> {t.likes}
                  </Typography>
                  {t.type === 'video' && (
                    <IconButton size="small" color="primary" onMouseDown={(event) => event.stopPropagation()}>
                      <VolumeUpIcon fontSize="small" />
                    </IconButton>
                  )}
                </CardContent>

                <Box sx={{ position: 'absolute', bottom: 4, left: 8 }}>
                  <Typography variant="caption" color="gray">
                    @{t.user}
                  </Typography>
                </Box>
              </Card>
            </ButtonBase>
          </Grid>
        ))}
      </Grid>

      <Collapse
        in={!!thread}
        orientation="horizontal"
        sx={{
          position: 'absolute',
          right: 0,
          maxWidth: '30vw',
          height: '100%!important',
          boxShadow: 2,
          '&.MuiCollapse-entered': {},
        }}
      >
        <Paper
          sx={{
            height: 1,
          }}
        >
          {JSON.stringify(thread)}
        </Paper>
      </Collapse>
    </>
  );
}
