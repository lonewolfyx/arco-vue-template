import type {
    LocationQueryRaw,
    NavigationGuardNext,
    RouteLocationNormalized,
    RouteLocationNormalizedLoaded,
    Router
} from "vue-router";
import {useUserStore} from "@/stores";


export const setupUserLoginInfoGuard = (router: Router) => {
    router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded, next: NavigationGuardNext) => {
        console.log(to, from, next)
        const isLogin = true;
        const userInfo = useUserStore()

        if (isLogin) {
            // next()

            if (userInfo.userRole) {
                next()
            } else {
                console.log('没有角色')
                try {
                    await userInfo.getUserInfo()
                    next()
                } catch (error) {
                    await userInfo.logout()

                    next({
                        name: 'login',
                        query: {
                            redirect: to.name,
                            ...to.query,
                        } as LocationQueryRaw,
                    })
                    console.log(error)
                }
            }

        } else {
            // 如果已经是登录页面就直接返回
            if (to.name === 'login') {
                next();
                return;
            }

            next({
                name: 'login',
                query: {
                    redirect: to.name,
                    ...to.query,
                } as LocationQueryRaw,
            });
        }

    })
}