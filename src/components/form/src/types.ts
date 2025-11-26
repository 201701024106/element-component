import { CSSProperties } from "vue";
type formType = 'cascader' | 'checkbox' | 'checkbox-group' | 'date-picker' | 'input' | 'input-number' | 'radio' | 'select' | 'option' |
    'slider' | 'switch' | 'time-picker' |
    'transfer' | 'upload' | 'editor'
export interface FormOptions {
    // 可显示的元素
    type: formType;
    value?: any;
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
        // css 样式
        style?: CSSProperties;
        [key: string]: any;
    };
    // 表单子元素
    children?: FormOptions[];
    // 处理上传组件的属性和方法
    uploadAttrs?: {
        actions: string;
        headers?: string;
        method?: 'post' | 'put' | 'patch';
        multiple?: boolean;
        data?: object;
        name?: string;
        withCredentials?: string;
        showFileList?: boolean;
        drag?: boolean;
        accept?: string;
        thumbnailModel?: boolean;
        fileList?: any[];
        listType?: 'text' | 'picture' | 'picture-card';
        autoUpload?: boolean;
        httpRequest?: (options: any) => void;
        disabled?: boolean;
        limit?: number;
        [key: string]: any;
    };
    // 处理上传组件的方法
    uploadFuns?: {
        onPreview?: (file: any) => void;
        onSuccess?: (res: any, file: any, fileList: Array<any>) => void;
        onRemove?: (res: any, file: any, fileList: Array<any>) => void;
        onProgress?: (event: any, file: any) => void;
        onError?: (err: any, file: any) => void;
        onChange?: (file: any) => void;
        onExceed?: (files: any, fileList: any) => void;
        onBeforeRemove?: (file: any, fileList: any) => void;
        onBeforeUpload?: (file: any) => void;
        httpRequest?: (options: any) => void;
    }
}