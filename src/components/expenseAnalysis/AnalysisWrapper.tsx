// src/pages/AnalysisWrapper.tsx
import { useAppContext } from "../../context/AppContext";
import { useGetExpenses } from "../../services/api-hooks/expense.hook";
import AnalysisPage from "./AnalysisPage";

export default function AnalysisWrapper() {
    const { currentUser } = useAppContext();
    const { data: expenses = [] } = useGetExpenses();

    return (
        <AnalysisPage
            expenses={expenses}
            userBudget={Number(currentUser?.budget)}
        />
    );
}
