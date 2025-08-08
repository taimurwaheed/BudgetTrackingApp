export type User = {
    name: string;
    email: string;
} | null;

export type UserContextType = {
    user: User;
    setUser: (user: User) => void;
};