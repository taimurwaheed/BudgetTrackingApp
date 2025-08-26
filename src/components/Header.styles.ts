import styled from "@emotion/styled";
import { Stack, Typography, AppBar, Toolbar, IconButton, Box, Avatar } from "@mui/material";

// AppBar container
export const HeaderAppBar = styled(AppBar)`
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  color: #374151;
  width: 100%;
  box-shadow: none;
`;

// Toolbar with spacing
export const HeaderToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* allow wrapping on small screens */
`;

// Logo section container
export const LogoWrapper = styled(Stack)`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

// Logo image
export const LogoImage = styled.img`
  width: 24px;
  height: 24px;
`;

// Logo text
export const LogoText = styled(Typography)`
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: #2b2b2b;
  @media (max-width: 600px) {
    display: none; /* hide on extra-small screens */
  }
`;

// Left container for menu + logo
export const LeftContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 26px;
`;

// Right container for avatar + icons
export const RightContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 0;
  @media (max-width: 600px) {
    margin-top: 8px;
  }
`;

// Icon button styling
export const HeaderIconButton = styled(IconButton)`
  padding: 4px;
  &:hover {
    background-color: #f3f4f6;
  }
`;

// Avatar styling
export const HeaderAvatar = styled(Avatar)`
  width: 34px;
  height: 34px;
  background-color: #d1d5db;
`;
