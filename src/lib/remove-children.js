// clean-provinces.js
import fs from "fs";
// add-children-to-provinces.js
// 读取两个文件
const provincesCleaned = JSON.parse(fs.readFileSync('./provinces-cleaned.json', 'utf8'));
const provincesData = JSON.parse(fs.readFileSync('./provinces.json', 'utf8'));

const provincesDataMap = provincesData.map((item, index) => {
    return item.list.map(province => {
        const citys = provincesCleaned.find(item => item.code === province.code);
        return {
            ...province,
            children: citys.children
        }
    })
});
console.log(provincesDataMap);
// 写入新文件
fs.writeFileSync('./provinces-with-children.json', JSON.stringify(provincesDataMap, null, 2), 'utf8');

console.log('已成功为provinces.json的每个节点添加children字段，生成新文件provinces-with-children.json');