import { styled } from "@mui/material/styles";
import { Box, Stack, Typography, Button, Link } from "@mui/material";

// Full-page container
export const PageContainer = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
}));

// Two-column layout
export const LayoutStack = styled(Stack)(() => ({
    width: "100%",
    maxWidth: "1200px",
    overflow: "hidden",
}));

// Left column (form area)
export const LeftColumn = styled(Box)(() => ({
    flex: 1,
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    gap: "2rem",
    borderRight: "1px solid #e0e0e0",
}));

// Logo row
export const LogoRow = styled(Stack)(() => ({
    marginBottom: "2.5rem",
}));

// Logo Image
export const LogoImage = styled("img")(() => ({
    width: "29.7px",
    height: "24.5px",
}));

// App Name
export const AppName = styled(Typography)(() => ({
    fontWeight: "bold",
    fontFamily: "Poppins",
}));

// Heading container
export const HeadingBox = styled(Box)(() => ({
    marginTop: "1rem",
}));

// Heading text
export const Heading = styled(Typography)(() => ({
    fontWeight: "bold",
    marginBottom: "0.5rem",
}));

// Subheading text
export const SubHeading = styled(Typography)(() => ({
    color: "rgba(0, 0, 0, 0.6)",
}));

// Form wrapper
export const Form = styled("form")(({ theme }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
}));

// Submit button
export const SubmitButton = styled(Button)(() => ({
    marginTop: "0.5rem",
}));

// Sign up text
export const SignUpText = styled(Typography)(() => ({
    marginTop: "-1rem",
    textAlign: "center",
}));

// Sign up link
export const SignUpLink = styled(Link)(() => ({
    color: "#8B5CF6",
}));

// Right column (illustration)
export const IllustrationBox = styled(Box)(() => ({
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
    padding: "2rem",
    "@media (max-width: 900px)": {
        display: "none",
    },
}));

// Illustration Image
export const IllustrationImage = styled("img")(() => ({
    width: "80%",
    height: "auto",
}));
