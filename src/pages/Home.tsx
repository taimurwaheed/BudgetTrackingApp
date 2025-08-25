import { useNavigate } from "react-router-dom";
import { Button, Typography, CircularProgress, Alert } from "@mui/material";
import { TableComponent } from "../components/TableComp";
import { expenseColumns } from "../components/expenseColumns";
import { Pagination } from "../components/PaginationComp";
import { AddExpenseModal } from "../components/AddExpenseModa";
import { EditExpenseModal } from "../components/EditExpenseModal";
import { ExpenseFilters } from "../components/ExpenseFilters";
import { BoxModel, LoadingBox, AlertLoading, SectionBox, HeaderBox } from "./Home.styles";
import { useExpenseFilters } from "../hooks/expense/useExpenseFilters";
import { useModalState } from "../hooks/expense/useModalState";
import { useTableAndPagination } from "../hooks/expense/useTableAndPagination";
import { useAppContext } from "../context/AppContext";
import { useDeleteExpense, useEditExpense, useGetExpenses } from "../services/api-hooks/expense.hook";
import { useLogout } from "../services/api-hooks/user.hook";

export default function BudgetTracker() {
    const navigate = useNavigate();
    const { currentUser } = useAppContext();
    const { data: expenses = [], isLoading, error } = useGetExpenses();
    const { mutateAsync: deleteExpense } = useDeleteExpense();
    const { mutateAsync: editExpense } = useEditExpense();
    const logout = useLogout();
    const {
        sortBy,
        setSortBy,
        searchTerm,
        setSearchTerm,
        selectedDate,
        setSelectedDate,
        filteredAndSortedExpenses,
    } = useExpenseFilters(expenses);

    const {
        page,
        pageCount,
        currentData: currentExpenses,
        handlePageChange,
    } = useTableAndPagination(filteredAndSortedExpenses);

    const {
        isAddModalOpen,
        handleOpenAddModal,
        handleCloseAddModal,
        isEditModalOpen,
        selectedExpense,
        handleEditClick,
        handleCloseEditModal,
    } = useModalState();

    const totalExpenditure = expenses.reduce(
        (sum, expense) => sum + expense.price,
        0
    );

    const columns = expenseColumns(deleteExpense, handleEditClick, totalExpenditure);

    const handleLogout = () => {
        logout()
        navigate("/login");
    };

    return (
        <BoxModel>
            <Typography>Welcome to home page, {currentUser?.email}</Typography>
            <Button variant="contained" color="primary" onClick={handleLogout}>
                Logout
            </Button>

            <SectionBox>
                <HeaderBox>
                    <Typography variant="h5">Expenses</Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleOpenAddModal}
                    >
                        Add Expense
                    </Button>
                </HeaderBox>

                <ExpenseFilters
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                />

                {isLoading ? (
                    <LoadingBox>
                        <CircularProgress />
                    </LoadingBox>
                ) : error ? (
                    <Alert severity="error">Failed to load expenses.</Alert>
                ) : currentExpenses.length > 0 ? (
                    <>
                        <TableComponent data={currentExpenses} columns={columns} />
                        <Pagination
                            count={pageCount}
                            page={page}
                            onChange={handlePageChange}
                        />
                    </>
                ) : (
                    <AlertLoading>
                        <Alert severity="info">No expenses found.</Alert>
                    </AlertLoading>
                )}
            </SectionBox>

            <AddExpenseModal
                open={isAddModalOpen}
                onClose={handleCloseAddModal}
            />
            {selectedExpense && (
                <EditExpenseModal
                    open={isEditModalOpen}
                    onClose={handleCloseEditModal}
                    expense={selectedExpense}
                    onSubmitExpense={async (updatedExpense) => {
                        await editExpense(updatedExpense);
                    }}
                />
            )}
        </BoxModel>
    );
}
