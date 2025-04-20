import { pigment } from '@pigment-css/vite-plugin';
import { defineConfig } from '@tanstack/react-start/config';
import tsConfigPaths from 'vite-tsconfig-paths';

import { theme } from './src/setup/theme';



/** @type {import('@pigment-css/vite-plugin').PigmentOptions}*/
const pigmentConfig = {
    transformLibraries: ['@mui/material', '@mui/system'],
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
    },
})
