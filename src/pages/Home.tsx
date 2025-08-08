import { Typography, Button } from "@mui/material";
import { Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

function fetchDummyData() {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully with React Query!");
        }, 1000);
    });
}

export default function Home() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["dummyData"],
        queryFn: fetchDummyData,
    });

    return (
        <div style={{ padding: 20 }}>
            <Typography variant="h4" gutterBottom>
                Home Page
            </Typography>

            {isLoading && <Typography>Loading data...</Typography>}
            {error && <Typography color="secondary">Error fetching data</Typography>}
            {data && <Typography color="secondary" gutterBottom>{data}</Typography>}

            <Button
                component={Link}
                to="/about"
                variant="contained"
                startIcon={<Rocket size={20} />}
            >
                Go to About
            </Button>
        </div>
    );
}