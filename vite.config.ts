import { pigment, type PigmentOptions } from '@pigment-css/vite-plugin';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

import { theme } from './src/configuration/theme';

const pigmentConfig: PigmentOptions = {
    transformLibraries: [
        '@mui/material',
    ],
    theme,
};

export default defineConfig({
    plugins: [
        pigment(pigmentConfig),
        TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
        react(),
        tsConfigPaths({ projects: ['./tsconfig.json'], }),
    ],
});