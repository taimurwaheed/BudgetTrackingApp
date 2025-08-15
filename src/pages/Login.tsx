import { Box, Stack, Typography, TextField, Button, Checkbox, FormControlLabel, Link } from "@mui/material";
import Logo from "../assets/images/Logo.png"
import Illustration from "../assets/images/Illustration.png"
import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { userService } = useUserContext();
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            const user = await userService.findUserByEmail(email);
            if (user && user.password === password) {
                login(user);
                navigate('/home');
            } else {
                setError('Invalid email or password');
            }
        } catch (err) {
            setError('Login failed. Please try again.');
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Stack
                direction={{ xs: 'column-reverse', md: 'row' }}
                sx={{
                    width: "100%",
                    maxWidth: "1200px",
                    overflow: "hidden",
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        p: { xs: 4, md: 8 },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: 5,
                        borderRight: { md: '1px solid #e0e0e0' },
                    }}
                >
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Box
                            component="img"
                            src={Logo}
                            alt="Budget Tracker Logo"
                            sx={{ width: 29.7, height: 24.5, top: 50, left: 103 }}
                        />
                        <Typography variant="h5" sx={{
                            fontColor: '#2B2B2B',
                            fontFamily: 'Poppins',
                            width: 225.56166076660156,
                            height: 31.31764793395996,
                            angle: '0 deg',
                            opacity: '1',
                            top: '59.27px',
                            left: '182.8px'
                        }}>
                            Budget Tracker
                        </Typography>
                    </Stack>

                    <Box sx={{ mt: { xs: 1, md: 2 } }}>
                        <Typography variant="h4">
                            Welcome Back!
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Sign in to continue to Budget Tracker
                        </Typography>
                    </Box>

                    <Stack component="form" onSubmit={handleLogin} spacing={2}>
                        {error && (
                            <Typography
                                variant="body2"
                                color="error"
                                align="center"
                                sx={{ fontWeight: 500 }}
                            >
                                {error}
                            </Typography>
                        )}
                        <TextField
                            label="Email"
                            variant="filled"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            fullWidth
                            placeholder="text@gmail.com"
                        />
                        <TextField
                            label="Password"
                            variant="filled"
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            type="password"
                            placeholder="Enter your password"
                        />

                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Remember me"
                            />
                            <Link href="/password-reset" variant="body2" underline="none" color="primary">
                                Forgot Password?
                            </Link>
                        </Stack>

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{
                                py: 1,
                            }}
                        >
                            LOG IN
                        </Button>
                    </Stack>

                    <Typography variant="body2" sx={{ mt: -1, textAlign: "center" }}>
                        Don't have an account?{" "}
                        <Link href="/signup" variant="body2" underline="none">
                            Sign Up
                        </Link>
                    </Typography>
                </Box>

                <Box
                    sx={{
                        flex: 1,
                        display: { xs: "none", md: "flex" },
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
                            width: "100%",
                            height: 'auto',
                        }}
                    />
                </Box>
            </Stack>
        </Box>
    );
};

export default Login;