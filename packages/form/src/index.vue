<template>
    <div class="">
        <el-form v-bind="$attrs" :model="model" :rules="rules" ref="formRef">
            <el-form-item v-for="(item, index) in options" :prop="item.prop" :rules="item.rules" :key="index"
                :label="item.label">
                <component :is="`el-${item.type}`" v-bind="item.attrs" v-model="model[item.prop]"
                    :placeholder="item.placeholder"></component>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, PropType, onMounted } from 'vue';
import { FormOptions } from './types';
import cloneDeep from 'lodash/clonedeep';
import type { FormInstance } from 'element-plus';

const props = defineProps({
    options: {
        type: Array as PropType<FormOptions[]>,
        required: true,
    },
});

// 添加表单实例引用
const formRef = ref<FormInstance>();

const model = ref<any>({});
const rules = ref<any>({});

onMounted(() => {
    let m: Record<string, any> = {};
    let r: Record<string, any> = {};
    props.options.forEach((item) => {
        m[item.prop!] = item.value;
        r[item.prop!] = item.rules;
    });
    model.value = cloneDeep(m);
    rules.value = cloneDeep(r);
    console.log(model.value, rules.value);
});

// 可选：暴露验证方法给父组件使用
defineExpose({
    validate: () => formRef.value?.validate(),
    resetFields: () => formRef.value?.resetFields()
});
</script>

<style scoped lang="scss"></style>