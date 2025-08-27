// src/hooks/usePagination.ts
import { useState } from "react";

export function usePagination<T>(data: T[], itemsPerPage: number = 8) {
    const [page, setPage] = useState(1);

    const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const pageCount = Math.ceil((data?.length || 0) / itemsPerPage);

    const startIndex = (page - 1) * itemsPerPage;
    const currentData = data?.slice(startIndex, startIndex + itemsPerPage) ?? [];

    return {
        page,
        pageCount,
        currentData,
        handlePageChange,
    };
}
