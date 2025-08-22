import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { User } from "../../types/user.types";
import { useAppContext } from "../../context/AppContext";
import { userKey } from "../../utils/userKey";

export const useSignUp = () => {
    const { userService } = useAppContext();

    return useMutation({
        mutationKey: ["signupUser"],
        mutationFn: async (data: {
            firstName: string;
            lastName: string;
            email: string;
            password: string;
            budget?: string;
        }) => {
            const newUser = await userService.signupUser(data);
            return newUser;
        },
    });
};

export const useLoginWithEmail = () => {
    const queryClient = useQueryClient();
    const { userService } = useAppContext();

    return useMutation({
        mutationKey: ["loginWithEmail"],
        mutationFn: async (data: { email: string; password: string }) => {
            const response: User = await userService.loginUser(data.email, data.password);

            if (response) {
                localStorage.setItem(userKey, response.id);
                queryClient.invalidateQueries({ queryKey: ["currentUser"] });
            }

            return response;
        }
    });
};

export const useCurrentUser = () => {
    const { userService } = useAppContext();
    const userId = localStorage.getItem(userKey);

    return useQuery<User | null>({
        queryKey: ["currentUser", userId],
        queryFn: async () => {
            if (!userId) return null;
            const user = await userService.getUser(userId);
            return user;
        }
    });
};

export const useLogout = () => {
    const queryClient = useQueryClient();
    return () => {
        localStorage.removeItem(userKey);
        queryClient.removeQueries({ queryKey: ["currentUser"] });
    };
};
