import { List, ListItem, ListItemText, Divider, Tooltip } from "@mui/material";
import { LogOut } from "lucide-react";
import type { SidebarProps } from "../../types/props.types";
import { useNavigate } from "react-router-dom";
import SidebarNavigation from "./sidebarComponents/SidebarNavigation";
import { useLogout } from "../../services/api-hooks/user.hook";
import { SidebarContainer, LogoutButton, LogoutIcon } from "./Sidebar.styles";

export default function Sidebar({ currentPage, onPageChange, collapsed }: SidebarProps) {
    const navigate = useNavigate();
    const logout = useLogout();

    const handleLogout = () => {
        logout();
        navigate("/login", { replace: true });
    };

    return (
        <SidebarContainer collapsed={collapsed}>
            <SidebarNavigation
                currentPage={currentPage}
                onPageChange={onPageChange}
                collapsed={collapsed}
            />

            <Divider />
            <List sx={{ p: 0 }}>
                <ListItem disablePadding>
                    <Tooltip title={collapsed ? "Logout" : ""} placement="right">
                        <LogoutButton onClick={handleLogout} collapsed={collapsed}>
                            <LogoutIcon collapsed={collapsed}>
                                <LogOut size={18} />
                            </LogoutIcon>
                            {!collapsed && <ListItemText primary="Logout" />}
                        </LogoutButton>
                    </Tooltip>
                </ListItem>
            </List>
        </SidebarContainer>
    );
}
