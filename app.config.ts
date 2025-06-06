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

const config = defineConfig({
    tsr: { appDirectory: 'src', },
    vite: {
        plugins: [
            { enforce: 'pre', ...pigment(pigmentConfig) },
            tsConfigPaths({ projects: ['./tsconfig.json'], }),
        ],
        ssr: { noExternal: ['@mui/material'] },
        // build: {
        //     outDir: 'app/css/rendered',
        //     rollupOptions: {
        //         input: [resolve(__dirname, './app/client.tsx')],
        //         output: {
        //             assetFileNames: '[name][extname]',
        //         },
        //         external: ['/app/css/rendered/style.css?url'],
        //     },
        //     assetsDir: '.',
        //     copyPublicDir: false,
        //     emptyOutDir: true,
        //     cssCodeSplit: false,
        // }
        // resolve: {
        //     alias: {
        //         ...(process.env.BUILD_ENV === 'server' && {
        //             '@pigment-css/react': resolve('./src/__mocks__/pigment-react-ssr-mock.ts'),
        //         }),
        //     },
        // },
    },
})

config.then((conf) => {
    console.log("🚀 ~ config:", pigment(pigmentConfig), conf.config.routers.map(x => x.plugins?.apply()))
})
export default config;
