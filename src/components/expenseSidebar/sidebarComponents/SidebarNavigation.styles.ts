import { styled } from "@mui/material/styles";
import { Box, ListItemButton, ListItemIcon } from "@mui/material";

// Container for sidebar menu
export const SidebarBox = styled(Box)(({ theme }) => ({
    flex: 0,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),

}));

// ListItemButton with dynamic styling
export const MenuItemButton = styled(ListItemButton, {
    shouldForwardProp: (prop) => prop !== "isActive" && prop !== "collapsed",
})<{ isActive: boolean; collapsed: boolean }>(({ isActive, collapsed }) => ({
    borderRadius: 8,
    backgroundColor: isActive ? "#7c3aed" : "transparent",
    color: isActive ? "white" : "#6b7280",
    justifyContent: collapsed ? "center" : "flex-start",
    "&:hover": {
        backgroundColor: isActive ? "#7c3aed" : "#f3f4f6",
    },
}));

// Icon wrapper
export const MenuItemIcon = styled(ListItemIcon, {
    shouldForwardProp: (prop) => prop !== "collapsed",
})<{ collapsed: boolean }>(({ collapsed }) => ({
    minWidth: collapsed ? "auto" : 40,
    marginRight: collapsed ? 0 : 8,
    color: "inherit",
}));
