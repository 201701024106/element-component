<template>
    <div class="">
        <h5>功能</h5>
        <p>1、可配置性、可维护性强</p>
        <p>2、具备element-plus 表格所有功能</p>
        <p>3、可扩展性强</p>
        <ti-table border :loading="tableLoading" :loadingConfig="loadingConfig" :data="tableData"
            :options="tableOptions" rowEditable :rowEditIndex="rowEditIndex" @confirm="onRowConfirm"
            :pageConfig="pageConfig" v-model:currentPage="currentPage" @page-change="handleChange"
            @cancel="onRowCancel">
            <template #editCell="{ row }">
                <div class="w-[60px] flex items-center justify-button">
                    <el-button size="small">取消</el-button>
                    <el-button size="small" type="primary">确认</el-button>
                </div>
            </template>
            <template #dateTemp="{ row }">
                <el-icon-calendar class="font-[12px] mr-4"></el-icon-calendar>
                <span>{{ row.date }}</span>
            </template>
            <template #nameTemp="{ row }">
                <el-popover trigger="hover" placement="top" width="auto">
                    <template #default>
                        <p>姓名：{{ row.name }}</p>
                        <p>日期：{{ row.date }}</p>
                        <p>地址：{{ row.address }}</p>
                    </template>
                    <template #reference>
                        <el-tag class="cursor-pointer">{{ row.name }}</el-tag>
                    </template>
                </el-popover>
            </template>
            <template #action="{ row, $index }">
                <el-button type="primary" v-if="rowEditIndex === -1 || $index !== rowEditIndex" size="mini"
                    @click="onEdit(row, $index)">编辑</el-button>
                <el-button type="danger" v-else size="mini" @click="onCancel(row, $index)">取消</el-button>
            </template>

        </ti-table>

    </div>
</template>

<script setup lang="ts">
import { ref, reactive, createVNode, onMounted } from 'vue';
import { getTableList } from "@/http/table"

const tableData = ref([])
const tableOptions = ref([
    {
        label: '日期',
        prop: 'date',
        width: 180,
        align: 'left',
        solt: 'dateTemp',
        type: 'date',
        editable: true,
    },
    {
        label: '姓名',
        prop: 'name',
        width: 180,
        align: 'center',
        solt: 'nameTemp'
    },
    {
        label: '班级',
        prop: 'class',
        align: 'center',
        width: 180,
        type: 'select',
        useDict: true,
        editable: true,
        options: [
            {
                label: '物理171',
                value: '0'
            },
            {
                label: '物理172',
                value: '1'
            },
            {
                label: '数学171',
                value: '2'
            },
            {
                label: '数学172',
                value: '3'
            },
        ]
    },
    {
        label: '电话',
        prop: 'tel',
        align: 'center',
        editable: true
    },
    {
        label: '地址',
        prop: 'address',
        align: 'center',
        editable: true
    },
    {
        label: '操作',
        actionable: true,
        width: 140,
    }
])
const tableLoading = ref(true);
const rowEditIndex = ref(-1);
const currentPage = ref(1);
const pageConfig = reactive({
    pageSize: 5,
    total: 100,
    pageSizes: [5, 10],
    layout: 'total, sizes, prev, pager, next, jumper',
});
const svg = `
  <path class="path" d="
    M 30 15
    L 28 17
    M 25.61 25.61
    A 15 15, 0, 0, 1, 15 30
    A 15 15, 0, 1, 1, 27.99 7.5
    L 15 15
  " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
`
const loadingConfig = ref({
    text: '正在加载中...',
    spinner: svg,
    background: 'rgba(0, 0, 0, 0.8)',
    svgViewBox: '-10 -10 50 50',
});


onMounted(() => {
    fetchData();
})
const fetchData = () => {
    tableLoading.value = true;
    getTableList({
        page: currentPage.value,
        pageSize: pageConfig.pageSize
    }).then(res => {
        tableLoading.value = false;
        tableData.value = res.list;
    })
}
const handleChange = (val) => {
    pageConfig.pageSize = val.pageSize;
    fetchData();
}
const onEdit = (row, index) => {
    console.log("点击编辑按钮", index)
    rowEditIndex.value = index;
}
const onCancel = (row, index) => {
    console.log(row)
    rowEditIndex.value = -1;
}
const onRowConfirm = (scope) => {
    console.log("onRowConfirm", scope)
}
const onRowCancel = (scope) => {
    console.log(scope)
}
</script>

<style scoped lang="scss">
svg {
    width: 1em;
    height: 1em;
}
</style>