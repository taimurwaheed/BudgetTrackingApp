import { styled } from "@mui/material/styles";
import { Box, Typography, Paper, FormControl } from "@mui/material";

// Outer container for AnalysisPage
export const AnalysisContainer = styled(Box)(({ theme }) => ({
    paddingLeft: theme.spacing(6),
    // margin: theme.spacing(4),
    // marginTop: theme.spacing(1),
    height: "100vh",
    overflow: "hidden",
}));

// ye kaam expense page pe krna hai
// export const AnalysisContainer = styled(Box)(({ theme }) => ({
//     paddingLeft: theme.spacing(6),
//     margin: theme.spacing(4),
//     marginTop: theme.spacing(1),
//     height: "40vh",
//     overflowY: "auto",   // 👈 ye add karo
// }));

// Page title "Analysis"
export const AnalysisTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(2),
}));

// Paper wrapper for chart section
export const AnalysisPaper = styled(Paper)(({ theme }) => ({
    borderRadius: 8,
    padding: theme.spacing(2),
    // border: "1px solid",
    borderColor: theme.palette.grey[300],
}));

// Header container (title + select)
export const AnalysisHeader = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
}));

// Typography for header text
export const HeaderText = styled(Typography)(({ theme }) => ({
    fontWeight: 500,
    color: theme.palette.text.primary,
}));

// Container for Range selector
export const RangeBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
}));

// FormControl wrapper for select dropdown
export const RangeFormControl = styled(FormControl)(() => ({
    minWidth: 120,
}));
