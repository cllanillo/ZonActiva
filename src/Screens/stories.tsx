// import FavIcon from '@mui/icons-material/Favorite';
// import { Typography } from '@mui/material';
// import { keyframes } from '@mui/material-pigment-css';
import Stack from '@mui/material-pigment-css/Stack';
import StoryGrid from '🪟/story/StoryGrid';

export default function ScreenStories() {
  // const heartbeat = keyframes({ from: { scale: 0.75 }, '15%': { scale: 1.5 }, to: { scale: 0.75 } });

  return (
    <Stack sx={{ m: 'auto', alignItems: 'center', justifyContent: 'center', overflow: 'visible!important' }}>
      <StoryGrid />
    </Stack>
  );
}
