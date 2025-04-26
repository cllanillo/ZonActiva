import Typography from '@mui/material/Typography';
import Stack from '@mui/material-pigment-css/Stack';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Stack>
      <Typography variant="h2" marginBlockEnd={4}>
        Hello world!
      </Typography>
    </Stack>
  );
}
