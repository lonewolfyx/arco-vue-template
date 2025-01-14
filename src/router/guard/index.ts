import type {Router} from 'vue-router';
import {setupUserLoginInfoGuard} from "@/router/guard/userLoginInfo";

export const createRouteGuard = (router: Router) => {
    setupUserLoginInfoGuard(router)
}

