import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist', // default, can keep
  },
  server: {
    // This ensures React routes like /projects or /about don't show 404 in dev
    historyApiFallback: true,
  },
});
