import { createLazyFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';

export const Route = createLazyFileRoute('/stories')({
  component: lazy(() => import('~/Screens/stories')),
});
