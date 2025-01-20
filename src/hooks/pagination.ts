export interface PaginationOptions {
    total: number,
    showTotal: boolean,
    pageSize: number
}

const defaultOptions = {
    total: 0,
    showTotal: true,
    pageSize: 10
}
export const usePagination = (initPagination: PaginationOptions = defaultOptions) => {
    const pagination = ref(initPagination)

    const setPageTotal = (total: number) => {
        pagination.value.total = total;
    }
    return {
        pagination,
        setPageTotal
    }
}