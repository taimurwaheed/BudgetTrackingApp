import type { Expense } from "./expense.types";

export interface AnalysisPageProps {
    expenses: Expense[];
    userBudget: number;
}

export interface ExpensesPageProps {
    expenses: Expense[];
    setExpenses: (expenses: Expense[]) => void;
    showNotification: (
        message: string,
        severity?: "success" | "error" | "warning" | "info"
    ) => void;
}

export interface AddExpenseModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (expense: Omit<Expense, "expenseId">) => void;
    expense?: Expense | null;
    isProcessing: boolean; // This new prop is needed

}

export interface BudgetChartProps {
    expenses: Expense[]
    reportFilter: "1month" | "6months" | "12months"
    budgetLimit: number
}

export interface CustomNotificationProps {
    open: boolean
    message: string
    severity: "success" | "update" | "delete" | "error" | "warning" | "info";
    onClose: () => void
}

export interface HeaderProps {
    onToggleSidebar: () => void
}

export type PageName = 'expenses' | 'analysis';

export interface SidebarProps {
    currentPage: "expenses" | "analysis"
    onPageChange: (page: PageName) => void
    collapsed: boolean
}

export type ChartDataPoint = {
    month: string;       // e.g., "Aug 2025"
    spending: number;    // total expenses for that month
    budgetLimit: number; // the budget limit passed to the hook
    exceeded: boolean;   // true if spending > budgetLimit
};