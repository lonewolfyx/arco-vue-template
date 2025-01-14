import requestService from "@/utils/request";

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