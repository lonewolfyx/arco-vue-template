export interface Pagination {
    total: number;
    lastPage: number;
    currentPage: number;
    limit: number;
    prev: number;
    next: number;
}