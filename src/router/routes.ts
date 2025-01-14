import type { RouteRecordRaw } from 'vue-router';

export const NOT_FOUND_ROUTE: RouteRecordRaw = {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/error/404.vue'),
};