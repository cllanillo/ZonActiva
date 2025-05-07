import { createFileRoute } from '@tanstack/react-router';
import MapBoxCss from '🎨/map.css?url';

export const Route = createFileRoute('/map')({
  head: () => ({ links: [{ rel: 'stylesheet', href: MapBoxCss }] }),
});
