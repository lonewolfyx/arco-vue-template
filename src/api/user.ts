import requestService from "@/utils/request";
import {UserLoginParamsData} from "@/types";

export const getUserInfoAPI = () => {
    return requestService({
        method: 'get',
        url: '/user/info'
    })
}

export const userLoginOut = () => {
    return requestService({
        method: 'get',
        url: '/user/loginOut'
    })
}

/**
 * 用户登录
 * @param data
 */
export const userLogin = (data: UserLoginParamsData): Promise<any> => {
    return requestService({
        method: 'post',
        url: '/oauth/login',
        data
    })
}