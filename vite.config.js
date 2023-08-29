import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ` 
        @import "./src/styles/partials/_variables.scss";
        @import "./src/styles/partials/_mixins.scss";
        `
      },
    },
  }
})
