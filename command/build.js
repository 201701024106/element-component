import path from 'path';
import { defineConfig, build } from "vite"
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import { fileURLToPath } from 'url';
import fsExtra from 'fs-extra';
import fs from "node:fs"

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
            '@': path.resolve(__dirname, '../src')
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

// 全量打包
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
/**
 * 单个组件打包
 * @param {*} name 组件名称
 */
const buildSingle = async (name) => {
    await build({
        ...baseConfig,
        build: {
            rollupOptions: rollOptions,
            lib: {
                entry: path.resolve(entryDir, name),
                name: 'index',
                fileName: 'index',
                formats: ['es', 'umd']
            },
            outDir: path.resolve(outputDir, name),
        }
    })
}
// 把驼峰转化成横杠连接
const toLine = (value) => {
    return value.replace(/(?<!^)([A-Z])/g, "-$1").toLowerCase();
}
// 每个组件生成 package.json
const generatePackageJson = async (name) => {
    const fileStr = `{
        "name": "ti-${toLine(name)}",
        "main": "index.umd.js",
        "module": "index.es.js",
        "style": "style.css"
    }`
    // 输出
    fsExtra.outputFile(path.resolve(outputDir, `${name}/package.json`), fileStr, 'utf-8')
}

const buildLib = async () => {
    await buildAll()
    const components = fs.readdirSync(entryDir).filter(item => {
        const componentDir = path.resolve(entryDir, item)
        const isDir = fs.lstatSync(componentDir).isDirectory()
        if (!isDir) return false
        const files = fs.readdirSync(componentDir)
        return files.includes('index.ts')
    })
    // 循环构建
    for (const name of components) {
        await buildSingle(name)
        await generatePackageJson(name)
    }
}
buildLib()