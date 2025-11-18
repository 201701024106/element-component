type formType = 'cascader' | 'checkbox' | 'checkbox-group' | 'date-picker' | 'input' | 'input-number' | 'radio' | 'select' | 'option' |
    'slider' | 'switch' | 'time-picker' |
    'transfer' | 'upload'
export interface FormOptions {
    // 可显示的元素
    type: formType;
    value: any;
    label?: string;
    // 表单标识
    prop?: string;
    // 表单验证 async-validate
    rules?: any[];
    // 表单项占位符
    placeholder?: string;
    // 特有属性
    attrs?: {
        clearable?: boolean;
        showPassword?: boolean;
        disabled?: boolean;
        [key: string]: any;
    };
}