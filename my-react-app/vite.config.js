import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.gltf'],
  build: {
    rollupOptions: {
        // output:{
        //     manualChunks(id) {
        //         if (id.includes('node_modules')) {
        //             return id.toString().split('node_modules/')[1].split('/')[0].toString();
        //         }
        //     }
        // }
      plugins: [
      ]
    }
  }
})
