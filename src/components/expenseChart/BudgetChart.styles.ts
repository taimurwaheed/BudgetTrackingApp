import { Box, Card, CardContent, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

// Wrapper card
export const StyledCard = styled(Card)(({ theme }) => ({
    boxShadow: theme.shadows[3],
    borderRadius: theme.shape.borderRadius,
}))

export const StyledCardContent = styled(CardContent)(() => ({
    padding: 16,
}))

export const TitleTypography = styled(Typography)(() => ({
    fontWeight: 600,
}))

export const ChartWrapper = styled(Box)(() => ({
    width: "100%",
    height: 300,
    marginTop: 16,
}))

export const LegendWrapper = styled(Box)(() => ({
    marginTop: 16,
    display: "flex",
    gap: 24,
    justifyContent: "center",
}))

export const LegendItem = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    gap: 8,
}))

export const LegendLine = styled(Box)(() => ({
    width: 16,
    height: 3,
    borderRadius: 4,
}))

export const LegendDot = styled(Box)(() => ({
    width: 8,
    height: 8,
    borderRadius: "50%",
}))

// Tooltip Box
export const TooltipBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
}))
