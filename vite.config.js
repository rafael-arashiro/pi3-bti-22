import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://pi3-bti-22-back.onrender.com', // back-end
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
