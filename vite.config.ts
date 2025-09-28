
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Custom plugin to reliably delete wrangler.json as the final step of the build
const cleanupWranglerJson = () => ({
  name: 'cleanup-wrangler-json',
  closeBundle: () => {
    const wranglerConfigFile = path.resolve(__dirname, 'dist', 'wrangler.json');
    console.log('--- [Vite Plugin] Running post-build cleanup ---');
    if (fs.existsSync(wranglerConfigFile)) {
      try {
        fs.unlinkSync(wranglerConfigFile);
        console.log(`[SUCCESS] Vite plugin successfully deleted: ${wranglerConfigFile}`);
      } catch (err) {
        console.error(`[ERROR] Vite plugin failed to delete ${wranglerConfigFile}:`, err);
      }
    } else {
      console.log(`[INFO] Vite plugin: File not found, skipping deletion: ${wranglerConfigFile}`);
    }
    console.log('--- [Vite Plugin] Cleanup finished ---');
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cleanupWranglerJson()],
})








/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from "vite";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [cloudflare()],
});




/*// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
}) */


