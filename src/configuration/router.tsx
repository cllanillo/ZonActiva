import { createRouter as createReactRouter } from '@tanstack/react-router';
import type { ReactNode } from 'react';

import { routeTree } from '~/routeTree.gen';

export function createRouter() {
  const router = createReactRouter({
    routeTree,
    defaultPreload: 'intent',
    defaultErrorComponent: (err?: { error?: { stack: ReactNode } }) => <p>{err?.error?.stack}</p>,
    defaultNotFoundComponent: () => <p>not found</p>,
    scrollRestoration: true,
  });

  return router;
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
