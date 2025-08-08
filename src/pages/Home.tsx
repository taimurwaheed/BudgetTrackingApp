import { Typography, Button } from "@mui/material";
import { Rocket } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div style={{ padding: 20 }}>
            <Typography variant="h4" gutterBottom>
                Home Page
            </Typography>
            <Button component={Link} to="/about" variant="contained" startIcon={<Rocket size={20} />}>
                Go to About
            </Button>
        </div>
    );
}
