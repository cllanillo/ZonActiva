import CloseIcon from '@mui/icons-material/Close';
import { Box, ButtonBase, Card, CardContent, Fade, Grid, type GridBaseProps, IconButton, List, ListItem, Paper, type SxProps, type Theme, Typography } from '@mui/material';
import { useReducer } from 'react';
import { type ThreadDto, useGetEventThreads, useGetThreads } from '~/api/threads';
import { useGetThreadComments } from '~/api/threadsComments';
import { i18n } from '~/lang';
import MediaContent from '🪟/MediaContent';

export interface StoryGridProps {
  eventId?: string;
}

export default function StoryGrid({ eventId }: StoryGridProps) {
  const [thread, updateThread] = useReducer((prevState: ThreadDto | null, t: ThreadDto) => (prevState === t ? null : t), null);
  const threadsQuery = eventId ? useGetEventThreads(eventId) : useGetThreads();

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={[
          {
            height: 1,
            overflow: 'auto',
            scrollbarWidth: 'thin',
            py: 4,
            px: 10,
          },
          !!eventId && {
            p: 1,
            pb: 2,
          },
        ]}
      >
        {threadsQuery.data?.map((t: any) => (
          <StoryGridItem
            key={t.id}
            thread={t}
            updateThread={updateThread}
            size={eventId ? { xs: 6, md: 4 } : undefined}
            sxTitle={{
              position: 'absolute',
              bottom: 0,
            }}
          />
        ))}
      </Grid>

      <Fade in={!!thread} mountOnEnter unmountOnExit>
        <Paper
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 100,
            height: '100%!important',
            width: 1,
            '& .MuiGrid-root': { height: 1, overflow: 'auto' },
          }}
        >
          {!!thread && (
            <Grid container spacing={2}>
              <StoryGridItem thread={thread} size={{ xs: 12, md: 8 }} sxTitle={{ display: 'none' }} autoPlay />

              <Grid size={{ xs: 0, md: 4 }} sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <IconButton
                  sx={{ position: 'absolute', right: 0, top: 0, zIndex: 10, mt: 2.5, mr: 2 }}
                  onClick={() => {
                    updateThread(thread);
                  }}
                >
                  <CloseIcon />
                </IconButton>

                <StoryGridItemTitle thread={thread} sx={{ boxShadow: 8, borderRadius: 2, mb: 2 }} />

                <CommentList threadId={thread?.item_id} />
              </Grid>
            </Grid>
          )}
        </Paper>
      </Fade>
    </>
  );
}

interface StoryGridItemProps {
  autoPlay?: boolean;
  thread: any;
  size: GridBaseProps['size'];
  sxTitle?: SxProps<Theme>;
  updateThread?: (thread: any) => void;
}
function StoryGridItem({ autoPlay = false, size = { xs: 6, md: 4, xl: 3 }, sxTitle, thread, updateThread }: StoryGridItemProps) {
  return (
    <Grid id={`thread-${thread.id}`} size={size}>
      <ButtonBase
        sx={{ height: 1, width: 1, borderRadius: 1, textDecoration: 'none', boxShadow: 2 }}
        disableRipple={!updateThread}
        disableTouchRipple={!updateThread}
        onClick={() => {
          typeof updateThread === 'function' && updateThread(thread);
        }}
      >
        <Card sx={{ position: 'relative', aspectRatio: '9/16', bgcolor: '#1e1e1e', borderRadius: 1, overflow: 'hidden', height: 1, width: 1 }}>
          {/* 
            // region Preview 
          */}
          <Box sx={{ width: '100%', height: '100%', objectFit: 'contain', m: 'auto', display: 'flex' }}>
            <MediaContent src={thread.src} type={thread.type as 'video' | 'image'} isPreview autoPlay={autoPlay} />
          </Box>

          {/* 
            // region Overlay
          */}
          <StoryGridItemTitle thread={thread} sx={sxTitle} />
        </Card>
      </ButtonBase>
    </Grid>
  );
}
function StoryGridItemTitle({ thread, sx = null }: { thread: any; sx?: SxProps<Theme> }) {
  return (
    <CardContent
      sx={[
        {
          position: 'relative',
          height: 48,
          width: 1,
          bgcolor: 'background.paper',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 1,
          pt: 0,
        },
        ...[sx].flat(2),
      ]}
    >
      {/* <Typography variant="body2" color="primary" sx={{ display: 'flex' }}>
          <FavoriteIcon fontSize="small" /> {thread.likes}
        </Typography>
        {thread.type === 'video' && (
          <IconButton size="small" color="primary" onMouseDown={(event) => event.stopPropagation()}>
            <VolumeUpIcon fontSize="small" />
          </IconButton>
        )} */}

      <Box sx={{ position: 'absolute', top: '50%', ml: 1, transform: 'translate(0,-50%)' }}>
        <Typography variant="caption" color="primary.main">
          @{thread.user}
        </Typography>
      </Box>
    </CardContent>
  );
}
interface CommentListProps {
  threadId: string;
}

const CommentList: React.FC<CommentListProps> = ({ threadId }) => {
  const threadsCommentsQuery = useGetThreadComments(threadId);

  if (threadsCommentsQuery.isLoading || threadsCommentsQuery.isFetching)
    return (
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        {i18n.formatString(i18n.actionLoading, i18n.storyComments)}
      </Typography>
    );
  if (!threadsCommentsQuery.data?.length) {
    return (
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        {i18n.formatString(i18n.actionNoItems, i18n.storyComments)}
      </Typography>
    );
  }

  return (
    <List sx={{ height: 1, width: 1, overflow: 'auto', scrollbarWidth: 'thin', bgcolor: 'background.paper' }}>
      {threadsCommentsQuery.data.map((tC) => (
        <ListItem key={tC.id} alignItems="flex-start" sx={{ px: 0 }}>
          <Card variant="outlined" sx={{ width: '100%' }}>
            <CardContent>
              <Typography variant="subtitle2" color="primary.main">
                @{tC.user?.name}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                {tC.content}
              </Typography>
            </CardContent>
          </Card>
        </ListItem>
      ))}
    </List>
  );
};
