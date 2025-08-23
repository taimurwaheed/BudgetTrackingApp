import * as yup from "yup";

export const Loginschema = yup.object({
    email: yup.string().email("Enter a valid email").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    remember: yup.boolean().default(false),
});

export const Signupschema = yup.object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Enter a valid email").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords do not match').required('Please confirm your password'),
    budget: yup.string().required("Budget is required").min(1, "Budget must be greater than 0"),
});

export const ExpenseSchema = yup.object({
    title: yup.string().required("Title is required"),
    price: yup
        .number()
        .typeError("Price must be a number")
        .positive("Price must be positive")
        .required("Price is required"),
    date: yup.date().required("Date is required"),
});

export const ResetPasswordSchema = yup.object({
    email: yup.string().email("Enter a valid email").required("Email is required"),
});