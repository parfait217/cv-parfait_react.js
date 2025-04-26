import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/cv-parfait_react.js/',
  server: {
    historyApiFallback: true, // Ajoutez cette ligne
  },
});