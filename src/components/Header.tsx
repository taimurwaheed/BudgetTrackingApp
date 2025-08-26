import { useState } from "react";
import { Bell, Menu } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import Logo from "../assets/images/Logo.png";
import type { HeaderProps } from "../types/expense.types";
import {
    HeaderAppBar,
    HeaderToolbar,
    LogoWrapper,
    LogoImage,
    LogoText,
    LeftContainer,
    RightContainer,
    HeaderIconButton,
    HeaderAvatar
} from "./Header.styles";

export default function Header({ onToggleSidebar }: HeaderProps) {
    const { currentUser } = useAppContext();
    const userFirstName = currentUser?.firstName || "User";

    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <HeaderAppBar position="fixed" elevation={0}>
            <HeaderToolbar>
                <LeftContainer>
                    <LogoWrapper>
                        <LogoImage src={Logo} alt="Budget Tracker Logo" />
                        {isCollapsed && <LogoText variant="h6">Budget Tracker</LogoText>}
                    </LogoWrapper>
                    <HeaderIconButton
                        onClick={() => {
                            setIsCollapsed((prev) => !prev);
                            onToggleSidebar?.();
                        }}
                    >
                        <Menu size={20} />
                    </HeaderIconButton>
                </LeftContainer>

                <RightContainer>
                    <HeaderIconButton>
                        <Bell size={20} />
                    </HeaderIconButton>
                    <HeaderAvatar>{userFirstName[0]}</HeaderAvatar>
                </RightContainer>
            </HeaderToolbar>
        </HeaderAppBar>
    );
}
