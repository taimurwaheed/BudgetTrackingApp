// src/components/ExpenseFilters.tsx

import { TextField, MenuItem } from "@mui/material";
import type { ExpenseFiltersProps } from "../types/expense.types";
import { SortTextField, SearchTextField, BoxModel, TypographyExpense } from "./ExpenseFilters.styles";

export const ExpenseFilters = ({
    sortBy,
    setSortBy,
    searchTerm,
    setSearchTerm,
    selectedDate,
    setSelectedDate,
}: ExpenseFiltersProps) => {
    return (
        <>
            <BoxModel>
                <TypographyExpense>
                    Expense
                </TypographyExpense>
                <SortTextField
                    select
                    label="Sort By"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    size="small"
                >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="Recent">Recent</MenuItem>
                    <MenuItem value="Amount">Amount</MenuItem>
                </SortTextField>

                <TextField
                    type="date"
                    size="small"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                />

                <SearchTextField
                    label="Search"
                    size="small"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}

                />
            </BoxModel>
        </>
    );
};
