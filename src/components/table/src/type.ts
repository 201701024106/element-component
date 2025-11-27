import { TableColumn } from "element-plus/es/components/table/src/table-column/defaults";

export interface TableOptions {
    // 表头
    label: string;
    // 字段名称
    prop?: string;
    // 列宽度
    width?: string | number;
    // 列对齐方式
    align?: 'left' | 'center' | 'right';
    // 自定义列模板名称
    solt: string;
    useDict?: boolean;
    // 列是否可操作
    actionable?: boolean;
    // 单元格是否可编辑
    editable?: boolean;
}