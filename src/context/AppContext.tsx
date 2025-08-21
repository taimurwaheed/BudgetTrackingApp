import React, { createContext, useContext, useState } from "react";
import { ApiClient } from "../services/api-client/apiClient";
import { UserService } from "../services/user-service/userService";
import { ExpenseService } from "../services/expense-service/expenseService";
import type { AppContextType, User } from "../types/user.types";

// Create instances of services outside the component
const apiClient = new ApiClient("https://68870c64071f195ca97f0584.mockapi.io");
const userService = new UserService(apiClient);
const expenseService = new ExpenseService(apiClient);

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    return (
        <AppContext.Provider
            value={{ userService, expenseService, currentUser, setCurrentUser }
            }
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};