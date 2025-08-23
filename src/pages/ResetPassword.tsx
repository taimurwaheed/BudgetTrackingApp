import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
import type { ResetPasswordFormData } from "../types/form-input.types";
import { ResetPasswordSchema } from "../utils/schemas";

const ResetPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ResetPasswordFormData>({
        resolver: yupResolver(ResetPasswordSchema),
    });

    const onSubmit = async (data: ResetPasswordFormData) => {
        console.log("Reset password request:", data);
    };

    return (
        <PageContainer>
            <LayoutStack direction={{ xs: "column-reverse", md: "row" }}>
                <LeftColumn>
                    <LogoRow direction="row" spacing={2} alignItems="center">
                        <LogoImage src={Logo} alt="App Logo" />
                        <AppName variant="h5">Budget Tracker</AppName>
                    </LogoRow>

                    <HeadingBox>
                        <Heading variant="h4">Reset Password</Heading>
                        <SubHeading variant="body1">Enter your email for a reset link</SubHeading>
                    </HeadingBox>

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

                    <SignUpText variant="body2">
                        Don&apos;t have an account?{" "}
                        <SignUpLink href="/signup" variant="body2" underline="none">
                            Sign Up
                        </SignUpLink>
                    </SignUpText>
                </LeftColumn>

                <IllustrationBox>
                    <IllustrationImage src={Illustration} alt="Reset Password Illustration" />
                </IllustrationBox>
            </LayoutStack>
        </PageContainer>
    );
};

export default ResetPassword;
