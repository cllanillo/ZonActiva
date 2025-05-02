import { pigment, type PigmentOptions } from '@pigment-css/vite-plugin';
import { defineConfig } from '@tanstack/react-start/config';
import { resolve } from 'path';
import tsConfigPaths from 'vite-tsconfig-paths';

import { theme } from './src/configuration/theme';

const pigmentConfig: PigmentOptions = {
    transformLibraries: [
        '@mui/material',
    ],
    theme,
};

export default defineConfig({
    tsr: { appDirectory: 'src', },
    vite: {
        plugins: [
            pigment(pigmentConfig),
            tsConfigPaths({
                projects: ['./tsconfig.json'],
            }),
        ],
        ssr: { noExternal: ['@mui/material'] },
        resolve: {
            alias: {
                ...(process.env.BUILD_ENV === 'server' && {
                    // Solo cuando es para el server (SSR build)
                    '@pigment-css/react': resolve('./src/__mocks__/pigment-react-ssr-mock.ts'),
                }),
            },
        },

    },
})
