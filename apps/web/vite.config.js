import path from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

import packageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    define: {
      'process.env': {},
      'import.meta.env.PACKAGE_VERSION': JSON.stringify(packageJson.version),
    },
    plugins: [react(), svgr({
      svgrOptions: { exportType: 'named', ref: true },
      include: '**/*.svg',
    }),],
    publicDir: 'public',
    resolve: {
      alias: {
        '@types': path.resolve(__dirname, './src/@types'),
        '@': path.resolve(__dirname, './src'),
        api: path.resolve(__dirname, './src/api/'),
        assets: path.resolve(__dirname, './src/assets/'),
        components: path.resolve(__dirname, './src/components/'),
        constants: path.resolve(__dirname, './src/constants/'),
        containers: path.resolve(__dirname, './src/containers/'),
        exceptions: path.resolve(__dirname, './src/exceptions/'),
        fixtures: path.resolve(__dirname, './src/fixtures/'),
        gql: path.resolve(__dirname, './src/gql/'),
        hooks: path.resolve(__dirname, './src/hooks/'),
        index: path.resolve(__dirname, './src/index/'),
        modules: path.resolve(__dirname, './src/modules/'),
        routes: path.resolve(__dirname, './src/routes/'),
        sentry: path.resolve(__dirname, './src/sentry/'),
        services: path.resolve(__dirname, './src/services/'),
        store: path.resolve(__dirname, './src/store/'),
      },
    },
    server: {
      port: 3002,
    },
    preview: {
      port: 3002,
    },
  };
});
