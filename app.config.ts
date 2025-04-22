import { extendTheme, pigment, type PigmentOptions } from '@pigment-css/vite-plugin';
import { defineConfig } from '@tanstack/react-start/config';
import tsConfigPaths from 'vite-tsconfig-paths';

import { theme } from './src/setup/theme';

const pigmentConfig: PigmentOptions = {
    transformLibraries: ['@mui/material'],
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
