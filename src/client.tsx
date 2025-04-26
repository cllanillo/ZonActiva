/// <reference types="vinxi/types/client" />
import pigmentTheme from '@pigment-css/react/theme';
import { StartClient } from '@tanstack/react-start';
import { hydrateRoot } from 'react-dom/client';
import { createRouter, theme } from '⚙️';

const router = createRouter();

Object.assign(pigmentTheme, theme);
console.log('🚀 ~ CLIENT.pigmentTheme:', 'transitions' in pigmentTheme);

hydrateRoot(document, <StartClient router={router} />);
