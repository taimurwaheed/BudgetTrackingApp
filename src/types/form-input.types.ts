import * as yup from "yup";
import { ExpenseSchema, Loginschema, ResetPasswordSchema, Signupschema } from "../utils/schemas";

// Ensure all fields are treated as required in TS to align with Yup schemas
export type LoginFormInputs = Required<yup.InferType<typeof Loginschema>>;

export type SignUpFormInputs = Required<yup.InferType<typeof Signupschema>>;

export type ExpenseFormInputs = Required<yup.InferType<typeof ExpenseSchema>>;

export type ResetPasswordFormData = Required<yup.InferType<typeof ResetPasswordSchema>>;
