import { useMemo } from "react"
import { format, subMonths, startOfMonth, endOfMonth } from "date-fns"
import type { Expense } from "../../types/expense.types"
import type { ChartDataPoint } from "../../types/props.types"

export function useBudgetChartData(expenses: Expense[], reportFilter: "1month" | "6months" | "12months", budgetLimit: number): ChartDataPoint[] {
    return useMemo(() => {
        const now = new Date()
        let startDate: Date

        switch (reportFilter) {
            case "1month":
                startDate = subMonths(now, 1)
                break
            case "6months":
                startDate = subMonths(now, 6)
                break
            case "12months":
                startDate = subMonths(now, 12)
                break
            default:
                startDate = subMonths(now, 1)
        }

        // Generate an array of months between the start date and now
        const months: Date[] = []
        let current = startOfMonth(startDate)
        const last = endOfMonth(now)
        while (current <= last) {
            months.push(current)
            current = new Date(current.getFullYear(), current.getMonth() + 1, 1)
        }

        // Map each month to a data point containing spending, budget, and whether the budget was exceeded
        return months.map((month: Date): ChartDataPoint => {
            const monthExpenses: Expense[] = expenses.filter((expense: Expense) => {
                const expenseDate = new Date(expense.date);
                return expenseDate.getFullYear() === month.getFullYear() && expenseDate.getMonth() === month.getMonth();
            });

            const total: number = monthExpenses.reduce((sum: number, expense: Expense) => sum + expense.price, 0);
            const exceeded: boolean = total > budgetLimit;

            return {
                month: format(month, "MMM yyyy"),
                spending: total,
                budgetLimit,
                exceeded,
            }
        })
    }, [expenses, reportFilter, budgetLimit])
}
