import type { ConfigEnv } from 'vite';
import { defineConfig, loadEnv } from 'vite';
import StylelintPlugin from 'vite-plugin-stylelint';
import CheckerPlugin from 'vite-plugin-checker';
import ReactPlugin from '@vitejs/plugin-react';
import Svgr from 'vite-plugin-svgr';
import path from 'path';

export default ({ mode }: ConfigEnv) => {
    const currentEnv = loadEnv(mode, process.cwd());

    return defineConfig({
        base: mode === 'production' ? './' : currentEnv.VITE_PUBLIC_PATH,
        mode: mode,
        css: {
            modules: {
                localsConvention: 'camelCase',
                generateScopedName: `[name]__[local]__[hash:base64:2]`,
            },
        },
        build: {
            outDir: path.resolve(__dirname, 'build'),
            rollupOptions: {
                output: {
                    chunkFileNames: 'assets/js/[name]-[hash].js',
                    entryFileNames: 'assets/js/[name]-[hash].js',
                },
            },
        },
        resolve: {
            alias: {
                '@': '/src',
                '@app': '/src/app',
                '@pages': '/src/pages',
                '@widgets': '/src/widgets',
                '@features': '/src/features',
                '@entities': '/src/entities',
                '@shared': '/src/shared',
            },
        },
        plugins: [
            ReactPlugin(),
            StylelintPlugin(),
            Svgr(),
            CheckerPlugin({
                typescript: true,
                eslint: {
                    lintCommand: 'eslint "./src/**/*.{js,ts,jsx,tsx}"',
                },
            }),
        ],
    });
};
