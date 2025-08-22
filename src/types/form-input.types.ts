import * as yup from "yup";
import type { ExpenseSchema, Loginschema, ResetPasswordSchema, Signupschema } from "../utils/schemas";

export type LoginFormInputs = yup.InferType<typeof Loginschema>;

export type SignUpFormInputs = yup.InferType<typeof Signupschema>;

export type ExpenseFormInputs = yup.InferType<typeof ExpenseSchema>;

export type ResetPasswordFormData = yup.InferType<typeof ResetPasswordSchema>;
