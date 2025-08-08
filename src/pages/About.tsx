import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div style={{ padding: 20 }}>
            <Typography variant="h4" gutterBottom>
                About Page
            </Typography>
            <Button component={Link} to="/" variant="contained">
                Go to Home
            </Button>
        </div>
    );
}
