<template>
    <el-menu :default-active="$route.path" :collapse="props.isCollapse" class="el-menu-vertical-demo">
        <el-menu-item index="" @click="handleClick('/')">
            <el-icon-house></el-icon-house>
            <span>首页</span>
        </el-menu-item>
        <el-menu-item index="/icon-select" @click="handleClick('/icon-select')">
            <el-icon-select></el-icon-select>
            <span>图标选择器</span>
        </el-menu-item>
        <el-menu-item index="/trend" @click="handleClick('/trend')">
            <el-icon-trend-charts></el-icon-trend-charts>
            <span>趋势标记</span>
        </el-menu-item>
    </el-menu>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const props = defineProps({
    isCollapse: {
        type: Boolean,
        default: false
    }
});
const handleClick = (path: string) => {
    router.push(path);
}
</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>