import { useNavigate } from "react-router-dom"
import { useLogout } from "../services/api-hooks/user.hook";
import { Button, Box, Typography } from "@mui/material";
import { useAppContext } from "../context/AppContext";

export default function BudgetTracker() {
    const navigate = useNavigate();
    const logout = useLogout()
    const { currentUser } = useAppContext();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <Box sx={{ p: 2 }}>
            <Typography>
                Welcome to home page, {currentUser?.email}
            </Typography>
            <Button variant="contained" color="primary" onClick={handleLogout}>
                Logout
            </Button>
        </Box>
    );
}