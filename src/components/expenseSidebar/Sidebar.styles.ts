import { styled } from "@mui/material/styles";
import { Box, ListItemButton, ListItemIcon } from "@mui/material";

// Main Sidebar container
export const SidebarContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== "collapsed",
})<{ collapsed: boolean }>(({ collapsed }) => ({
    position: "fixed",
    width: collapsed ? 70 : 230,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    paddingTop: 64,
    backgroundColor: "#ffffff",
    borderRight: "1px solid #e5e7eb",
    transition: "width 0.3s ease",
}));

// Logout button
export const LogoutButton = styled(ListItemButton, {
    shouldForwardProp: (prop) => prop !== "collapsed",
})<{ collapsed: boolean }>(({ collapsed }) => ({
    borderRadius: 8,
    padding: "10px 12px",
    minHeight: 40,
    color: "#6b7280",
    justifyContent: collapsed ? "center" : "flex-start",
    "&:hover": {
        backgroundColor: "#f3f4f6",
    },
}));

// Logout icon
export const LogoutIcon = styled(ListItemIcon, {
    shouldForwardProp: (prop) => prop !== "collapsed",
})<{ collapsed: boolean }>(({ collapsed }) => ({
    minWidth: collapsed ? "auto" : 40,
    marginRight: collapsed ? 0 : 8,
    color: "inherit",
}));
