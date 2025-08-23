import { styled } from "@mui/material/styles";
import { Box, Stack, Typography, Button } from "@mui/material";

export const Root = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "120vh",
}));

export const Wrapper = styled(Stack)(() => ({
    width: "100%",
    maxWidth: "1200px",
    overflow: "hidden",
    flexDirection: "row",
    "@media (max-width:900px)": {
        flexDirection: "column-reverse",
    },
}));

export const LeftPanel = styled(Box)(({ theme }) => ({
    flex: 1,
    padding: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: theme.spacing(3),
    borderRight: "1px solid #e0e0e0",
    [theme.breakpoints.down("md")]: {
        padding: theme.spacing(4),
        borderRight: "none",
    },
}));

export const LogoWrapper = styled(Stack)(() => ({
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
}));

export const LogoImg = styled("img")(() => ({
    width: 30,
    height: 25,
}));

export const LogoText = styled(Typography)(() => ({
    fontFamily: "Poppins",
    color: "#2B2B2B",
}));

export const WelcomeBox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
        marginTop: theme.spacing(1),
    },
}));

export const Title = styled(Typography)(() => ({
    fontWeight: 600,
    marginBottom: 4,
}));

export const Form = styled("form")(({ theme }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
}));

export const ErrorText = styled(Typography)(() => ({
    fontWeight: 500,
    textAlign: "center",
}));

export const SubmitButton = styled(Button)(() => ({
    padding: "8px 0",
}));

export const BottomText = styled(Typography)(() => ({
    textAlign: "center",
}));

export const RightPanel = styled(Box)(({ theme }) => ({
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
        display: "none",
        padding: 0,
    },
}));

export const Illustration = styled("img")(() => ({
    width: "100%",
    height: "auto",
}));
