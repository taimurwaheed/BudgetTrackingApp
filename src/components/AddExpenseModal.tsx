import {
    Box,
    Modal,
    TextField,
    Typography,
} from "@mui/material";
import { FormProvider, Controller } from "react-hook-form";
import { useAddExpense, useGetExpenses } from "../services/api-hooks/expense.hook";
import { ModalForm } from "./ModalForm";
import type { ExpenseFormInputs } from "../types/form-input.types";
import type { AddExpenseModalProps } from "../types/expense.types";
import { ModalBox, AddExpenseBtn } from "./AddExpenseModal.styles";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";
import { ErrorType } from "../pages/Login.styles";

export const AddExpenseModal = ({ open, onClose, showNotification }: AddExpenseModalProps) => {

    const { currentUser } = useAppContext();
    const { data: expenses = [] } = useGetExpenses();
    const [budgetError, setBudgetError] = useState<string | null>(null);

    const methods = ModalForm(null);
    const { handleSubmit, control, reset } = methods;

    const { mutateAsync } = useAddExpense();

    const onSubmit = async (data: ExpenseFormInputs) => {
        const currentTotal = expenses.reduce((sum, expense) => sum + expense.price, 0);
        const newTotal = currentTotal + data.price;
        const userBudget = Number(currentUser?.budget) || 0;

        if (userBudget > 0 && newTotal > userBudget) {
            setBudgetError("Budget limit Exceeded.");
            return;
        }

        setBudgetError(null);
        await mutateAsync(
            {
                title: data.title,
                price: data.price,
                date: data.date.toString(),
            },
            {
                onSuccess: () => {
                    reset();
                    onClose();
                    showNotification("Expense added successfully", "success"); // ✅ add this
                },
            }
        );
    };

    return (
        <Modal open={open} onClose={onClose}>
            <ModalBox

                onSubmit={handleSubmit(onSubmit)}
            >
                <Typography variant="h6">
                    Add New Expense
                </Typography>

                <FormProvider {...methods}>
                    <Box position="absolute" mt={4} alignContent={"center"}>
                        {budgetError && (
                            <Typography color="error" variant="body2" sx={{ mb: 0 }}>
                                {budgetError}
                            </Typography>
                        )}
                    </Box>
                    <Controller
                        name="title"
                        control={control}
                        render={({ field, fieldState }) => (
                            <Box position="relative" mb={0}>
                                <TextField
                                    {...field}
                                    fullWidth
                                    label="Expense Title"
                                    margin="normal"
                                    error={!!fieldState.error}
                                />
                                {fieldState.error && (
                                    <ErrorType>{fieldState.error.message}</ErrorType>
                                )}
                            </Box>

                        )}
                    />

                    <Controller
                        name="price"
                        control={control}
                        render={({ field, fieldState }) => (
                            <Box position="relative" mb={0}>
                                <TextField
                                    {...field}
                                    fullWidth
                                    label="Price"
                                    type="number"
                                    margin="normal"
                                    error={!!fieldState.error}
                                />
                                {fieldState.error && (
                                    <ErrorType>{fieldState.error.message}</ErrorType>
                                )}
                            </Box>

                        )}
                    />

                    <Controller
                        name="date"
                        control={control}
                        render={({ field, fieldState }) => (
                            <Box position="relative" mb={1}>
                                <TextField
                                    {...field}
                                    type="date"
                                    fullWidth
                                    margin="normal"
                                    value={
                                        field.value
                                            ? new Date(field.value).toISOString().split("T")[0]
                                            : ""
                                    }
                                    onChange={(e) =>
                                        field.onChange(e.target.value ? new Date(e.target.value) : null)
                                    }
                                    error={!!fieldState.error}
                                />{fieldState.error && (
                                    <ErrorType>{fieldState.error.message}</ErrorType>
                                )}
                            </Box>
                        )}
                    />

                    <AddExpenseBtn
                        type="submit"
                        variant="contained"
                        fullWidth
                    >
                        Add Expense
                    </AddExpenseBtn>
                    <AddExpenseBtn
                        variant="outlined"
                        onClick={onClose}
                    >
                        Close
                    </AddExpenseBtn>
                </FormProvider>
            </ModalBox>
        </Modal>
    );
};
