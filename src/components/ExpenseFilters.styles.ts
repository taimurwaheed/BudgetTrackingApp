import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BoxModel = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: 8,
    alignItems: "center",
    justifyContent: "end",
    margin: 12,
    flexWrap: "wrap",
}));

export const SortTextField = styled(TextField)(({ theme }) => ({
    minWidth: 120,
    background: "white",
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
}));

export const SearchTextField = styled(TextField)(() => ({
    minWidth: 120,
    background: "white",
}));

export const DataeField = styled(TextField)(({ theme }) => ({
    minWidth: 120,
    background: "white",
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
}));

export const TypographyExpense = styled(Typography)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    flexGrow: 1,
}));
