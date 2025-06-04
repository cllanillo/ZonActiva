import { createLazyFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';

export const Route = createLazyFileRoute('/stories/$storyId')({
  component: lazy(() => import('~/components/story/Story')),
});
