import {
    Typography,
    Link,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
} from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import SignupImg from "../assets/images/SignupImg.png";
import Logo from "../assets/images/Logo.png";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import type { SignUpFormInputs } from "../types/validationSchemas";
import {
    Root,
    Wrapper,
    LeftPanel,
    LogoWrapper,
    LogoImg,
    LogoText,
    WelcomeBox,
    Title,
    Form,
    ErrorText,
    SubmitButton,
    BottomText,
    RightPanel,
    Illustration,
} from "./Signup.styles";
import { useSignUp } from "../services/api-hooks/user.hook";


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const { mutateAsync: signUpMutation } = useSignUp();

    const {
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm<SignUpFormInputs>({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            budget: "0",
        },
    });

    const onSubmit = async (data: SignUpFormInputs) => {
        setError("");
        try {
            await signUpMutation(data);
            navigate("/login");
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <Root>
            <Wrapper>
                {/* LEFT PANEL */}
                <LeftPanel>
                    {/* Logo */}
                    <LogoWrapper>
                        <LogoImg src={Logo} alt="Budget Tracker Logo" />
                        <LogoText variant="h5" > Budget Tracker </LogoText>
                    </LogoWrapper>

                    {/* Welcome */}
                    <WelcomeBox>
                        <Title variant="h4" > Sign Up </Title>
                        < Typography variant="body1" color="text.secondary" >
                            Welcome to our community
                        </Typography>
                    </WelcomeBox>

                    {/* FORM */}
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        {error && <ErrorText color="error" > {error} </ErrorText>
                        }

                        {/* First/Last Name */}
                        <Stack direction="row" spacing={2} >
                            <Controller
                                name="firstName"
                                control={control}
                                rules={{ required: "First name is required" }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="First Name"
                                        fullWidth
                                        error={!!errors.firstName}
                                        helperText={errors.firstName?.message}
                                    />
                                )}
                            />
                            < Controller
                                name="lastName"
                                control={control}
                                rules={{ required: "Last name is required" }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Last Name"
                                        fullWidth
                                        error={!!errors.lastName}
                                        helperText={errors.lastName?.message}
                                    />
                                )}
                            />
                        </Stack>

                        {/* Email */}
                        <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Enter a valid email",
                                },
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Email"
                                    fullWidth
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                />
                            )}
                        />

                        {/* Password */}
                        <Controller
                            name="password"
                            control={control}
                            rules={{
                                required: "Password is required",
                                minLength: { value: 6, message: "At least 6 characters" },
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Password"
                                    type={showPassword ? "text" : "password"}
                                    fullWidth
                                    error={!!errors.password}
                                    helperText={errors.password?.message}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end" >
                                                <IconButton onClick={() => setShowPassword((s) => !s)}>
                                                    {showPassword ? <Visibility /> : <VisibilityOff />
                                                    }
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            )}
                        />

                        {/* Confirm Password */}
                        <Controller
                            name="confirmPassword"
                            control={control}
                            rules={{
                                required: "Please confirm your password",
                                validate: (value) =>
                                    value === watch("password") || "Passwords do not match",
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Confirm Password"
                                    type={showConfirmPassword ? "text" : "password"}
                                    fullWidth
                                    error={!!errors.confirmPassword}
                                    helperText={errors.confirmPassword?.message}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end" >
                                                <IconButton
                                                    onClick={() => setShowConfirmPassword((s) => !s)}
                                                >
                                                    {
                                                        showConfirmPassword ? (
                                                            <Visibility />
                                                        ) : (
                                                            <VisibilityOff />
                                                        )
                                                    }
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            )}
                        />

                        {/* Budget */}
                        <Controller
                            name="budget"
                            control={control}
                            rules={{
                                required: "Budget is required",
                                min: { value: 1, message: "Budget must be greater than 0" },
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Budget Limit"
                                    type="number"
                                    fullWidth
                                    error={!!errors.budget}
                                    helperText={errors.budget?.message}
                                />
                            )}
                        />

                        {/* Submit */}
                        <SubmitButton type="submit" variant="contained" fullWidth >
                            SIGN UP
                        </SubmitButton>
                    </Form>

                    {/* Login link */}
                    <BottomText variant="body2" >
                        Already have an account ? {" "}
                        < Link href="/login" variant="body2" underline="none" >
                            Log In
                        </Link>
                    </BottomText>
                </LeftPanel>

                {/* RIGHT PANEL */}
                <RightPanel>
                    <Illustration src={SignupImg} alt="Sign Up Illustration" />
                </RightPanel>
            </Wrapper>
        </Root>
    );
};

export default SignUp;