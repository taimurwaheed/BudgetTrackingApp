import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// ⬇️ Import images here
import Logo from "../assets/images/Logo.png";
import Illustration from "../assets/images/Illustration.png";

import {
    PageContainer,
    LayoutStack,
    LeftColumn,
    LogoRow,
    IllustrationBox,
    Form,
    LogoImage,
    AppName,
    HeadingBox,
    Heading,
    SubHeading,
    SubmitButton,
    SignUpText,
    SignUpLink,
    IllustrationImage,
} from "./ResetPassword.styles";

// ✅ Validation schema with Yup
const schema = yup.object({
    email: yup.string().email("Enter a valid email").required("Email is required"),
});

type ResetPasswordFormData = yup.InferType<typeof schema>;

const ResetPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ResetPasswordFormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: ResetPasswordFormData) => {
        console.log("Reset password request:", data);
    };

    return (
        <PageContainer>
            <LayoutStack direction={{ xs: "column-reverse", md: "row" }}>
                {/* Left column: Form */}
                <LeftColumn>
                    {/* Logo and App Name */}
                    <LogoRow direction="row" spacing={2} alignItems="center">
                        {/* ✅ pass imported image as src */}
                        <LogoImage src={Logo} alt="App Logo" />
                        <AppName variant="h5">Budget Tracker</AppName>
                    </LogoRow>

                    {/* Text */}
                    <HeadingBox>
                        <Heading variant="h4">Reset Password</Heading>
                        <SubHeading variant="body1">Enter your email for a reset link</SubHeading>
                    </HeadingBox>

                    {/* Form */}
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            label="Email"
                            variant="filled"
                            fullWidth
                            placeholder="text@gmail.com"
                            {...register("email")}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />

                        <SubmitButton type="submit" variant="contained" fullWidth disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Send Reset Password Link"}
                        </SubmitButton>
                    </Form>

                    {/* Sign Up Link */}
                    <SignUpText variant="body2">
                        Don&apos;t have an account?{" "}
                        <SignUpLink href="/signup" variant="body2" underline="none">
                            Sign Up
                        </SignUpLink>
                    </SignUpText>
                </LeftColumn>

                {/* Right column: Illustration */}
                <IllustrationBox>
                    {/* ✅ pass imported image as src */}
                    <IllustrationImage src={Illustration} alt="Reset Password Illustration" />
                </IllustrationBox>
            </LayoutStack>
        </PageContainer>
    );
};

export default ResetPassword;
