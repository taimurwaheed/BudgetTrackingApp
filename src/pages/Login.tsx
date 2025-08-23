
import { Stack, Typography, TextField, Checkbox, FormControlLabel, Link } from "@mui/material";
import Logo from "../assets/images/Logo.png";
import Illustration from "../assets/images/Illustration.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { LoginFormInputs } from "../types/form-input.types";
import { Loginschema } from "../utils/schemas";

import {
    RootContainer,
    MainStack,
    LeftPanel,
    RightPanel,
    LogoWrapper,
    LogoImage,
    LogoText,
    WelcomeWrapper,
    ErrorText,
    LoginButton,
    SignupText,
} from "./Login.styles";
import { useLoginWithEmail } from "../services/api-hooks/user.hook";

const Login = () => {
    const { mutateAsync: loginMutation } = useLoginWithEmail();

    const navigate = useNavigate();

    const {
        handleSubmit,
        register,
        setError,
        formState: { errors },
    } = useForm<LoginFormInputs>({
        defaultValues: {
            email: "",
            password: "",
            remember: false,
        },
        resolver: yupResolver(Loginschema),
    });

    const onSubmit = async (data: LoginFormInputs) => {
        const user = await loginMutation(data);
        if (!user) {
            setError("email", {
                type: "manual",
                message: "Invalid email or password",
            });
            return;
        }
        navigate("/home");
    };

    return (
        <RootContainer>
            <MainStack>
                {/* LEFT PANEL */}
                <LeftPanel>
                    {/* Logo */}
                    <LogoWrapper>
                        <LogoImage src={Logo} alt="Budget Tracker Logo" />
                        <LogoText variant="h5" > Budget Tracker </LogoText>
                    </LogoWrapper>

                    {/* Welcome */}
                    <WelcomeWrapper>
                        <Typography variant="h4" > Welcome Back! </Typography>
                        < Typography variant="body1" color="text.secondary" >
                            Sign in to continue to Budget Tracker
                        </Typography>
                    </WelcomeWrapper>

                    {/* Form */}
                    <Stack component="form" onSubmit={handleSubmit(onSubmit)} spacing={2} >
                        {
                            errors.email && (
                                <ErrorText variant="body2" color="error" >
                                    {errors.email.message}
                                </ErrorText>
                            )}
                        <TextField
                            label="Email"
                            variant="filled"
                            type="email"
                            fullWidth
                            placeholder="text@gmail.com"
                            {...register("email")}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                        <TextField
                            label="Password"
                            variant="filled"
                            fullWidth
                            type="password"
                            placeholder="Enter your password"
                            {...register("password")}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        />

                        {/* Remember + Forgot */}
                        < Stack direction="row" justifyContent="space-between" alignItems="center" >
                            <FormControlLabel
                                control={<Checkbox {...register("remember")} />}
                                label="Remember me"
                            />
                            <Link href="/password-reset" variant="body2" underline="none" color="primary" >
                                Forgot Password ?
                            </Link>
                        </Stack>

                        {/* Button */}
                        <LoginButton type="submit" variant="contained" fullWidth>
                            Login
                        </LoginButton>
                    </Stack>

                    {/* Signup Link */}
                    <SignupText variant="body2" >
                        Don't have an account?{" "}
                        < Link href="/signup" variant="body2" underline="none" >
                            Sign Up
                        </Link>
                    </SignupText>
                </LeftPanel>

                {/* RIGHT PANEL */}
                <RightPanel>
                    <img src={Illustration} alt="Budget Tracker Illustration" />
                </RightPanel>
            </MainStack>
        </RootContainer>
    );
};

export default Login;
