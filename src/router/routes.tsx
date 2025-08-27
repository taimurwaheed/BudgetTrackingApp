import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ResetPassword from "../pages/ResetPassword";
import { useEffect, type ReactNode } from "react";
import BudgetTracker from "../pages/Home";
import { AppProvider, useAppContext } from "../context/AppContext";
import { useCurrentUser } from "../services/api-hooks/user.hook";
import AnalysisWrapper from "../components/expenseAnalysis/AnalysisWrapper";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
    const { setCurrentUser } = useAppContext();
    const { data: loggedInUser, isLoading } = useCurrentUser();
    console.log("PrivateRoute loggedInUser", loggedInUser, "loading:", isLoading);


    useEffect(() => {
        if (loggedInUser) setCurrentUser(loggedInUser);
    }, [loggedInUser, setCurrentUser]);

    if (isLoading) return null;
    return loggedInUser ? <>{children}</> : <Navigate to="/login" />;
};

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <AppProvider>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/password-reset" element={<ResetPassword />} />
                    <Route
                        element={
                            <PrivateRoute>
                                <BudgetTracker />
                            </PrivateRoute>
                        }
                    >
                        <Route path="/home" element={<BudgetTracker />} />
                        <Route path="/analysis" element={<AnalysisWrapper />} />
                    </Route>

                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </AppProvider>
        </BrowserRouter>
    );
}
