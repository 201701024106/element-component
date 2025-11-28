import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from "vite-plugin-mock";
import { resolve } from "node:path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx(), viteMockServe({
        mockPath: "./src/mock",
        enable: true,
        prodEnabled: true,
        ignore: /^\_/,
        logger: true,
    }),],
    // 关键：base 配置为仓库名（末尾必须加 /）
    base: '/element-component/',
    server: {
        port: 8888
    },
    resolve: {
        alias: {
            // 注意：必须是绝对路径，且确保 __dirname 指向项目根目录
            '@': path.resolve(__dirname, './src')
        }
    }
})
