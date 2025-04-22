import RobotoVariable from '@fontsource-variable/roboto?url';
import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import type { PropsWithChildren } from 'react';

import { Layout } from '~/components/Layout';

import RootCss from '~/css/__root.css?url';
import { Providers } from '~/setup';

export const Route = createRootRoute({
  head: () => ({
    links: [
      { rel: 'stylesheet', href: RootCss },
      { rel: 'stylesheet', href: RobotoVariable },
    ],
    // meta: [],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: PropsWithChildren) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body sx={{ height: '100dvh', display: 'flex', flexDirection: 'column', backgroundColor: 'background.default' }}>
        <Providers>
          <Layout children={children} />
        </Providers>

        <TanStackRouterDevtools position="bottom-right" />
        <Scripts />
      </body>
    </html>
  );
}
