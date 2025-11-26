<template>
    <div class="">
        <h4>1、普通动态表单</h4>
        <p>1.1、可配置型的表单，可以通过json对象的方式自动生成表单项</p>
        <p>1.2、具备：表单验证、动态删减表单项、集成第三方插件</p>
        <p>1.3、可应用于更多的场景</p>
        <ti-form :options="formOptions" ref="dynamicForm">
            <template #footer="{form,model}">
                <el-button type="primary" @click="onSubmit(form,model)">提交</el-button>
                <el-button @click="resetFn()">重置</el-button>
            </template>
        </ti-form>
        <h4>2、弹出层动态表单</h4>
        <el-button @click="openForm()">open form</el-button>
        <ti-modal-form v-model:visible="visible" label-width="150px" autoScroll :options="modalFormOptions" width="60%">
            <template #title>
                编辑表单
            </template>
            <template #footer="{form}">
                <el-button type="primary" @click="submitModalForm(form)">提交</el-button>
                <el-button @click="resetModalForm(form)">重置</el-button>
            </template>
        </ti-modal-form>
    </div>
</template>

<script setup lang="ts">
import { ElButton, ElMessage, ElMessageBox } from 'element-plus';
import { ref, reactive, createVNode } from 'vue';

const dynamicForm = ref(null);
const dynamicModalForm = ref(null);
const visible = ref(false);
const formOptions = reactive([
    {
        type: 'input',
        value: '456',
        label: '用户名',
        prop: 'username',
        rules: [
            {
                required: true,
                message: '请输入用户名',
                trigger: 'blur',
            },
            {
                min: 2,
                max: 10,
                message: '用户名长度应在2-10位之间',
                trigger: 'blur',
            },
        ],
        placeholder: '请输入用户名',
    }, {
        type: 'input',
        value: '123',
        label: '密码',
        prop: 'password',
        rules: [
            {
                required: true,
                message: '请输入密码',
                trigger: 'blur',
            },
            {
                min: 6,
                max: 15,
                message: '密码位数在6-15位之间',
                trigger: 'blur',
            },
        ],
        placeholder: '请输入密码',
        attrs: {
            clearable: true,
            showPassword: true,
        },
    }, {
        type: 'select',
        value: ['beijing', 'shanghai'],
        label: '城市',
        prop: 'city',
        attrs: {
            clearable: true,
            multiple: true,
            styles: {
                width: '100px',
            },
        },
        rules: [
            {
                required: true,
                message: '请选择城市',
                trigger: 'change',
            },
        ],
        placeholder: '请选择城市',
        children: [
            {
                type: 'option',
                value: 'beijing',
                label: '北京',
            },
            {
                type: 'option',
                value: 'shanghai',
                label: '上海',
            },
        ]
    }, {
        type: 'radio-group',
        value: 'shanghai',
        label: '城市',
        prop: 'lesson',
        rules: [
            {
                required: true,
                message: '请选择国家',
                trigger: 'change',
            },
        ],
        children: [
            {
                type: 'radio',
                value: 'beijing',
                label: '北京',
            },
            {
                type: 'radio',
                value: 'shanghai',
                label: '上海',
            },
        ]
    },
    {
        type: 'checkbox-group',
        value: ['chinese'],
        label: '课程',
        prop: 'country',
        rules: [
            {
                required: true,
                message: '请选择课程',
                trigger: 'change',
            },
        ],
        children: [
            {
                type: 'checkbox',
                value: 'chinese',
                label: '中文',
            },
            {
                type: 'checkbox',
                value: 'math',
                label: '数学',
            },
            {
                type: 'checkbox',
                value: 'english',
                label: '英语',
            },
        ]
    }, {
        type: 'upload',
        label: "文件上传",
        prop: 'pic',
        slots: [
            {
                name: 'uploadArea',
                render: () => {
                    return createVNode(ElButton, {
                        type: 'primary',
                    }, {
                        default: () => '上传文件'
                    });
                }
            },
            {
                name: 'uploadTip',
                render: () => {
                    return createVNode('div', {
                        class: 'text-[#ccc] font-[12px]'
                    }, {
                        default: () => 'jpg/png files with a size less than 500KB.'
                    });
                }
            }
        ],
        uploadAttrs: {
            action: 'https://jsonplaceholder.typicode.com/posts/',
            multiple: true,
            listType: 'picture-card',
            autoUpload: true,
            limit: 3,
            fileList: [],
            headers: {},
            method: 'post',
            data: {},
            name: 'file',
            withCredentials: true,
            showFileList: true,
            drag: true,
            accept: 'image/*',
            thumbnailModel: true,
        },
        uploadFuns: {
            onSuccess: (res: any, file: any,fileList: any) => {
                console.log("onSuccess");
                console.log(res, file, fileList);
            },
            onRemove: (res: any, file: any,fileList: any) => {
                console.log("onRemove");
                console.log(res, file, fileList);
            },
            onProgress: (event: any, file: any) => {
                console.log("onProgress");
                console.log(event, file);
            },
            onError: (err: any, file: any) => {
                console.log("onError");
                console.log(err, file);
            },
            onChange: (file: any) => {
                console.log("onChange");
                console.log(file);
            },
            onExceed: (files: any, fileList: any) => {
                console.log("onExceed");
                console.log(files, fileList);
                ElMessageBox.alert(`当前限制选择 3 个文件，请删除后上传`, '提示', {
                    confirmButtonText: '确定',
                    type: 'warning',
                });
            },
            onBeforeRemove: (file: any, fileList: any) => {
                console.log("onBeforeRemove");
                return ElMessageBox.confirm('确定要删除吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                }).then(() => {
                    console.log(file, fileList);
                    console.log("删除成功");
                }).catch(() => {
                    console.log("取消删除");
                })
            },
            onBeforeUpload: (file: any) => {
                console.log("onBeforeUpload");
                console.log(file);
            },
            // httpRequest: async (params: any) => {
            //     try {
            //         // 解构获取核心参数
            //         const { file, onSuccess, onError, onProgress } = params;
            //         // 打印文件信息（验证获取成功）
            //         const formData = new FormData();
            //         formData.append("file", file);
            //         // 【重要】正确打印FormData中的内容（不能直接console.log(formData)）
            //         console.log("FormData内容：");
            //         for (let [key, value] of formData.entries()) {
            //             console.log(key, value); // 这里能看到file对应的文件对象
            //         }

            //         // 后续上传逻辑...
            //     } catch (error) {
            //         // 错误处理
            //     }
            // }
        },
        rules: [
            {
                required: true,
                message: '请上传文件',
                trigger: 'blur',
            },
        ],
    },
    {
        type: 'editor',
        value: '123',
        label: '富文本',
        prop: 'my-wang-editor',
        placeholder: '请填写内容',
        rules: [
            {
                required: true,
                message: '请填写内容',
                trigger: 'blur',
            },
        ],
        attrs: {
            placeholder: '请填写内容',
            style: {
                height: '200px',
            },
        },
    },
])

const onSubmit = (form,model) => {
    form.validate().then(() => {
        console.log(model);
    }).catch(() => {
        console.log("验证失败");
    });
    
}

const resetFn = () => {
    dynamicForm.value.resetFields();
}

const openForm = () => {
    visible.value = true;
}

const modalFormOptions = reactive([
    {
        type: 'input',
        value: '456',
        label: '用户名',
        prop: 'username',
        rules: [
            {
                required: true,
                message: '请输入用户名',
                trigger: 'change',
            },
            {
                min: 2,
                max: 10,
                message: '用户名长度应在2-10位之间',
                trigger: 'change',
            },
        ],
        placeholder: '请输入用户名',
    }, {
        type: 'input',
        value: '123',
        label: '密码',
        prop: 'password',
        rules: [
            {
                required: true,
                message: '请输入密码',
                trigger: 'change',
            },
            {
                min: 6,
                max: 15,
                message: '密码位数在6-15位之间',
                trigger: 'change',
            },
        ],
        placeholder: '请输入密码',
        attrs: {
            clearable: true,
            showPassword: true,
        },
    }, {
        type: 'select',
        value: ['beijing', 'shanghai'],
        label: '城市',
        prop: 'city',
        attrs: {
            clearable: true,
            multiple: true,
            styles: {
                width: '100px',
            },
        },
        rules: [
            {
                required: true,
                message: '请选择城市',
                trigger: 'change',
            },
        ],
        placeholder: '请选择城市',
        children: [
            {
                type: 'option',
                value: 'beijing',
                label: '北京',
            },
            {
                type: 'option',
                value: 'shanghai',
                label: '上海',
            },
        ]
    }, {
        type: 'radio-group',
        value: 'shanghai',
        label: '城市',
        prop: 'lesson',
        rules: [
            {
                required: true,
                message: '请选择国家',
                trigger: 'change',
            },
        ],
        children: [
            {
                type: 'radio',
                value: 'beijing',
                label: '北京',
            },
            {
                type: 'radio',
                value: 'shanghai',
                label: '上海',
            },
        ]
    },
    {
        type: 'checkbox-group',
        value: ['chinese'],
        label: '课程',
        prop: 'country',
        rules: [
            {
                required: true,
                message: '请选择课程',
                trigger: 'change',
            },
        ],
        children: [
            {
                type: 'checkbox',
                value: 'chinese',
                label: '中文',
            },
            {
                type: 'checkbox',
                value: 'math',
                label: '数学',
            },
            {
                type: 'checkbox',
                value: 'english',
                label: '英语',
            },
        ]
    }, {
        type: 'upload',
        label: "文件上传",
        prop: 'pic',
        slots: [
            {
                name: 'uploadArea',
                render: () => {
                    return createVNode(ElButton, {
                        type: 'primary',
                    }, {
                        default: () => '上传文件'
                    });
                }
            },
            {
                name: 'uploadTip',
                render: () => {
                    return createVNode('div', {
                        class: 'text-[#ccc] font-[12px]'
                    }, {
                        default: () => 'jpg/png files with a size less than 500KB.'
                    });
                }
            }
        ],
        uploadAttrs: {
            action: 'https://jsonplaceholder.typicode.com/posts/',
            multiple: true,
            listType: 'picture-card',
            autoUpload: true,
            limit: 3,
            fileList: [],
            headers: {},
            method: 'post',
            data: {},
            name: 'file',
            withCredentials: true,
            showFileList: true,
            drag: true,
            accept: 'image/*',
            thumbnailModel: true,
        },
        uploadFuns: {
            onSuccess: (res: any, file: any,fileList: any) => {
                console.log("onSuccess");
                console.log(res, file, fileList);
            },
            onRemove: (res: any, file: any,fileList: any) => {
                console.log("onRemove");
                console.log(res, file, fileList);
            },
            onProgress: (event: any, file: any) => {
                console.log("onProgress");
                console.log(event, file);
            },
            onError: (err: any, file: any) => {
                console.log("onError");
                console.log(err, file);
            },
            onChange: (file: any) => {
                console.log("onChange");
                console.log(file);
            },
            onExceed: (files: any, fileList: any) => {
                console.log("onExceed");
                console.log(files, fileList);
                ElMessageBox.alert(`当前限制选择 3 个文件，请删除后上传`, '提示', {
                    confirmButtonText: '确定',
                    type: 'warning',
                });
            },
            onBeforeRemove: (file: any, fileList: any) => {
                console.log("onBeforeRemove");
                return ElMessageBox.confirm('确定要删除吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                }).then(() => {
                    console.log(file, fileList);
                    console.log("删除成功");
                }).catch(() => {
                    console.log("取消删除");
                })
            },
            onBeforeUpload: (file: any) => {
                console.log("onBeforeUpload");
                console.log(file);
            },
            // httpRequest: async (params: any) => {
            //     try {
            //         // 解构获取核心参数
            //         const { file, onSuccess, onError, onProgress } = params;
            //         // 打印文件信息（验证获取成功）
            //         const formData = new FormData();
            //         formData.append("file", file);
            //         // 【重要】正确打印FormData中的内容（不能直接console.log(formData)）
            //         console.log("FormData内容：");
            //         for (let [key, value] of formData.entries()) {
            //             console.log(key, value); // 这里能看到file对应的文件对象
            //         }

            //         // 后续上传逻辑...
            //     } catch (error) {
            //         // 错误处理
            //     }
            // }
        },
        rules: [
            {
                required: true,
                message: '请上传文件',
                trigger: 'blur',
            },
        ],
    },
    {
        type: 'editor',
        value: '123',
        label: '富文本',
        prop: 'my-dy-wang-editor',
        placeholder: '请填写内容',
        rules: [
            {
                required: true,
                message: '请填写内容',
                trigger: 'blur',
            },
        ],
        attrs: {
            placeholder: '请填写内容',
            style: {
                height: '200px',
            },
        },
    },
])
const submitModalForm = (form) => {
    form.validate().then(() => {
        const model = form.getFormData();
        console.log(model);
        ElMessage.success('验证成功');
        visible.value = false;
    }).catch(() => {
        ElMessage.error('验证失败');
    }).family(() => {
        form.resetFields();
    });
}
const resetModalForm = (form) => {
    form.resetFields();
}

</script>

<style scoped lang="scss"></style>