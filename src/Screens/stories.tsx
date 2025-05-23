import FavIcon from '@mui/icons-material/Favorite';
import { Typography } from '@mui/material';
import { keyframes } from '@mui/material-pigment-css';
import Stack from '@mui/material-pigment-css/Stack';

export default function ScreenStories() {
  const heartbeat = keyframes({ from: { scale: 0.75 }, '15%': { scale: 1.5 }, to: { scale: 0.75 } });

  return (
    <Stack sx={{ m: 'auto', mt: '25dvh', alignItems: 'center', justifyContent: 'center', overflow: 'visible!important' }}>
      {true ? (
        <Typography variant="h2" marginBlockEnd={4}>
          Hello Stories
        </Typography>
      ) : (
        <>
          <Typography variant="h2" marginBlockEnd={4}>
            Te amo Muchooooo!!!
          </Typography>
          <FavIcon
            color="error"
            sx={{
              height: '35dvh',
              width: '90vw',
              filter: 'drop-shadow(4px 4px 20px #f4433680)',
              animation: `${heartbeat} 550ms infinite`,
            }}
          />
        </>
      )}
    </Stack>
  );
}
