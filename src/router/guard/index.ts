import type {Router} from 'vue-router';
import {setupUserLoginInfoGuard} from "@/router/guard/userLoginInfo";

/**
 * 创建路由守卫
 * @param router
 */
export const createRouteGuard = (router: Router) => {
    setupUserLoginInfoGuard(router)
}

