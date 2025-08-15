import { UserService } from "../services/user-service/userService";

export type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    budget?: string;
} | null;

export type UserContextType = {
    user: any;
    login: (user: any) => void;
    logout: () => void;
};

export interface AppContextType {
    userService: UserService;
}