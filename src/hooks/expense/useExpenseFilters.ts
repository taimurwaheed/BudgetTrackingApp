import { useState, useMemo } from "react";
import type { Expense } from "../../types/expense.types";
import { format } from "date-fns";

export const useExpenseFilters = (expenses: Expense[]) => {
    const [sortBy, setSortBy] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDate, setSelectedDate] = useState("");

    const filteredAndSortedExpenses = useMemo(() => {
        let filteredExpenses = [...expenses];

        if (searchTerm) {
            filteredExpenses = filteredExpenses.filter((expense) =>
                expense.expense.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedDate) {
            filteredExpenses = filteredExpenses.filter(
                (expense) =>
                    format(new Date(expense.date), "yyyy-MM-dd") === selectedDate
            );
        }

        switch (sortBy) {
            case "Recent": // latest → oldest
                return [...filteredExpenses].sort(
                    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
                );
            case "Amount": // high → low
                return [...filteredExpenses].sort((a, b) => b.price - a.price);
            case "all":
            default:
                return filteredExpenses;
        }
    }, [expenses, searchTerm, selectedDate, sortBy]);

    return {
        sortBy,
        setSortBy,
        searchTerm,
        setSearchTerm,
        selectedDate,
        setSelectedDate,
        filteredAndSortedExpenses,
    };
};
