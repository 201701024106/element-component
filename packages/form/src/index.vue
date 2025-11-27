<template>
    <div class="">
        <el-form :label-width="labelWidth" ref="formRef" class="ti-form" v-bind="$attrs" :model="model" :validate-on-rule-change="false" :validate-on-initial="false"
            :hide-required-asterisk="false" :rules="rules">
            <template v-for="(item, index) in options">
                <!-- 无子组件的表单项 -->
                <el-form-item v-if="!item.children || !item.children.length" :prop="item.prop" :rules="item.rules"
                    :label="item.label" :validate-status="''">
                    <component v-if="item.type !== 'upload' && item.type !== 'editor'" :is="`el-${item.type}`"
                        v-bind="item.attrs" v-model="model[item.prop]" :placeholder="item.placeholder"></component>
                    <el-upload v-if="item.type === 'upload'" v-bind="item.uploadAttrs"
                        :ref="(el) => el ? uploadInstances[item.prop] = el : null"
                        :on-preview="item.uploadFuns?.onPreview"
                        :on-remove="(response, file, fileList) => onRemove(item, response, file, fileList)"
                        :on-success="(response, file, fileList) => onSuccess(item, response, file, fileList)"
                        :on-error="item.uploadFuns?.onError" :on-progress="item.uploadFuns?.onProgress"
                        :on-change="item.uploadFuns?.onChange" :on-exceed="item.uploadFuns?.onExceed"
                        :before-remove="item.uploadFuns?.onBeforeRemove"
                        :before-upload="item.uploadFuns?.onBeforeUpload" :http-request="item.uploadFuns?.httpRequest">
                        <span v-if="item.slots && item.slots.length > 0" v-for="(solt) in item.slots">
                            <component :is="solt.render"> </component>
                        </span>
                    </el-upload>
                    <div v-if="item.type === 'editor'" :id="'editor-' + item.prop"></div>
                </el-form-item>
                <!-- 有子组件的表单项（如select） -->
                <el-form-item v-else :prop="item.prop" :rules="item.rules" :label="item.label" :validate-status="''">
                    <component :is="`el-${item.type}`" v-bind="item.attrs" v-model="model[item.prop]"
                        :placeholder="item.placeholder" :multiple="true">
                        <component :is="`el-${child.type}`" v-for="(child, i) in item.children" :key="`${index}_${i}`"
                            :label="child.label" :value="child.value">
                        </component>
                    </component>
                </el-form-item>
            </template>
            <el-form-item>
                <slot name="footer" :form="formRef" :model="model"> </slot>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, PropType, onMounted, nextTick, watch, defineExpose, onBeforeUpdate, reactive } from 'vue';
import { FormOptions } from './types';
import cloneDeep from 'lodash/clonedeep';
import E from 'wangeditor';
import type { FormInstance } from 'element-plus';

const props = defineProps({
    options: {
        type: Array as PropType<FormOptions[]>,
        required: true,
    },
    labelWidth: {
        type: String,
        default: '120px',
    },
});

const formRef = ref<FormInstance>(null);
const uploadInstances = reactive({});
const model = ref<Record<string, any>>({});
const rules = ref<Record<string, any>>({});

const edit = ref(null);
// 初始化model和rules（核心：先赋值，且不重置）
const editorInstances = ref<Record<string, any>>();
const initFormData = () => {
    const m: Record<string, any> = {};
    const r: Record<string, any> = {};
    props.options.forEach((item) => {
        // 严格保留原始value，不做任何默认值覆盖
        m[item.prop!] = item.value;
        r[item.prop!] = item.rules ?? [];
        if (item.type === 'editor') {
            nextTick(() => {
                const editorId = `editor-${item.prop}`;
                const editorEle = document.getElementById(editorId);
                if (!editorEle) {
                    return;
                }
                // 如果已经存在该编辑器实例，先销毁
                if (editorInstances.value && editorInstances.value[item.prop!]) {
                    editorInstances.value[item.prop!].destroy();
                    delete editorInstances.value[item.prop!];
                }
                // 创建编辑器实例
                const editor = new E(`#${editorId}`);
                editor.config.placeholder = item.placeholder;
                // 设置编辑器内容
                editor.create();
                editor.txt.html(item.value);

                // 监听编辑器内容变化并同步到model
                editor.config.onchange = (newHtml) => {
                    model.value[item.prop!] = newHtml;
                };
                // 保存编辑器实例引用
                if (!editorInstances.value) {
                    editorInstances.value = {};
                }
                editorInstances.value[item.prop!] = editor;
                edit.value = editor;
            });
        }
    });
    // 直接赋值，不使用cloneDeep（避免引用类型导致的响应式丢失）
    model.value = m;
    rules.value = r;
};
// 仅清空校验提示，不重置字段（关键修复）
const clearFormValidate = async () => {
    await nextTick();
    if (formRef.value) {
        // 只清空校验状态，不重置字段值！
        formRef.value.clearValidate();
    }
};

// 重置表单
const resetFields = () => {
    console.log("重置表单");
    
    // 1.1 重置 elenent-plus 的表单
    formRef.value.resetFields();
    // 1.2 重置 wangEditor 的表单
    if (props.options && props.options.length > 0) {
        props.options.forEach((item) => {
            if (item.type === 'editor') {
                edit.value.txt.html(item.value);
            }
            if (item.type === 'upload') {
                for (const key in uploadInstances) {
                    if (!uploadInstances.hasOwnProperty(key)) continue;
                    const element = uploadInstances[key];
                    element.clearFiles();
                }
            }
        });
    }
    initFormData();
}

// 获取表单数据
const getFormData = () => {
    return model.value;
};

onMounted(async () => {
    // 第一步：先初始化model（确保表单挂载前已有值）
    if (props.options && props.options.length > 0) {
        initFormData();
        // 第二步：等待DOM渲染完成，清空校验提示（无重置操作）
        await nextTick();
        await clearFormValidate();
    }
});

// 监听options变化，重新赋值（不重置）
watch(
    () => props.options,
    () => {
        initFormData();
        nextTick(() => clearFormValidate());
    },
    { deep: true, immediate: true } // 立即执行，确保初始值生效
);
const onSuccess = (item: FormOptions, response: any, file: File, fileList: File[]) => {
    // 上传成功 给表单赋值
    const uploadItem = props.options.find((i) => i.prop === item.prop);
    if (uploadItem) {
        model.value[uploadItem.prop!] = { response, file, fileList };
    }
    item.uploadFuns.onSuccess(response, file, fileList);
    // 添加这一行来手动触发校验
    nextTick(() => {
        formRef.value?.validateField(item.prop!);
    });
};
const onRemove = (item: FormOptions, response: any, file: File, fileList: File[]) => {
    // 上传成功 给表单赋值
    const uploadItem = props.options.find((i) => i.prop === item.prop);
    if (uploadItem) {
        model.value[uploadItem.prop!] = fileList?.length > 0 ? { response, file, fileList } : undefined;
    }
    item.uploadFuns.onRemove(response, file, fileList);
    // 添加这一行来手动触发校验
    nextTick(() => {
        formRef.value?.validateField(item.prop!);
    });
}
// 暴露方法给父组件（resetFields需谨慎使用）
defineExpose({
    validate: () => formRef.value?.validate(),
    // 若父组件调用resetFields，会清空值，需提示
    resetFields: () => resetFields(),
    clearValidate: () => formRef.value?.clearValidate(),
    getFormData: () => getFormData(),
});
</script>

<style scoped lang="scss"></style>