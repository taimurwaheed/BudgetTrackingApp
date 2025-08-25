import { useState } from "react";
import type { Expense } from "../../types/expense.types";

export const useModalState = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const handleOpenAddModal = () => setIsAddModalOpen(true);
    const handleCloseAddModal = () => setIsAddModalOpen(false);

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedExpense, setSelectedExpense] = useState<null | Expense>(null);

    const handleEditClick = (expense: Expense) => {
        setSelectedExpense(expense);
        setIsEditModalOpen(true);
    };
    const handleCloseEditModal = () => setIsEditModalOpen(false);

    return {
        isAddModalOpen,
        handleOpenAddModal,
        handleCloseAddModal,
        isEditModalOpen,
        selectedExpense,
        handleEditClick,
        handleCloseEditModal,
    };
};
