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
    ]
  },
  {
    path: '/icon-select', component: container,
    children: [
      {
        path: '',
        component: () => import('@/pages/IconSelect.vue'),
        meta: {
          title: '图标选择器',
          icon: 'el-icon-rice-ag'
        }
      },
    ]
  },
  {
    path: '/trend', component: container,
    children: [
      {
        path: '',
        component: () => import('@/pages/Trend.vue'),
        meta: {
          title: '图标选择器',
          icon: 'el-icon-rice-ag'
        }
      },
    ]
  },
  {
    path: '/notification', component: container,
    children: [
      {
        path: '',
        component: () => import('@/pages/Notification.vue'),
        meta: {
          title: '通知菜单',
          icon: 'el-icon-rice-ag'
        }
      },
    ]
  },
  {
    path: '/leftmenu', component: container,
    children: [
      {
        path: '',
        component: () => import('@/pages/Leftmenu.vue'),
        meta: {
          title: '左侧菜单',
          icon: 'el-icon-rice-ag'
        }
      },
    ]
  },
  {
    path: '/progress', component: container,
    children: [
      {
        path: '',
        component: () => import('@/pages/Progress.vue'),
        meta: {
          title: '进度条',
          icon: 'el-icon-rice-ag'
        }
      },
    ]
  },
  {
    path: '/timeRange', component: container,
    children: [
      {
        path: '',
        component: () => import('@/pages/TimeRange.vue'),
        meta: {
          title: '时间选择器',
          icon: 'el-icon-rice-ag'
        }
      },
    ]
  },
  {
    path: '/dateRange', component: container,
    children: [
      {
        path: '',
        component: () => import('@/pages/DateRange.vue'),
        meta: {
          title: '日期选择器',
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