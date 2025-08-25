export interface Expense {
    expenseId: string;
    expense: string;
    totalExpenditure: number;
    price: number;
    date: Date;
    userId: string;
}

export interface Column<T> {
    key?: keyof T;
    label: string;
    cellRenderer: (row: T) => React.ReactNode
}

export interface TableProps<T> {
    data: T[];
    columns: Column<T>[];
}

export interface EditExpenseModalProps {
    open: boolean;
    onClose: () => void;
    expense: Expense | null;
    onSubmitExpense: (updatedExpense: Expense) => Promise<void>;
}

export interface AddExpenseModalProps {
    open: boolean;
    onClose: () => void;
}

export interface PaginationProps {
    count: number;
    page: number;
    onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export interface ExpenseTableBodyProps {
    paginatedExpenses: Expense[];
    isProcessing: boolean;
    handleDeleteExpense: (expenseId: string) => void;
    openEditModal: (expense: Expense) => void;
}

export interface ExpensesTableProps {
    paginatedExpenses: Expense[];
    isProcessing: boolean;
    handleDeleteExpense: (expenseId: string) => void;
    openEditModal: (expense: Expense) => void;
}


export interface ExpenseFiltersProps {
    sortBy: string;
    setSortBy: (sortBy: string) => void;
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
    selectedDate: string;
    setSelectedDate: (selectedDate: string) => void;
}