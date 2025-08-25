import {
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

export const AddExpenseModal = ({ open, onClose }: AddExpenseModalProps) => {

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
            setBudgetError("Can't Add More Expense, Budget limit Exceeded.");
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
                },
            }
        );
    };

    return (
        <Modal open={open} onClose={onClose}>
            <ModalBox

                onSubmit={handleSubmit(onSubmit)}
            >
                <Typography variant="h6" mb={2}>
                    Add New Expense
                </Typography>

                <FormProvider {...methods}>
                    {budgetError && (
                        <Typography color="error" variant="body2" sx={{ mb: 1 }}>
                            {budgetError}
                        </Typography>
                    )}
                    <Controller
                        name="title"
                        control={control}
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                fullWidth
                                label="Expense Title"
                                margin="normal"
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />

                    <Controller
                        name="price"
                        control={control}
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                fullWidth
                                label="Price"
                                type="number"
                                margin="normal"
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />

                    <Controller
                        name="date"
                        control={control}
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                fullWidth
                                label="Date"
                                type="date"
                                margin="normal"
                                value={
                                    field.value
                                        ? new Date(field.value).toISOString().split("T")[0]
                                        : ""
                                }
                                onChange={(e) => field.onChange(new Date(e.target.value))}
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />

                    <AddExpenseBtn
                        type="submit"
                        variant="contained"
                        fullWidth
                    >
                        Add Expense
                    </AddExpenseBtn>
                </FormProvider>
            </ModalBox>
        </Modal>
    );
};
