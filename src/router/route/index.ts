import type {RouteRecordRaw} from "vue-router";

export const DEFAULT_LAYOUT = () => import('@/layout/default-layout.vue')

export const AppRoutes: RouteRecordRaw[] = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: DEFAULT_LAYOUT,
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: 'workspace',
                name: 'workspace',
                component: () => import('@/views/dashboard/workspace.vue')
            }
        ]
    },
    {
        path: '/system',
        name: 'system',
        component: DEFAULT_LAYOUT,
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: 'menu',
                name: 'menu',
                component: () => import('@/views/sys/menu/index.vue')
            }
        ]
    }
]