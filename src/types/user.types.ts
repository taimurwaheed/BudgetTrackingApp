import { UserService } from "../services/user-service/userService";
import { ExpenseService } from "../services/expense-service/expenseService";

export type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    budget?: string;
} | null;

export interface AppContextType {
    userService: UserService;
    expenseService: ExpenseService;
    currentUser?: User
    setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;

}

export interface UserAuth {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
    isLoadingUser: boolean;
}