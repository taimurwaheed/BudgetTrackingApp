import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAppContext } from "../../context/AppContext";
import type { Expense } from "../../types/expense.types";
import { queryClient } from "../api-config/config";
import { mapApiExpense } from "../../utils/mapApiExpense";

export const useGetExpenses = () => {
    const { expenseService, currentUser } = useAppContext();

    return useQuery<Expense[]>({
        queryKey: ["expenses", currentUser?.id],
        queryFn: async () => {
            if (!currentUser?.id) {
                return [];
            }
            const response = await expenseService.getExpensesByUserId(currentUser.id);
            return response.map(mapApiExpense);
        },
        enabled: !!currentUser?.id,
    });
};

export const useAddExpense = () => {
    const { expenseService, currentUser } = useAppContext();

    return useMutation({
        mutationFn: async (newExpense: { title: string; price: number; date: string }) => {
            const payload: Omit<Expense, "expenseId"> = {
                expense: newExpense.title,
                totalExpenditure: 0,
                price: newExpense.price,
                date: new Date(newExpense.date.toString()),
                userId: currentUser?.id || "guest",
            };
            const res = await expenseService.addExpense(payload);
            return mapApiExpense(res);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["expenses"] });
        },
    });
};

export const useEditExpense = () => {
    const { expenseService } = useAppContext();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (updatedExpense: Expense) => {
            const res = await expenseService.updateExpense(updatedExpense.expenseId, updatedExpense);
            return mapApiExpense(res);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["expenses"] });

        },
    });
};

export const useDeleteExpense = () => {
    const queryClient = useQueryClient();
    const { expenseService } = useAppContext();

    return useMutation({
        mutationKey: ["expenses"],
        mutationFn: async (expenseId: string) => {
            return await expenseService.deleteExpense(expenseId);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["expenses"] });
        },
    });
};
