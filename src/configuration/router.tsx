import { createRouter as createReactRouter } from '@tanstack/react-router';

import { routeTree } from '~/routeTree.gen';

export function createRouter() {
  const router = createReactRouter({
    routeTree,
    defaultPreload: 'intent',
    defaultErrorComponent: (err) => <p>{err.error.stack}</p>,
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
