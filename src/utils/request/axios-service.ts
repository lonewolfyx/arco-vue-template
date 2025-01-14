import axios, {AxiosResponse, InternalAxiosRequestConfig} from "axios";
import requestConfig from "./request-config";

const axiosService = axios.create(requestConfig.axiosConfig)

// 请求拦截
axiosService.interceptors.request.use(
    (config: InternalAxiosRequestConfig<any>) => {

        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

// 响应拦截
axiosService.interceptors.response.use(
    (res: AxiosResponse<any, any>) => {
        console.log(res)


        return Promise.resolve(res.data);
    },
    error => {
        console.log(error)
    }
)


export default axiosService;