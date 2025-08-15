import React, { createContext, useContext } from 'react';
import { ApiClient } from '../services/api-client/apiClient';
import { UserService } from '../services/user-service/userService';
import type { AppContextType } from '.././types/user.types';

const apiClient = new ApiClient('https://68870c64071f195ca97f0584.mockapi.io');
const userService = new UserService(apiClient);

const UserContext = createContext<AppContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <UserContext.Provider value={{ userService }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = (): AppContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
