import path from 'path';
import { defineConfig, build } from "vite"
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import { fileURLToPath } from 'url';

// 获取当前文件的绝对路径
const __filename = fileURLToPath(import.meta.url);
// 获取当前文件所在目录
const __dirname = path.dirname(__filename);
// 打包入口文件夹
const entryDir = path.resolve(__dirname, '../packages');
const outputDir = path.resolve(__dirname, '../lib');

const baseConfig = defineConfig({
    configFile: false,
    publicDir: false,
    plugins: [vue(), vueJsx()],
    resolve: {
        alias: {
            // 注意：必须是绝对路径，且确保 __dirname 指向项目根目录
            '@': path.resolve(__dirname, './src')
        }
    }
});
const rollOptions = {
    external: ['vue', 'vue-router'],
    output: {
        globals: {
            vue: 'Vue'
        }
    }
};

const buildAll = async () => {
    await build({
        ...baseConfig,
        build: {
            outDir: outputDir,
            emptyOutDir: true,
            rollupOptions: {
                ...rollOptions,
                output: {
                    ...rollOptions.output,
                    entryFileNames: (chunkInfo) => {
                        // 自定义文件名规则
                        if (chunkInfo.name.endsWith('.umd')) {
                            return '[name].umd.js';
                        }
                        return '[name].[format].js';
                    },
                    // 确保ES模块格式正确
                    format: 'umd'
                }
            },
            lib: {
                entry: path.resolve(entryDir, 'index.ts'),
                name: 'ti-vue-ui',
                fileName: 'ti-vue-ui',
                formats: ['es', 'umd']
            }
        }
    })
}

const buildLib = async () => {
    await buildAll()
}
buildLib()