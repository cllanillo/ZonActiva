import { pigment, type PigmentOptions } from '@pigment-css/vite-plugin';
import { defineConfig } from '@tanstack/react-start/config';
import tsConfigPaths from 'vite-tsconfig-paths';

import { theme } from './src/setup/theme';

const pigmentConfig: PigmentOptions = {
    transformLibraries: [
        '@mui/material',
        // '@mui/x-date-pickers',
        // '@mui/x-date-pickers-pro',
    ],
    theme,
};

export default defineConfig({
    server: { preset: 'bun' },
    tsr: { appDirectory: 'src', },
    vite: {
        ssr: {
            noExternal: [
                // '@emotion/react',
                // '@emotion/styled',
                // '@mui/material',
                // '@mui/x-date-pickers',
                // '@mui/x-date-pickers-pro',
                // '@mui/material-pigment-css',
                // '@pigment-css/react',
            ],
        },
        plugins: [
            pigment(pigmentConfig),
            tsConfigPaths({
                projects: ['./tsconfig.json'],
            }),
        ],
    },
})
