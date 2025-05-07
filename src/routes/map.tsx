import { createFileRoute } from '@tanstack/react-router';
import { AddEvent } from '🪟/event/AddEvent';
import { LayoutMap } from '🪟/LayoutMap';

import MapBoxCss from '🎨/map.css?url';

export const Route = createFileRoute('/map')({
  head: () => ({ links: [{ rel: 'stylesheet', href: MapBoxCss }] }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <LayoutMap />

      <AddEvent />
    </>
  );
}
