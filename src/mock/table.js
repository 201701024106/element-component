import Mock from "mockjs";
// 自定义日期格式函数
function formatDate(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

// 生成随机日期
function randomDate() {
    const start = new Date(2016, 0, 1)
    const end = new Date(2016, 11, 31)
    const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime())
    return formatDate(new Date(randomTime))
}
// 生成表格数据
export function generateTableData(count = 100) {
    return Mock.mock({
        [`list|${count}`]: [{
            id: '@increment',
            date: () => randomDate(),
            name: '@cname',
            address: '@province() @city() @county()',
            tel: /^1[3-9]\d{9}$/,
            'class|0-3': 0
        }]
    }).list
}
const tableData = generateTableData(100)

// 定义模拟接口
export default [
    // 示例2：模拟表格接口
    {
        url: "/api/table/list",
        method: "post",
        response: ({ body }) => {  // POST 请求使用 body 获取数据
            const { page = 1, pageSize = 10 } = body;

            // 计算分页数据
            const pageNum = parseInt(page);
            const size = parseInt(pageSize);
            const start = (pageNum - 1) * size;
            const end = start + size;

            // 分页过滤数据
            const paginatedData = tableData.slice(start, end);

            return {
                code: 200,
                data: paginatedData,
                total: tableData.length  // 返回总数量，方便前端分页
            };
        }
    }
]