import pigmentTheme from '@pigment-css/react/theme';
import { getRouterManifest } from '@tanstack/react-start/router-manifest';
import { createStartHandler, defaultStreamHandler } from '@tanstack/react-start/server';
import { createRouter, theme } from '⚙️';

Object.assign(pigmentTheme, theme);
console.log('🚀 ~ SSR.pigmentTheme:', 'transitions' in pigmentTheme);

export default createStartHandler({ createRouter, getRouterManifest })(defaultStreamHandler);
