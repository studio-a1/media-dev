import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cloudflare from "@cloudflare/vite-plugin";
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cloudflare(),
  ],
  resolve: {
    dedupe: ['react', 'react-dom'],
    alias: {
      // FIX: __dirname is not available in ES modules. Using import.meta.url is the modern way to handle file paths.
      'react': fileURLToPath(new URL('./node_modules/react', import.meta.url)),
      'react-dom': fileURLToPath(new URL('./node_modules/react-dom', import.meta.url)),
    }
  },
});
