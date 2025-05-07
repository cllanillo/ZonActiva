import { createLazyFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';

export const Route = createLazyFileRoute('/map')({
  component: lazy(() => import('~/Screens/map')),
});
