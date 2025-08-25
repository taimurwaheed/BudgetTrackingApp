import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// Main container
export const BoxModel = styled(Box)(() => ({
    padding: 16, // p: 2
}));

// Loading spinner container
export const LoadingBox = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    marginTop: 16, // mt: 4
}));

// Info/Error alerts container
export const AlertLoading = styled(Box)(() => ({
    marginTop: 8, // mt: 2
}));

// Section wrapper (Expenses list + filters + add button)
export const SectionBox = styled(Box)(() => ({
    marginTop: 16, // mt: 4
}));

// Header row (title + add button)
export const HeaderBox = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8, // mb: 2
}));
