<template>
    <div class="">
        <p>1、可配置型的表单，可以通过json对象的方式自动生成表单项</p>
        <p>2、具备：表单验证、动态删减表单项、集成第三方插件</p>
        <p>3、可应用于更多的场景</p>
        <ti-form :options="options"></ti-form>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
const options = reactive([
    {
        type: 'input',
        value: '',
        label: '用户名',
        prop: 'username',
        rules: [
            {
                required: true,
                message: '请输入用户名',
                trigger: 'blur',
            },
            {
                max: 2,
                min: 2,
                message: '请输入用户名',
                trigger: 'blur',
            },
        ],
        placeholder: '请输入用户名',
    }, {
        type: 'input',
        value: '',
        label: '密码',
        prop: 'password',
        rules: [
            {
                required: true,
                message: '请输入密码',
                trigger: 'blur',
            },
            {
                max: 6,
                min: 15,
                message: '密码位数在6-15位之间',
                trigger: 'blur',
            },
        ],
        placeholder: '请输入密码',
        attrs: {
            clearable: true,
            showPassword: true,
        },
    },
])

</script>

<style scoped lang="scss"></style>