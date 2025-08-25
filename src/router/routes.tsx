import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ResetPassword from "../pages/ResetPassword";
import { useEffect, type ReactNode } from "react";
import BudgetTracker from "../pages/Home";
import { AppProvider, useAppContext } from "../context/AppContext";
import { useCurrentUser } from "../services/api-hooks/user.hook";
import { CircularProgress } from "@mui/material";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
    const { setCurrentUser } = useAppContext();
    const { data: loggedInUser, isLoading } = useCurrentUser();

    useEffect(() => {
        if (loggedInUser) setCurrentUser(loggedInUser);
    }, [loggedInUser, setCurrentUser]);

    if (isLoading) return <CircularProgress />;
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
                        path="/home"
                        element={
                            <PrivateRoute>
                                <BudgetTracker />
                            </PrivateRoute>
                        }
                    />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </AppProvider>
        </BrowserRouter>
    );
}
