import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const ModalBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
    margin: "auto",
    marginTop: theme.spacing(4),
    width: 400,
    borderRadius: 2,
    boxShadow: theme.shadows[5],
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
}));

export const FormActions = styled(Box)({
    marginTop: 16,
    display: "flex",
    justifyContent: "space-between",
});
