import type {AxiosRequestConfig} from "axios";

export interface RequestConfig {
    requestLimit: number;
    axiosConfig: AxiosRequestConfig;
}

export default <RequestConfig>{
    // axios 请求队列限制数量
    requestLimit: import.meta.env.VITE_REQUEST_QUEUE_LIMIT || 4,
    // axios 配置
    axiosConfig: {
        baseURL: import.meta.env.VITE_API_URL,
        timeout: 5000
    },
}