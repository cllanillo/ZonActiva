import { Outlet, Scripts, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import type { PropsWithChildren } from 'react';
import { Providers } from '⚙️';
import { Layout } from '🪟/Layout';

// import RobotoVariable from '@fontsource-variable/roboto?url';
// import RootCss from '🎨/__root.css?url';

import '@fontsource-variable/roboto';
import '@mui/material-pigment-css/styles.css';
import '🎨/__root.css';

// Object.assign(pigmentTheme, theme);
// console.log('🚀 ~ pigmentTheme:', pigmentTheme, theme);

export const Route = createRootRoute({
  //   head: () => ({
  //     meta: [{ charSet: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { title: 'ZonActiva' }],
  //     links: [
  //       { rel: 'icon', href: 'https://raw.githubusercontent.com/cllanillo/zon-activa/refs/heads/main/zonactiva-icon.webp' },
  //       { rel: 'stylesheet', href: RootCss },
  //       { rel: 'stylesheet', href: RobotoVariable },
  //     ],
  //   }),
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
    <>
      {/* <html>
       <head>
         <HeadContent />
       </head>
       <body sx={{ height: '100dvh', display: 'flex', flexDirection: 'column', backgroundColor: 'background.default' }}> */}
      <Providers>
        <Layout children={children} />
      </Providers>

      <TanStackRouterDevtools position="bottom-right" />
      <Scripts />
      {/* </body>
    </html> */}
    </>
  );
}
