import type {AxiosRequestConfig} from "axios";

export interface RequestConfig {
    requestLimit: number;
    axiosConfig: AxiosRequestConfig;
}

export default <RequestConfig>{
    // axios 请求队列限制数量
    requestLimit: 2,
    // axios 配置
    axiosConfig: {
        baseURL: 'http://127.0.0.1:3000/api/',
        timeout: 5000
    },
}