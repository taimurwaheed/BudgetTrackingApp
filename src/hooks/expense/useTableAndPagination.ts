import { usePagination } from "../../components/Pagination";
import type { Expense } from "../../types/expense.types";

export const useTableAndPagination = (data: Expense[]) => {
    const {
        page,
        pageCount,
        currentData,
        handlePageChange,
    } = usePagination(data, 8);

    return {
        page,
        pageCount,
        currentData,
        handlePageChange,
    };
};
