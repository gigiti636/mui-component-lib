import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vitest/config';
import dts from 'vite-plugin-dts';
import type { UserConfigExport } from 'vite';

const name = 'core-lib';

const app = async (): Promise<UserConfigExport> => {
  const formattedName = name.match(/[^/]+$/)?.[0] ?? name;

  return defineConfig({
    plugins: [react(), dts({ insertTypesEntry: true })],
    build: {
      copyPublicDir: false,
      lib: {
        entry: {
          index: path.resolve(__dirname, 'src/index'),
          theme: path.resolve(__dirname, 'src/theme/index'),
          components: path.resolve(__dirname, 'src/components/index'),
        },
        name: formattedName,
        formats: ['es'],
        fileName: (format, entryName) => {
          // Adjust the filename based on the entry point
          return entryName === 'index' ? `${formattedName}.${format}.js` : `${entryName}.${format}.js`;
        },
      },
      minify: true,
      rollupOptions: {
        external: ['react', 'react/jsx-runtime', 'react-dom', '@mui/icons-material', '@mui/material'],
        output: {
          globals: {
            react: 'React',
            'react/jsx-runtime': 'react/jsx-runtime',
            'react-dom': 'ReactDOM',
          },
        },
        // Exclude story files from the build
        input: {
          index: path.resolve(__dirname, 'src/index'),
          theme: path.resolve(__dirname, 'src/theme/index'),
          components: path.resolve(__dirname, 'src/components/index'),
        },
        // Exclude story files by matching patterns
        treeshake: {
          moduleSideEffects: (id) => !id.includes('stories'),
        },
      },
    },
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    test: {
      globals: true,
      environment: 'jsdom',
    },
  });
};

export default app;
