import { List, ListItem, ListItemText, Tooltip } from "@mui/material";
import { BarChart3, CreditCard } from "lucide-react";
import type { SidebarProps } from "../../../types/props.types";
import { SidebarBox, MenuItemButton, MenuItemIcon } from "./SidebarNavigation.styles";

export default function SidebarNavigation({ currentPage, onPageChange, collapsed }: SidebarProps) {
    const menuItems = [
        { id: "analysis" as const, label: "Analysis", icon: BarChart3 },
        { id: "expenses" as const, label: "Expenses", icon: CreditCard },
    ];

    return (
        <SidebarBox sx={{ paddingTop: collapsed ? 2 : 0 }}>
            <List>
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = currentPage === item.id;

                    const listItem = (
                        <ListItem key={item.id} disablePadding sx={{ mb: 0.5 }}>
                            <MenuItemButton
                                onClick={() => onPageChange(item.id)}
                                isActive={isActive}
                                collapsed={collapsed}
                            >
                                <MenuItemIcon collapsed={collapsed}>
                                    <Icon size={18} />
                                </MenuItemIcon>
                                {!collapsed && <ListItemText primary={item.label} />}
                            </MenuItemButton>
                        </ListItem>
                    );

                    return collapsed ? (
                        <Tooltip key={item.id} title={item.label} placement="right">
                            {listItem}
                        </Tooltip>
                    ) : (
                        listItem
                    );
                })}
            </List>
        </SidebarBox>
    );
}
