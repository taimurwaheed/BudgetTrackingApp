import { Box, Stack, Typography, TextField, Button, Link } from "@mui/material";
import { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SignupImg from "../assets/images/SignupImg.png"
import Logo from "../assets/images/Logo.png"
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    // State to toggle password visibility
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fName, setFname] = useState('');
    const [lName, setLname] = useState('');
    const [budget, setBuget] = useState('');
    const [error, setError] = useState('');
    const { userService } = useUserContext();
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

    const handleMouseDownPassword = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    };


    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await userService.signupUser({ firstName: fName, lastName: lName, email, password, budget });
            navigate('/Login');
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        // Main container for the entire page with no background color
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "120vh",
            }}
        >
            {/* Container for the two-column layout */}
            <Stack
                direction={{ xs: 'column-reverse', md: 'row' }}
                sx={{
                    width: "100%",
                    maxWidth: "1200px",
                    overflow: "hidden",
                }}
            >
                {/* Left column: Sign Up Form */}
                <Box
                    sx={{
                        flex: 1,
                        p: { xs: 4, md: 8 },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: 3,
                        borderRight: { md: '1px solid #e0e0e0' },
                    }}
                >
                    {/* Logo and App Name */}
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

                    {/* Welcome Text */}
                    <Box sx={{ mt: { xs: 1, md: 4 } }}>
                        <Typography variant="h4" sx={{ fontWeight: "600", mb: 0.5 }}>
                            Sign Up
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Welcome to our community
                        </Typography>
                    </Box>

                    {/* Sign Up Form */}
                    <Stack component="form" onSubmit={handleSignup} spacing={2}>
                        {error && (
                            <p className="color: red">{error}</p>
                        )}
                        {/* First Name and Last Name in a row */}
                        <Stack direction="row" spacing={2}>
                            <TextField
                                label="First Name"
                                type="text"
                                variant="outlined"
                                fullWidth
                                value={fName}
                                onChange={(e) => setFname(e.target.value)}
                                placeholder="Cameron"
                            />
                            <TextField
                                label="Last Name"
                                variant="outlined"
                                fullWidth
                                value={lName}
                                onChange={(e) => setLname(e.target.value)}
                                placeholder="Williamson"
                            />
                        </Stack>

                        {/* Email Field */}
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="test@gmail.com"
                        />

                        {/* Password Field */}
                        <TextField
                            label="Password"
                            variant="outlined"
                            fullWidth
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        {/* Confirm Password Field */}
                        <TextField
                            label="Confirm Password"
                            variant="outlined"
                            fullWidth
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}

                            required
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowConfirmPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        {/* Budget Limit Field */}
                        <TextField
                            label="Budget Limit"
                            variant="outlined"
                            fullWidth
                            type="number"
                            value={budget}
                            onChange={(e) => setBuget(e.target.value)}
                            placeholder="Enter Amount"
                        />

                        {/* Sign Up Button */}
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{ py: 1 }}
                        >
                            SIGN UP
                        </Button>
                    </Stack>

                    {/* Login Link */}
                    <Typography variant="body2" sx={{ textAlign: "center" }}>
                        Already have an account?{" "}
                        <Link href="/login" variant="body2" underline="none">
                            Log In
                        </Link>
                    </Typography>
                </Box>

                {/* Right column: Illustration */}
                <Box
                    sx={{
                        flex: 1,
                        display: { xs: "none", md: "flex" },
                        justifyContent: "center",
                        alignItems: "center",
                        p: { xs: 0, md: 8 },
                    }}
                >
                    <Box
                        component="img"
                        src={SignupImg}
                        alt="Sign Up Illustration"
                        sx={{
                            width: "100%",
                            height: "auto",
                        }}
                    />
                </Box>
            </Stack>
        </Box>
    );
};

export default SignUp;
