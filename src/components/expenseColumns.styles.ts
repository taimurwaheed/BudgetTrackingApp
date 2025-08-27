import { styled } from "@mui/material/styles";
import { Box, LinearProgress } from "@mui/material";

// Styled LinearProgress
export const LinearProgressStyled = styled(LinearProgress)({
    height: 8,
    borderRadius: 5,
    backgroundColor: "#e0e0e0",
    "& .MuiLinearProgress-bar": {
        backgroundColor: "#673ab7",
    },
});

// Flex container for progress + percentage
export const ProgressContainer = styled(Box)({
    display: "flex",
    alignItems: "center",
});

export const PriceRow = styled(Box)({
    width: 20
});

// Box containing progress bar
export const ProgressBarBox = styled(Box)({
    width: "50%",
    marginRight: 8, // instead of mr: 1
});

// Percentage text box
export const PercentageBox = styled(Box)({
    minWidth: 50,
});

// Action buttons container
export const ActionBox = styled(Box)({
    display: "flex",
    gap: 8,
});
