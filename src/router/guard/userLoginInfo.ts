import type {
    LocationQueryRaw,
    NavigationGuardNext,
    RouteLocationNormalized,
    RouteLocationNormalizedLoaded,
    Router
} from "vue-router";
import {useUserStore} from "@/stores";
import {isLogin} from "@/utils";
import {DEFAULT_HOME_ROUTE, UN_LOGIN_ROUTE} from "@/constants";


/**
 * 用户登录信息校验
 * @param router
 */
export const setupUserLoginInfoGuard = (router: Router) => {
    router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded, next: NavigationGuardNext) => {

        const userStore = useUserStore()
        console.log('是否已登录', isLogin())
        if (isLogin()) {

            // 如果访问的是登录页面就直接返回首页
            if (to.name === UN_LOGIN_ROUTE) {
                next({
                    name: DEFAULT_HOME_ROUTE
                });
                return;
            }

            // 获取用户信息
            await userStore.getUserInfo()

            next()
            // if (userInfo.userRole) {
            //     next()
            // } else {
            //     console.log('没有角色')
            //     try {
            //         await userInfo.getUserInfo()
            //         next()
            //     } catch (error) {
            //         await userInfo.logout()
            //
            //         next({
            //             name: 'login',
            //             query: {
            //                 redirect: to.name,
            //                 ...to.query,
            //             } as LocationQueryRaw,
            //         })
            //         console.log(error)
            //     }
            // }

        } else {
            // 如果已经是登录页面就直接返回
            if (to.name === UN_LOGIN_ROUTE) {
                next();
                return;
            }

            next({
                name: UN_LOGIN_ROUTE,
                query: {
                    redirect: to.name,
                    ...to.query,
                } as LocationQueryRaw,
            });
        }

    })
}