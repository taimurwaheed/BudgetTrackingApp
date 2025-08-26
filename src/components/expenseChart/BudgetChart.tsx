import { Card, CardContent, Typography, Box } from "@mui/material"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts"
import type { BudgetChartProps } from "../../types/props.types"
import { useBudgetChartData } from "../../hooks/chartHook/useBudgetChartData"

// A custom tooltip component for the chart, extracted for modularity
const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload
        return (
            <Box
                sx={{
                    bgcolor: "background.paper",
                    p: 2,
                    border: 1,
                    borderColor: "divider",
                    borderRadius: 1,
                    boxShadow: 2,
                }}
            >
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
            </Box>
        )
    }
    return null
}

export default function BudgetChart({ expenses, reportFilter, budgetLimit }: BudgetChartProps) {
    const chartData = useBudgetChartData(expenses, reportFilter, budgetLimit);

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Budget Trend -{" "}
                    {reportFilter === "1month" ? "Last Month" : reportFilter === "6months" ? "Last 6 Months" : "Last 12 Months"}
                </Typography>

                <Box sx={{ width: "100%", height: 300, mt: 2 }}>
                    <ResponsiveContainer>
                        <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" tick={{ fontSize: 12 }} angle={-45} textAnchor="end" height={60} />
                            <YAxis tick={{ fontSize: 12 }} tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`} />
                            <Tooltip content={<CustomTooltip />} />

                            {/* Budget limit reference line */}
                            <ReferenceLine
                                y={budgetLimit}
                                stroke="#ef4444"
                                strokeDasharray="5 5"
                                label={{ value: "Budget Limit", position: "top" }}
                            />

                            {/* Spending line */}
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
                </Box>

                <Box sx={{ mt: 2, display: "flex", gap: 3, justifyContent: "center" }}>
                    <Box display="flex" alignItems="center" gap={1}>
                        <Box sx={{ width: 16, height: 3, bgcolor: "#7c3aed", borderRadius: 1 }} />
                        <Typography variant="caption">Monthly Spending</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1}>
                        <Box sx={{ width: 16, height: 3, bgcolor: "#ef4444", borderRadius: 1, opacity: 0.7 }} />
                        <Typography variant="caption">Budget Limit</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1}>
                        <Box sx={{ width: 8, height: 8, bgcolor: "#ef4444", borderRadius: "50%" }} />
                        <Typography variant="caption">Budget Exceeded</Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}
