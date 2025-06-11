import { createLazyFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';

export const Route = createLazyFileRoute('/')({
  component: lazy(() => import('~/Screens/map')),
});
