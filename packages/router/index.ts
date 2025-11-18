import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import container from "@/components/container/src/index.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/', component: container,
        children: [
            {
                path: '',
                component: () => import('@/pages/Home.vue'),
                meta: {
                    title: '首页',
                    icon: 'el-icon-rice-ag'
                }
            },
            {
                path: '/icon-select',
                component: () => import('@/pages/IconSelect.vue'),
                meta: {
                    title: '图标选择器',
                    icon: 'el-icon-rice-ag'
                }
            },
            {
                path: '/trend',
                component: () => import('@/pages/Trend.vue'),
                meta: {
                    title: '图标选择器',
                    icon: 'el-icon-rice-ag'
                }
            },
            {
                path: '/notification',
                component: () => import('@/pages/Notification.vue'),
                meta: {
                    title: '通知菜单',
                    icon: 'el-icon-rice-ag'
                }
            },
            {
                path: '/leftmenu',
                component: () => import('@/pages/Leftmenu.vue'),
                meta: {
                    title: '左侧菜单',
                    icon: 'el-icon-rice-ag'
                }
            },
            {
                path: '/progress',
                component: () => import('@/pages/Progress.vue'),
                meta: {
                    title: '进度条',
                    icon: 'el-icon-rice-ag'
                }
            },
            {
                path: '/timeRange',
                component: () => import('@/pages/TimeRange.vue'),
                meta: {
                    title: '时间选择器',
                    icon: 'el-icon-rice-ag'
                }
            },
            {
                path: '/dateRange',
                component: () => import('@/pages/DateRange.vue'),
                meta: {
                    title: '日期选择器',
                    icon: 'el-icon-rice-ag'
                }
            },
            {
                path: '/citySelect',
                component: () => import('@/pages/CitySelect.vue'),
                meta: {
                    title: '城市选择器',
                    icon: 'el-icon-rice-ag'
                }
            },
            {
                path: '/calendar',
                component: () => import('@/pages/Calendar.vue'),
                meta: {
                    title: '日历选择器',
                    icon: 'el-icon-rice-ag'
                }
            },
            {
                path: '/dynamicForm',
                component: () => import('@/pages/DynamicForm.vue'),
                meta: {
                    title: '表单组件',
                    icon: 'el-icon-rice-ag'
                }
            },
        ]
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;