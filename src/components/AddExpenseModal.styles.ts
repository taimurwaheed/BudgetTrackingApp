import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";

export const ModalBox = styled("form")(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4),
    borderRadius: 1,
    boxShadow: theme.shadows[5],
    width: 400,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
}));

export const SubmitButtonBox = styled(Box)({
    marginTop: 16,
});

export const AddExpenseBtn = styled(Button)({
    marginTop: 4,
    marginBottom: -10
});

export const TypographyError = styled(Typography)({
    color: "red",
    fontSize: "12"
})