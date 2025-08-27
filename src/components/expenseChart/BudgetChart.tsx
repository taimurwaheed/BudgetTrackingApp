import { Typography } from "@mui/material"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts"
import type { BudgetChartProps } from "../../types/props.types"
import { useBudgetChartData } from "../../hooks/chartHook/useBudgetChartData"
import {
    StyledCard,
    StyledCardContent,
    TitleTypography,
    ChartWrapper,
    LegendWrapper,
    LegendItem,
    LegendLine,
    LegendDot,
    TooltipBox,
} from "./BudgetChart.styles"

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload
        return (
            <TooltipBox>
                <Typography variant="subtitle2">{label}</Typography>
                <Typography variant="body2" color="primary">
                    Spending: PKR {data.spending.toLocaleString()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Budget: PKR {data.budgetLimit.toLocaleString()}
                </Typography>
                {data.exceeded && (
                    <Typography variant="body2" color="error">
                        Exceeded by PKR {(data.spending - data.budgetLimit).toLocaleString()}
                    </Typography>
                )}
            </TooltipBox>
        )
    }
    return null
}

export default function BudgetChart({ expenses, reportFilter, budgetLimit }: BudgetChartProps) {
    const chartData = useBudgetChartData(expenses, reportFilter, budgetLimit)

    return (
        <StyledCard>
            <StyledCardContent>
                <TitleTypography variant="h6" gutterBottom>
                    Budget Trend -{" "}
                    {reportFilter === "1month" ? "Last Month" : reportFilter === "6months" ? "Last 6 Months" : "Last 12 Months"}
                </TitleTypography>

                <ChartWrapper>
                    <ResponsiveContainer>
                        <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" tick={{ fontSize: 12 }} angle={-45} textAnchor="end" height={60} />
                            <YAxis tick={{ fontSize: 12 }} tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`} />
                            <Tooltip content={<CustomTooltip />} />

                            <ReferenceLine
                                y={budgetLimit}
                                stroke="#ef4444"
                                strokeDasharray="5 5"
                                label={{ value: "Budget Limit", position: "top" }}
                            />

                            <Line
                                type="monotone"
                                dataKey="spending"
                                stroke="#7c3aed"
                                strokeWidth={3}
                                dot={(props: any) => {
                                    const { cx, cy, payload } = props
                                    return (
                                        <circle
                                            cx={cx}
                                            cy={cy}
                                            r={4}
                                            fill={payload.exceeded ? "#ef4444" : "#7c3aed"}
                                            stroke="#fff"
                                            strokeWidth={2}
                                        />
                                    )
                                }}
                                activeDot={{ r: 6, fill: "#7c3aed" }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </ChartWrapper>

                <LegendWrapper>
                    <LegendItem>
                        <LegendLine sx={{ bgcolor: "#7c3aed" }} />
                        <Typography variant="caption">Monthly Spending</Typography>
                    </LegendItem>
                    <LegendItem>
                        <LegendLine sx={{ bgcolor: "#ef4444", opacity: 0.7 }} />
                        <Typography variant="caption">Budget Limit</Typography>
                    </LegendItem>
                    <LegendItem>
                        <LegendDot sx={{ bgcolor: "#ef4444" }} />
                        <Typography variant="caption">Budget Exceeded</Typography>
                    </LegendItem>
                </LegendWrapper>
            </StyledCardContent>
        </StyledCard>
    )
}
