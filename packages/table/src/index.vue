<template>
    <div class="ti-tabel-container">
        <el-table :data="data" v-bind="$attrs" style="width: 100%" v-loading="loading"
            :element-loading-text="loadingConfig.text" :element-loading-background="loadingConfig.background"
            @row-click="(row,column, $event)=>onRowClick(row,column,$event)"
            :element-loading-spinner="loadingConfig.spinner" :element-loading-svg-view-box="loadingConfig.svgViewBox">
            <el-table-column v-for="item in tableOptions" :key="item.prop" :label="item.label" :width="item.width"
                :align="item.align" :prop="item.prop">
                <template #default="scope">
                    <template v-if="(scope.$index + scope.column.id === currentEdit)">
                        <div class="flex items-center">
                            <el-date-picker v-if="item.type=='date'" format="YYYY/MM/DD" value-format="YYYY-MM-DD" v-model="scope.row[item.prop!]"></el-date-picker>
                            <el-select
                                v-else-if="item.type=== 'select'"
                                v-model="scope.row[item.prop!]"
                                :options="item.options"
                                :props="props"
                                placeholder="Select"
                                style="width: 240px"
                            />
                            <el-input v-else v-model="scope.row[item.prop!]"></el-input>
                            <div @click="()=> currentEdit = null">
                                <slot name="editCell" v-if="$slots.editCell" :scope="scope"></slot>
                                <div v-else class="icons w-[40px]">
                                    <el-icon-check @click="onConfirm(scope)"
                                        class="icon mr-[4px] text-[#0f0]"></el-icon-check>
                                    <el-icon-close @click="onCancel(scope)" class="icon text-[#f00]"></el-icon-close>
                                </div>
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <template v-if="rowEditIndex === scope.$index">
                            <el-date-picker v-if="item.type=='date'" format="YYYY/MM/DD" value-format="YYYY-MM-DD" v-model="scope.row[item.prop!]"></el-date-picker>
                            <el-select
                                v-else-if="item.type=== 'select'"
                                v-model="scope.row[item.prop!]"
                                :options="item.options"
                                :props="props"
                                placeholder="Select"
                                style="width: 240px"
                            />
                            <el-input v-else v-model="scope.row[item.prop!]"></el-input>
                        </template>
                        <template v-else>
                            <slot v-if="item.solt" :name="item.solt" v-bind="scope"></slot>
                            <span v-else-if="item.useDict">
                                {{ getLabelByDict(item.options, scope.row[item.prop!]) }}
                            </span>
                            <span v-else>
                                {{ scope.row[item.prop!] }}
                            </span>
                            <component @click.stop="onClickEdit(scope)" class="edit" v-if="item.editable" :is="`el-icon-${toLine(editIcon)}`"></component>
                        </template>
                    </template>
                </template>
            </el-table-column>
            <el-table-column :key="actionOptions.prop" :label="actionOptions.label" :width="actionOptions.width"
                :align="actionOptions.align" :prop="actionOptions.prop">
                <template #default="scope">
                    <slot name="action" v-bind="scope"> </slot>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination class="mt-[8px]" v-model:current-page="_currentPage" v-model:page-size="pageConfig.pageSize"
            :page-sizes="pageConfig.pageSizes" layout="total, sizes, prev, pager, next, jumper"
            :total="pageConfig.total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, PropType, defineProps, computed, defineEmits, watch, onMounted } from 'vue';
import { TableOptions } from './type';
import { cloneDeep } from 'lodash';

const props = defineProps({
    // 表格配置
    options: {
        type: Array as PropType<TableOptions[]>,
        required: true,
    },
    data: {
        type: Array as PropType<any[]>,
        required: true,
        default: [],
    },
    loading: {
        type: Boolean,
        default: false,
    },
    //   加载loading 的配置
    loadingConfig: {
        type: Object,
        default: () => {
            return {
                text: '加载中...',
                spinner: 'svg',
                background: 'rgba(0, 0, 0, 0.8)',
                svgViewBox: '-10, -10, 50, 50',
            };
        },
    },
    // 可编辑单元格显示的图标
    editIcon: {
        type: String,
        default: 'edit',
    },
    // 是否可编辑行
    rowEditable: {
        type: Boolean,
        default: false,
    },
    rowEditIndex: {
        type: Number,
        default: -1,
    },
    currentPage: {
        type: Number,
        default: 1,
    },
    pageConfig: {
        type: Object,
        default: () => {
            return {
                pageSize: 10,
                pageSizes: [10, 20, 30, 40],
                total: 0,
            };
        },
    },
});

const emit = defineEmits(['confirm', 'cancel', "pageChange", 'update:currentPage'])
const _currentPage = computed({get: () => props.currentPage, set: (val) => emit('update:currentPage', val)});
const tableOptions = computed(() => {
    return props.options.filter((item) => !item.actionable);
});

const actionOptions = computed(() => {
    return props.options.find((item) => item.actionable);
});
// 当前点击的单元格
const currentEdit = ref(null);
const currentEditRow = ref(null);
// 表格数据
let tableData = ref(cloneDeep(props.data));
onMounted(() => {
    tableData.value = tableData.value.map((item) => {
        return { ...item, edit: false };
    });
});
watch(() => props.data, (newData) => {
    tableData.value = cloneDeep(newData);
    tableData.value = tableData.value.map((item) => {
        return { ...item, edit: false };
    });
}, { immediate: true });
// 监听父组件传递的行索引
watch(() => props.rowEditIndex, (newIndex) => {
    if (newIndex >= 0) {
        currentEdit.value = newIndex;
        currentEditRow.value = tableData.value[newIndex];
    }
});
const getLabelByDict = (dict: any, value: any) => {
    console.log("报错",dict,value);
    
    return dict.find((item: any) => item.value == value).label;
};
// 
const onClickEdit = (scope: any) => {
    currentEdit.value = scope.$index + scope.column.id;
};
const onRowClick = (row: any, column: any, event: any) => {
    if (!column) {
        event.stopPropagation();
        return
    }
};
const onConfirm = (scope: any) => {
    emit('confirm', scope);
};
const onCancel = (scope: any) => {
    emit('cancel', scope);
};

const handleSizeChange = (val: number) => {
    emit('update:currentPage', 1);
    emit("pageChange", {
        pageSize: val,
        current: 1
    });
}
const handleCurrentChange = (val: number) => {
    emit("pageChange", {
        pageSize: props.pageConfig.pageSize,
        current: val
    });
}
</script>

<style scoped lang="scss">
.edit {
    width: 1em;
    height: 1em;
    position: relative;
    top: 2px;
    left: 4px;
    cursor: pointer;
}

.icon {
    width: 1em;
    height: 1em;
    cursor: pointer;
}
</style>