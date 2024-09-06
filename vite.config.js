import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintConfig from './eslint.config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintConfig()],
  server: {
    port: 3000,
  },
});
