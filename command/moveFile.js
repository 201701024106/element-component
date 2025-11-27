import fs from 'fs';
import path from 'path';

const srcDir = path.resolve('./src');
const destDir = path.resolve('./packages'); // 目标目录
const ignoreDirs = ['mock', 'router'];
const ignoreFiles = ['index.vue', 'menu.tsx', 'types.ts', 'type.ts', 'useCopy.ts', 'index.scss'];

const packagesIndexDir = "./src/components/index.ts";
const destIndexPath = "./packages/index.ts";
// 确保目标目录存在
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

/**
 * 清空文件夹
 * @param {*} folderPath 
 */
function deleteFolderRecursive(folderPath) {
    //判断文件夹是否存在
    if (fs.existsSync(folderPath)) {
        //读取文件夹下的文件目录，以数组形式输出
        fs.readdirSync(folderPath).forEach((file) => {
            //拼接路径
            const curPath = path.join(folderPath, file);
            //判断是不是文件夹，如果是，继续递归
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            } else {
                //删除文件或文件夹
                fs.unlinkSync(curPath);
            }
        });
        //仅可用于删除空目录
        fs.rmdirSync(folderPath);
    }
}

// 删除文件夹下的所有文件和文件夹
deleteFolderRecursive('../packages');
// 读取所有文件（包括子目录中的文件）
const files = fs.readdirSync(srcDir, { recursive: true });

// 过滤并复制文件
files.forEach(file => {
    // 检查是否需要忽略该文件或文件夹
    const filePathParts = file.split(path.sep);

    // 如果是根目录下的文件且在忽略列表中，则跳过
    if (ignoreFiles.includes(path.basename(file))) {
        console.log(`Ignored file: ${file}`);
        return;
    }

    // 检查是否在忽略的目录中
    if (ignoreDirs.some(dir => file.startsWith(dir + path.sep))) {
        return;
    }

    const fullPath = path.join(srcDir, file);
    const stat = fs.statSync(fullPath);

    // 只处理文件，跳过文件夹
    if (stat.isFile()) {
        let destPath;

        // 特殊处理 components 文件夹内的文件
        if (file.startsWith('components' + path.sep)) {
            // 将 components 内的文件拍平到目标目录（移除 components 前缀）
            const fileName = path.basename(file);
            destPath = path.join(destDir, fileName);
        } else {
            // 保持其他文件的目录结构
            destPath = path.join(destDir, file);
        }

        // 确保目标文件的目录存在
        const destDirname = path.dirname(destPath);
        if (!fs.existsSync(destDirname)) {
            fs.mkdirSync(destDirname, { recursive: true });
        }

        fs.copyFileSync(fullPath, destPath);
        console.log(`Copied: ${file} -> ${destPath}`);
    }
});

fs.copyFileSync(packagesIndexDir, destIndexPath);
