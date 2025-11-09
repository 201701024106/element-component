import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    port: 8080
  },
  resolve: {
    alias: {
      // 注意：必须是绝对路径，且确保 __dirname 指向项目根目录
      '@': path.resolve(__dirname, './src') 
    }
  }
})
