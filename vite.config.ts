import { defineConfig } from 'vite'
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
})*/


