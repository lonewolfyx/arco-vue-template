import {createRouter, createWebHistory} from 'vue-router';
import {NOT_FOUND_ROUTE} from "@/router/routes";
import {createRouteGuard} from "@/router/guard";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: 'login'
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/login/index.vue'),
            meta: {
                requiresAuth: false,
            },
        },
        {
            path: '/index',
            name: 'index',
            component: () => import('@/views/index.vue'),
            meta: {
                requiresAuth: true,
            },
        },
        NOT_FOUND_ROUTE
    ],
});

createRouteGuard(router);

export default router;
