import FavIcon from '@mui/icons-material/Favorite';
import { keyframes } from '@mui/material-pigment-css';
import Stack from '@mui/material-pigment-css/Stack';
import Typography from '@mui/material/Typography';

export default function ScreenIndex() {
  const heartbeat = keyframes({ from: { scale: 0.75 }, '25%': { scale: 1.25 }, to: { scale: 0.75 } });

  return (
    <Stack sx={{ m: 'auto', mt: '25dvh', alignItems: 'center', justifyContent: 'center', overflow: 'visible!important' }}>
      <Typography variant="h2" marginBlockEnd={4}>
        Te AMO
      </Typography>
      <FavIcon
        color="error"
        sx={{
          height: '35dvh',
          width: '90vw',
          filter: 'drop-shadow(4px 4px 20px #f4433680)',
          animation: `${heartbeat} 1000ms infinite`,
        }}
      />
    </Stack>
  );
}
