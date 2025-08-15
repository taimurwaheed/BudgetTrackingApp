import { Box, Stack, Typography, TextField, Button, Link } from "@mui/material";
import Logo from "../assets/images/Logo.png"
import Illustration from "../assets/images/Illustration.png"

const ResetPassword = () => {
    return (
        // Main container for the entire page
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            {/* Container for the two-column layout */}
            <Stack
                direction={{ xs: 'column-reverse', md: 'row' }}
                sx={{
                    width: "100%",
                    maxWidth: "1200px",
                    overflow: "hidden", // Prevents illustration from overflowing
                }}
            >
                {/* Left column: Login Form */}
                <Box
                    sx={{
                        flex: 1,
                        p: { xs: 4, md: 8 },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "start",
                        gap: 5, // Spacing between elements
                        borderRight: { md: '1px solid #e0e0e0' },
                    }}
                >
                    {/* Logo and App Name */}
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 10 }}>
                        <Box
                            component="img"
                            src={Logo}
                            alt="Budget Tracker Logo"
                            sx={{ width: 29.7, height: 24.5, top: 50, left: 103 }}
                        />
                        <Typography variant="h5" sx={{
                            fontWeight: "bold", fontColor: '#2B2B2B', fontFamily: 'Poppins', width: 225.56166076660156,
                            height: 31.31764793395996,
                            angle: '0 deg',
                            opacity: '1',
                            top: '59.27px',
                            left: '182.8px'
                        }}>
                            Budget Tracker
                        </Typography>
                    </Stack>

                    {/* Welcome Text */}
                    <Box sx={{ mt: { xs: 1, md: 2 } }}>
                        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 0.5 }}>
                            Reset Password
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Enter you email for a reset link
                        </Typography>
                    </Box>

                    {/* Login Form */}
                    <Stack component="form" spacing={2}>
                        {/* Email Field */}
                        <TextField
                            label="Email"
                            variant="filled"
                            fullWidth
                            placeholder="text@gmail.com"
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: 2,
                                },
                            }}
                        />


                        {/* Login Button */}
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{
                                py: 1, // Padding on top and bottom
                            }}
                        >
                            Send Reset Password Link
                        </Button>
                    </Stack>

                    {/* Sign Up Link */}
                    <Typography variant="body2" sx={{ mt: -1, textAlign: "center" }}>
                        Don't have an account?{" "}
                        <Link href="/signup" variant="body2" underline="none" sx={{ color: "#8B5CF6" }}>
                            Sign Up
                        </Link>
                    </Typography>
                </Box>

                {/* Right column: Illustration */}
                <Box
                    sx={{
                        flex: 1,
                        display: { xs: "none", md: "flex" }, // Hide on small screens
                        justifyContent: "center",
                        alignItems: "end",
                        p: { xs: 0, md: 8 },
                    }}
                >
                    <Box
                        component="img"
                        src={Illustration}
                        alt="Budget Tracker Illustration"
                        sx={{
                            width: "80%",
                            height: 'auto',

                        }}
                    />
                </Box>
            </Stack>
        </Box>
    );
};

export default ResetPassword;
