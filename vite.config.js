import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      'react-icons/si': fileURLToPath(new URL('./node_modules/react-icons/si/index.js', import.meta.url)),
    },
  },
});
