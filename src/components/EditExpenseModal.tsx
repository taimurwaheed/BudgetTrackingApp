// src/components/EditExpenseModal.tsx
import { Modal, Typography, Button, TextField } from "@mui/material";
import { FormProvider, Controller } from "react-hook-form";
import { useEffect } from "react";
import type { EditExpenseModalProps } from "../types/expense.types";
import { ModalBox, FormActions } from "./EditExpenseModal.styles";
import { ModalForm } from "./ModalForm";

export const EditExpenseModal: React.FC<EditExpenseModalProps> = ({
    open,
    onClose,
    expense,
    onSubmitExpense,
}) => {
    const formMethods = ModalForm(expense!);
    const { reset } = formMethods;

    useEffect(() => {
        if (open && expense) {
            reset({
                title: expense.expense,
                price: expense.price,
                date: new Date(expense.date),
            });
        }
    }, [open, expense, reset]);

    const onSubmit = (data: any) => {
        if (!expense) return;
        const updatedExpense = {
            ...expense,
            expense: data.title,
            price: data.price,
            date: data.date,
        };
        onSubmitExpense(updatedExpense);
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <ModalBox>
                <Typography variant="h6" gutterBottom>
                    Edit Expense
                </Typography>

                <FormProvider {...formMethods}>
                    <form onSubmit={formMethods.handleSubmit(onSubmit)}>
                        <Controller
                            name="title"
                            control={formMethods.control}
                            render={({ field }) => (
                                <TextField {...field} label="Expense" fullWidth margin="normal" />
                            )}
                        />

                        <Controller
                            name="price"
                            control={formMethods.control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Price"
                                    type="number"
                                    fullWidth
                                    margin="normal"
                                />
                            )}
                        />

                        <Controller
                            name="date"
                            control={formMethods.control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Date"
                                    type="date"
                                    fullWidth
                                    margin="normal"
                                    value={
                                        field.value
                                            ? new Date(field.value).toISOString().split("T")[0]
                                            : ""
                                    }
                                    onChange={(e) => field.onChange(new Date(e.target.value))}
                                />
                            )}
                        />

                        <FormActions>
                            <Button variant="contained" type="submit">
                                Save
                            </Button>
                            <Button variant="outlined" onClick={onClose}>
                                Cancel
                            </Button>
                        </FormActions>
                    </form>
                </FormProvider>
            </ModalBox>
        </Modal>
    );
};
