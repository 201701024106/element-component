<template>
    <el-menu default-active="2" :collapse="props.isCollapse" @open="handleOpen" class="el-menu-vertical-demo">
        <el-menu-item index="1">
            <el-icon-rice-ag></el-icon-rice-ag>
            <span>首页</span>
        </el-menu-item>
        <el-menu-item index="2">
            <el-icon-ottom></el-icon-ottom>
            <span>图标选择器</span>
        </el-menu-item>
        <el-menu-item index="3">
            <el-icon-ox></el-icon-ox>
            <span>趋势标记</span>
        </el-menu-item>
    </el-menu>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps } from 'vue';
// const isCollapse = ref(false);
const props = defineProps({
    isCollapse: {
        type: Boolean,
        default: false
    }
});
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>