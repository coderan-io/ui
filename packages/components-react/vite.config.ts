import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        react(),
        dts({
            include: 'src/**',
        })
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'components-react',
            fileName: 'index',
            formats: ['es', 'cjs'],
        },
        rollupOptions: {
            external: [
                'react',
                "react/jsx-runtime",
                'react-dom',
            ],
            output: {
                globals: {
                    'react': 'react',
                    'react-dom': 'ReactDOM',
                    'react/jsx-runtime': 'react/jsx-runtime',
                },
            },
        }
        // copyPublicDir: false,
        // rollupOptions: {
        //     external: ['react', 'react/jsx-runtime']
        // }
    }
});
