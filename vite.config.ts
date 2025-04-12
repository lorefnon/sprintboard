import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 9898,
    proxy: {
      '/graphql': "http://localhost:4000",
    }
  }
})
