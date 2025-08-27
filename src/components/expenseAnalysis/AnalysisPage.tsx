import { useState } from "react";
import BudgetChart from "../expenseChart/BudgetChart";
import type { AnalysisPageProps } from "../../types/props.types";
import {
    AnalysisContainer,
    AnalysisTitle,
    AnalysisPaper,
    AnalysisHeader,
    HeaderText,
    RangeBox,
    RangeFormControl,
} from "./Analysis.styles";
import { Select, MenuItem, Typography } from "@mui/material";

const AnalysisPage = ({ expenses, userBudget }: AnalysisPageProps) => {
    const [selectedRange, setSelectedRange] = useState<"1month" | "6months" | "12months">("12months");

    return (
        <AnalysisContainer>
            <AnalysisTitle variant="h5">Analysis</AnalysisTitle>

            <AnalysisPaper elevation={0}>
                <AnalysisHeader>
                    <HeaderText variant="subtitle1">Expenses</HeaderText>

                    <RangeBox>
                        <Typography variant="body2" color="text.Primary">
                            Range
                        </Typography>
                        <RangeFormControl size="small">
                            <Select
                                value={selectedRange}
                                onChange={(e) =>
                                    setSelectedRange(
                                        e.target.value as "1month" | "6months" | "12months"
                                    )
                                }
                            >
                                <MenuItem value="1month">Last Month</MenuItem>
                                <MenuItem value="6months">Last 6 Months</MenuItem>
                                <MenuItem value="12months">Last 12 Months</MenuItem>
                            </Select>
                        </RangeFormControl>
                    </RangeBox>
                </AnalysisHeader>

                <BudgetChart
                    expenses={expenses}
                    reportFilter={selectedRange}
                    budgetLimit={userBudget}
                />
            </AnalysisPaper>
        </AnalysisContainer>
    );
};

export default AnalysisPage;
