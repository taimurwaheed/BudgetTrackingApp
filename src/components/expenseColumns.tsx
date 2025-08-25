// src/components/expenseColumns.ts
import { IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import type { Column, Expense } from "../types/expense.types";
import {
    LinearProgressStyled,
    ProgressContainer,
    ProgressBarBox,
    PercentageBox,
    ActionBox,
} from "./expenseColumns.styles";

export const expenseColumns = (
    onDelete: (id: string) => void,
    onEdit: (expense: Expense) => void,
    userBudget: number
): Column<Expense>[] => [
        {
            key: "expense",
            label: "Expense",
            cellRenderer: (row) => <span>{row.expense}</span>,
        },
        {
            key: "totalExpenditure",
            label: "Total Expenditure",
            cellRenderer: (row) => {
                const percentage = userBudget > 0 ? (row.price / userBudget) * 100 : 0;
                return (
                    <ProgressContainer>
                        <ProgressBarBox>
                            <LinearProgressStyled
                                variant="determinate"
                                value={percentage}
                            />
                        </ProgressBarBox>
                        <PercentageBox>
                            <Typography variant="body2" color="text.secondary">
                                {`${percentage.toFixed(0)}%`}
                            </Typography>
                        </PercentageBox>
                    </ProgressContainer>
                );
            },
        },
        {
            key: "price",
            label: "Price (PKR)",
            cellRenderer: (row) => <span>{row.price}</span>,
        },
        {
            key: "date",
            label: "Date",
            cellRenderer: (row) => <span>{new Date(row.date).toLocaleDateString()}</span>,
        },
        {
            label: "Actions",
            cellRenderer: (row) => (
                <ActionBox>
                    <IconButton color="error" onClick={() => onDelete(row.expenseId)}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton color="primary" onClick={() => onEdit(row)}>
                        <EditIcon />
                    </IconButton>
                </ActionBox>
            ),
        },
    ];
