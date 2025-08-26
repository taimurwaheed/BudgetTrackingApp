import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// Main container
export const MainBoxContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    background: "#ECF1F2",
}));

export const TableHeaderTitle = styled(Typography)(() => ({
    fontWeight: 500,
}));

// Sidebar-dependent main content area
export const MainBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== "collapsed",
})<{ collapsed: boolean }>(({ theme, collapsed }) => ({
    background: "#FFFFFF",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    border: "1px solid #e0e0e0",
    borderRadius: 8,
    flex: 1,
    height: "fit-content",
    transition: "margin-left 0.3s ease, width 0.3s ease",
    marginLeft: collapsed ? "120px" : "240px",
    width: collapsed ? "calc(100% - 120px)" : "calc(100% - 240px)",
    [theme.breakpoints.down("sm")]: {
        marginLeft: 0,
        width: "100%",
    },
}));

export const ContentWrapper = styled(Box, {
    shouldForwardProp: (prop) => prop !== "collapsed",
})<{ collapsed: boolean }>(({ collapsed }) => ({
    flexGrow: 1,
    padding: 32,
    transition: "margin-left 0.3s ease, width 0.3s ease",
    marginLeft: collapsed ? 70 : 250, // matches sidebar width
    width: `calc(100% - ${collapsed ? 70 : 250}px)`,
}));

// Header row for title + Add button
export const HeaderBox = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
    marginTop: 10,
}));

// Loading spinner container
export const LoadingBox = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    marginTop: 16,
}));

// Alert container for info/error messages
export const AlertLoading = styled(Box)(() => ({
    marginTop: 8,
}));

// Expense table container (scrollable + styled)
export const TableWrapper = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    height: "100%",
    border: "1px solid #e0e0e0",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
}));

// Header for table filters row
export const TableHeader = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "12px 16px",
    borderBottom: "1px solid #e0e0e0",
    backgroundColor: "#ecf1f23d",
}));

// Add Expense button
export const AddExpenseButton = styled(Button)(() => ({
    textTransform: "none",
}));

// Typography for page title
export const PageTitle = styled(Typography, {
    shouldForwardProp: (prop) => prop !== "collapsed",
})<{ collapsed: boolean }>(({ collapsed }) => ({
    fontWeight: 600,
    marginLeft: collapsed ? 80 : 222, // same as MainBox marginLeft
    transition: "margin-left 0.3s ease",
}));

export const AnalysisStyle = styled(Box, {
    shouldForwardProp: (prop) => prop !== "collapsed",
})<{ collapsed: boolean }>(({ theme, collapsed }) => ({
    marginLeft: collapsed ? 0 : 150, // same as MainBox/PageTitle
    padding: theme.spacing(3),       // give some padding inside
    transition: "margin-left 0.3s ease",
    [theme.breakpoints.down("sm")]: {
        marginLeft: 0,                 // full width on mobile
        padding: theme.spacing(2),
    },
}));

