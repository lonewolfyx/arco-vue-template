import type {AxiosRequestConfig, AxiosResponse} from "axios";
import {RequestQueue} from "./request-queue";
import axiosService from "./axios-service";
import requestConfig from "./request-config";

const requestQueue = new RequestQueue(requestConfig.requestLimit);

const requestService = <T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return requestQueue.addRequest(() => axiosService(config));
}

export default requestService