import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/antd') || id.includes('node_modules/@ant-design/icons')) {
            return 'antd';
          }

          if (id.includes('node_modules/react-responsive')) {
            return 'responsive';
          }

          if (id.includes('node_modules/swiper')) {
            return 'swiper';
          }

          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react';
          }

          return undefined;
        },
      },
    },
  },
});
