import type { Expense } from "../types/expense.types";

export const mapApiExpense = (expense: any): Expense => ({
    expenseId: expense.id,
    expense: expense.expense,
    totalExpenditure: expense.totalExpenditure,
    price: expense.price,
    date: new Date(expense.date),
    userId: expense.userId,
});