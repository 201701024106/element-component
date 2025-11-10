import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  server: {
    port: 8080
  },
  resolve: {
    alias: {
      // 注意：必须是绝对路径，且确保 __dirname 指向项目根目录
      '@': path.resolve(__dirname, './src')
    }
  }
})
