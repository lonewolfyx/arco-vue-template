import {Pagination} from "@/types/pagination";

export interface MenuItems {
    id: bigint
    name: string
    path: string
    component: string
    icon: string
    parentId: number
    sort: number
    status: number
    createTime: string
    updateTime: string
}

export interface MenuListResponse {
    rows: MenuItems[],
    meta: Pagination
}
