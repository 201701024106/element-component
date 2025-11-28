import path from 'path';
import { defineConfig, build } from "vite"
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import { fileURLToPath } from 'url';
import fsExtra from 'fs-extra';
import fs from "node:fs"
import pkg from '../package.json' with { type: 'json' };
console.log("组件库版本", pkg.version);
const version = pkg.version;
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
            },
            lib: {
                entry: path.resolve(entryDir, 'index.ts'),
                name: 'ti-element-component',
                fileName: 'index',
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
    const packageName = name === '.' ? './' : `${name}/`;
    const fileStr = `{
    "name": "ti-element-${name === '.' ? 'component' : toLine(name)}",
    "version": "${version}",
    "main": "index.umd.js",
    "module": "index.js",
    "types": "index.d.ts",
    "author": {
        "name": "Dongsheng Wang",
        "email": "201647997@qq.com"
    },
    "keywords": [
        "ti",
        "component",
        "element-${name === '.' ? 'component' : toLine(name)}",
        "ti-element-${name === '.' ? 'component' : toLine(name)}",
        "vue",
            "element-plus",
            "element-component",
            "封装组件"
    ]
}`;
    // 输出
    fsExtra.outputFile(path.resolve(outputDir, `${packageName}package.json`), fileStr, 'utf-8')
}
const generateDts = async (name) => {
    const packageName = name === '.' ? '' : `${name}/`;
    const fileStr = `import { App } from 'vue'
// 声明代表Vue的组件库
declare const _default: {
    install(app: App): void
}
export default _default;`
    // 输出
    fsExtra.outputFile(path.resolve(outputDir, `${packageName}index.d.ts`), fileStr, 'utf-8')
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
        await generateDts(name)
    }
    // 生成根目录下的 package.json
    await generatePackageJson('.')
    await generateDts('.')
}
buildLib()