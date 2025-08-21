import styled from "@emotion/styled";
import { Box, Stack, Typography, Button } from "@mui/material";

export const RootContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const MainStack = styled(Stack)`
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
  flex-direction: column-reverse;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export const LeftPanel = styled(Box)`
  flex: 1;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  border-right: none;

  @media (min-width: 900px) {
    padding: 64px;
    border-right: 1px solid #e0e0e0;
  }
`;

export const RightPanel = styled(Box)`
  flex: 1;
  display: none;
  justify-content: center;
  align-items: flex-end;
  padding: 64px;

  @media (min-width: 900px) {
    display: flex;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

export const LogoWrapper = styled(Stack)`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const LogoImage = styled.img`
  width: 30px;
  height: 25px;
`;

export const LogoText = styled(Typography)`
  font-family: "Poppins", sans-serif;
  color: #2b2b2b;
`;

export const WelcomeWrapper = styled(Box)`
  margin-top: 16px;

  @media (min-width: 900px) {
    margin-top: 24px;
  }
`;

export const ErrorText = styled(Typography)`
  font-weight: 500;
  text-align: center;
`;

export const LoginButton = styled(Button)`
  padding: 8px 0;
`;

export const SignupText = styled(Typography)`
  margin-top: -8px;
  text-align: center;
`;
