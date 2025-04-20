import DefaultPropsProvider from "@mui/material/DefaultPropsProvider";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useState, type ReactNode } from "react";

import RobotoVariable from "@fontsource-variable/roboto?url";

import { Header } from "~/components/Header";

export const Route = createRootRoute({
  head: () => ({
    links: [{ rel: "stylesheet", href: RobotoVariable }],
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

function Providers({ children }: { children: ReactNode }) {
  return (
    <DefaultPropsProvider value={{ MuiButton: { variant: "contained" } }}>
      {/*  */}
      {children}
    </DefaultPropsProvider>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body sx={{ height: "100dvh", display: "flex", flexDirection: "column" }}>
        <Providers>
          <Header />

          <main
            id="main"
            sx={{
              p: 4,
              width: 1,
              display: "flex",
              flexDirection: "row-reverse",
              flexGrow: 1,
              "&>*": { flexGrow: 1 },
            }}
          >
            {children}
          </main>
        </Providers>

        <TanStackRouterDevtools position="bottom-right" />
        <Scripts />
      </body>
    </html>
  );
}
