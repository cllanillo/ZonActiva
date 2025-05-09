import { pigment, type PigmentOptions } from '@pigment-css/vite-plugin';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, type HmrOptions } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

import { theme } from './src/configuration/theme';

const pigmentConfig: PigmentOptions = {
    transformLibraries: [
        '@mui/material',
        // '@mui/x-date-pickers-pro'
    ],
    // exclude:[/dayjs.*/i],
    theme,
};

const tauriHmr: HmrOptions = { protocol: 'ws', host: process.env.TAURI_DEV_HOST, port: 3000 - 1 };

export default defineConfig({
    build: {
        target: process.env.TAURI_ENV_PLATFORM == 'windows' ? 'chrome105' : 'safari13',
        ...(!!process.env.TAURI_ENV_DEBUG && { minify: false, sourcemap: true })
    },
    clearScreen: false,
    envPrefix: ['VITE_', 'TAURI_ENV_'],
    server: {
        port: 3000,
        strictPort: true,
        host: tauriHmr.host || false,
        hmr: tauriHmr.host ? tauriHmr : undefined,
        watch: { ignored: ['**/src-tauri/**'] }
    },
    plugins: [
        pigment(pigmentConfig),
        TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
        react(),
        tsConfigPaths({ projects: ['./tsconfig.json'], }),
    ],
});