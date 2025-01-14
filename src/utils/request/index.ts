import type {AxiosRequestConfig} from "axios";
import {RequestQueue} from "./request-queue";
import axiosService from "./axios-service";
import requestConfig from "./request-config";

const requestQueue = new RequestQueue(requestConfig.requestLimit);

const requestService = (config: AxiosRequestConfig) => {
    return requestQueue.addRequest(() => axiosService(config));
}

export default requestService