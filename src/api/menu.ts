import requestService from "@/utils/request";
import {MenuListResponse} from "@/types";
import {AxiosResponse} from "axios";
import {ApiResponse} from "@/types/success";

// 新增菜单
export const addMenuApi = (data: any): Promise<AxiosResponse<ApiResponse>> => {
    return requestService({
        method: 'post',
        url: '/v1/menu/add',
        data
    })
}

// 获取菜单列表
export const getMenuListAPI = (param: any): Promise<AxiosResponse<MenuListResponse, Record<any, any>>> => {
    return requestService({
        method: 'get',
        url: '/v1/menu/list',
        params: param
    })
}

// 批量删除
export const batchDeleteMenuAPI = (ids: any): Promise<AxiosResponse<any>> => {
    return requestService({
        method: 'delete',
        url: '/v1/menu/batch',
        data: ids
    })
}