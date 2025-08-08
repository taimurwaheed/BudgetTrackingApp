import { createContext, useContext, useState, type ReactNode } from "react";
import type { UserContextType } from "../types/user.types";
import type { User } from "../types/user.types";

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error("useUserContext must be used within UserProvider");
    return context;
};
