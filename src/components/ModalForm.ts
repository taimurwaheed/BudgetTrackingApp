import { useForm } from "react-hook-form";
import type { Expense } from "../types/expense.types";
import type { ExpenseFormInputs } from "../types/form-input.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { ExpenseSchema } from "../utils/schemas";

export function ModalForm(expense: Expense | null) {
    const methods = useForm<ExpenseFormInputs>({
        defaultValues: expense
            ? {
                title: expense.expense,
                price: expense.price,
                date: new Date(expense.date), // editing
            }
            : {
                title: "",
                price: 0,
                date: new Date(), // new data
            },
        resolver: yupResolver(ExpenseSchema),
    });

    return methods;
}
