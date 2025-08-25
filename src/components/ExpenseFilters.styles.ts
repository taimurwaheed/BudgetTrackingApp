import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BoxModel = styled(Box)(() => ({
    display: "flex", gap: 8, alignItems: "center", justifyContent: "end", marginBottom: 8,
}))

export const SortTextField = styled(TextField)(() => ({
    minWidth: 120
}))

export const SearchTextField = styled(TextField)(() => ({
    minWidth: 120
}))

export const TypographyExpense = styled(Typography)(() => ({
    display: "flex", alignItems: "center", justifyContent: "start", flexGrow: 1
}))
