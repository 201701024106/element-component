type listItem = {
    // 头像
    avatar?: string;
    // 标题
    title?: string;
    // 描述
    description?: string;
    // 时间
    time?: string;
    // 标签
    tag?: string;
    tagType?: '' | 'info' | 'success' | 'warning' | 'danger';
    // 多余的类型
    [key: string]: any;
}
// 列表
type listOptions = {
    title?: string;
    content: listItem[];
}
// 操作选项
type actionOptions = {
    // 标题
    text: string;
    // 图标
    icon?: string;
    // 点击事件
    activeFn?: () => void;
}

export type { listItem, listOptions, actionOptions };