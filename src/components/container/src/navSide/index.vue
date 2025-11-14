<template>
    <!-- <el-menu :default-active="$route.path" :collapse="props.isCollapse" class="el-menu-vertical-demo">
        <el-menu-item index="/" @click="handleClick('/')">
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
        <el-menu-item index="/notification" @click="handleClick('/notification')">
            <el-icon-trend-charts></el-icon-trend-charts>
            <span>通知菜单</span>
        </el-menu-item>
        <el-menu-item index="/leftmenu" @click="handleClick('/leftmenu')">
            <el-icon-trend-charts></el-icon-trend-charts>
            <span>左侧菜单</span>
        </el-menu-item>
    </el-menu> -->
    <ti-leftmenu :data="data" router :collapse="props.isCollapse" :default-active="$route.path"></ti-leftmenu>
</template>

<script setup lang="ts">
import tiLeftmenu from '@/components/leftMenu/src/index.vue'
import { ref, reactive, defineProps } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const data = reactive([
    {
        name: '首页',
        icon: 'house',
        index: '/'
    },
    {
        name: '图标选择器',
        icon: 'select',
        index: '/icon-select'
    },
    {
        name: '趋势标记',
        icon: 'trend-charts',
        index: '/trend'
    },
    {
        name: '通知菜单',
        icon: 'trend-charts',
        index: '/notification'
    },
    {
        name: '左侧菜单',
        icon: 'trend-charts',
        index: '/leftmenu'
    },
    {
        name: '进度条',
        icon: 'trend-charts',
        index: '/progress'
    },
    {
        name: '时间选择器',
        icon: 'trend-charts',
        index: '/timeRange'
    },
    {
        name: '日期选择器',
        icon: 'trend-charts',
        index: '/dateRange'
    },
    {
        name: '城市选择器',
        icon: 'trend-charts',
        index: '/citySelect'
    }
])
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