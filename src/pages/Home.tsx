import { CircularProgress, Alert, Box } from "@mui/material";
import { TableComponent } from "../components/TableComp";
import { expenseColumns } from "../components/expenseColumns";
import { Pagination } from "../components/PaginationComp";
import { AddExpenseModal } from "../components/AddExpenseModa";
import { EditExpenseModal } from "../components/EditExpenseModal";
import { ExpenseFilters } from "../components/ExpenseFilters";
import Header from "../components/Header";
import Sidebar from "../components/expenseSidebar/Sidebar";
import AnalysisPage from "../components/expenseAnalysis/AnalysisPage";
import { useExpenseFilters } from "../hooks/expense/useExpenseFilters";
import { useModalState } from "../hooks/expense/useModalState";
import { useTableAndPagination } from "../hooks/expense/useTableAndPagination";
import { useDeleteExpense, useEditExpense, useGetExpenses } from "../services/api-hooks/expense.hook";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";
import {
    MainBoxContainer,
    MainBox,
    HeaderBox,
    LoadingBox,
    AlertLoading,
    TableWrapper,
    TableHeader,
    AddExpenseButton,
    PageTitle,
    TableHeaderTitle,
    AnalysisStyle
} from "./Home.styles";

export default function BudgetTracker() {
    const { data: expenses = [], isLoading, error } = useGetExpenses();
    const { mutateAsync: deleteExpense } = useDeleteExpense();
    const { mutateAsync: editExpense } = useEditExpense();
    const { currentUser } = useAppContext();

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

    const totalExpenditure = expenses.reduce((sum, expense) => sum + expense.price, 0);
    const columns = expenseColumns(deleteExpense, handleEditClick, totalExpenditure);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const handleToggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const [currentPage, setCurrentPage] = useState<"expenses" | "analysis">("expenses");
    const onSidebarChange = (page: "expenses" | "analysis") => setCurrentPage(page);

    return (
        <MainBoxContainer>
            <Header onToggleSidebar={handleToggleSidebar} />
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
                <Sidebar currentPage={currentPage} onPageChange={onSidebarChange} collapsed={!isSidebarOpen} />
                <Box sx={{ flexGrow: 1, py: 8, px: 2, overflowX: 'hidden' }}>
                    {currentPage === "expenses" ? (
                        <>
                            <HeaderBox>
                                <PageTitle variant="h5" collapsed={!isSidebarOpen}>
                                    Expenses
                                </PageTitle>
                                <AddExpenseButton variant="contained" color="primary" onClick={handleOpenAddModal}>
                                    Add Expense
                                </AddExpenseButton>
                            </HeaderBox>

                            <MainBox collapsed={!isSidebarOpen}>
                                {isLoading ? (
                                    <LoadingBox>
                                        <CircularProgress />
                                    </LoadingBox>
                                ) : error ? (
                                    <Alert severity="error">Failed to load expenses.</Alert>
                                ) : currentExpenses.length > 0 ? (
                                    <TableWrapper>
                                        <TableHeader>
                                            <TableHeaderTitle variant="body1">Expense</TableHeaderTitle>
                                            <Box sx={{ flexGrow: 1 }} />
                                            <ExpenseFilters
                                                sortBy={sortBy}
                                                setSortBy={setSortBy}
                                                searchTerm={searchTerm}
                                                setSearchTerm={setSearchTerm}
                                                selectedDate={selectedDate}
                                                setSelectedDate={setSelectedDate}
                                            />
                                        </TableHeader>
                                        <TableComponent data={currentExpenses} columns={columns} />
                                        <Pagination count={pageCount} page={page} onChange={handlePageChange} />
                                    </TableWrapper>
                                ) : (
                                    <AlertLoading>
                                        <Alert severity="info">No expenses found.</Alert>
                                    </AlertLoading>
                                )}

                                <AddExpenseModal open={isAddModalOpen} onClose={handleCloseAddModal} />
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
                            </MainBox>
                        </>
                    ) : (
                        <AnalysisStyle collapsed={!isSidebarOpen} >
                            <AnalysisPage expenses={expenses} userBudget={Number(currentUser?.budget)} />
                        </AnalysisStyle>
                    )}
                </Box>
            </Box>
        </MainBoxContainer>
    );
}
