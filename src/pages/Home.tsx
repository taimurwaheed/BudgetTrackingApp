import { Button, Typography, CircularProgress, Alert, Box } from "@mui/material";
import { TableComponent } from "../components/TableComp";
import { expenseColumns } from "../components/expenseColumns";
import { Pagination } from "../components/PaginationComp";
import { AddExpenseModal } from "../components/AddExpenseModa";
import { EditExpenseModal } from "../components/EditExpenseModal";
import { ExpenseFilters } from "../components/ExpenseFilters";
import { LoadingBox, AlertLoading, SectionBox, HeaderBox } from "./Home.styles";
import { useExpenseFilters } from "../hooks/expense/useExpenseFilters";
import { useModalState } from "../hooks/expense/useModalState";
import { useTableAndPagination } from "../hooks/expense/useTableAndPagination";
import { useDeleteExpense, useEditExpense, useGetExpenses } from "../services/api-hooks/expense.hook";
import Header from "../components/Header";
import { useState } from "react";
import Sidebar from "../components/expenseSidebar/Sidebar";
import AnalysisPage from "../components/expenseAnalysis/AnalysisPage";
import { useAppContext } from "../context/AppContext";

export default function BudgetTracker() {
    const { data: expenses = [], isLoading, error } = useGetExpenses();
    const { mutateAsync: deleteExpense } = useDeleteExpense();
    const { mutateAsync: editExpense } = useEditExpense();
    const { currentUser } = useAppContext()

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

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const handleToggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const [currentPage, setCurrentPage] = useState<"expenses" | "analysis">("expenses");
    const onSidebarChange = (page: "expenses" | "analysis") => {
        setCurrentPage(page);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Header onToggleSidebar={handleToggleSidebar} />
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
                <Sidebar
                    currentPage={currentPage}
                    onPageChange={onSidebarChange}
                    collapsed={!isSidebarOpen}
                />
                <Box sx={{ flexGrow: 1, p: 2, overflowY: 'auto' }}>
                    {currentPage === "expenses" ? (
                        <>
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
                        </>
                    ) : (
                        // ✅ Render the AnalysisPage when currentPage is "analysis"
                        <AnalysisPage expenses={expenses}
                            userBudget={Number(currentUser?.budget)} />
                    )}
                </Box>
            </Box>
        </Box>
    );
} 