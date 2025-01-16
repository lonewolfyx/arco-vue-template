import {InternalAxiosRequestConfig} from "axios";
import {getToken} from "@/utils";

/**
 * 设置请求头
 * @param config
 * @param isToken
 */
export const setHeaderToken = <T extends InternalAxiosRequestConfig<any>>(
    config: T,
    isToken: boolean
): T => {
    console.log('isToken', isToken);
    if (getToken() && !isToken) {
        config.headers['Authorization'] = 'Bearer ' + getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config;
}