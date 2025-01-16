import axios, {AxiosResponse, InternalAxiosRequestConfig} from "axios";
import requestConfig from "./request-config";
import {Message} from "@arco-design/web-vue";
import {setHeaderToken} from "@/utils/request/plugins/set.header.token";

const axiosService = axios.create(requestConfig.axiosConfig)

const requestDecorator = <T extends InternalAxiosRequestConfig<any>>(
    config: T,
    decorator: (config: T, ...args: any[]) => T,
    ...args: any[]
): T => {
    return decorator(config, ...args);
}

// 请求拦截
axiosService.interceptors.request.use(
    (config: InternalAxiosRequestConfig<any>) => {

        // 是否需要设置 token
        const isToken = (config.headers || {}).isToken === false;

        // 添加 header Token
        config = requestDecorator(config, setHeaderToken, isToken);

        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

// 响应拦截
axiosService.interceptors.response.use(
    (res: AxiosResponse<any, any>) => {

        const code = res.data.code || 200;

        // 非 200 code 抛出异常
        if (code !== 200) {
            Message.error({
                content: res.data.message || 'Error',
                duration: 5 * 1000,
            });

            return Promise.reject(new Error(res.data.message))
        }


        return Promise.resolve(res.data);
    },
    error => {

        Message.error({
            content: error.message || 'Request Error',
            duration: 5 * 1000,
        });
        return Promise.reject(error)
    }
)


export default axiosService;