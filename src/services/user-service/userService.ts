import type { User } from '../../types/user.types';
import { ApiClient } from '../api-client/apiClient';

export class UserService {
    private client: ApiClient;

    constructor(client: ApiClient) {
        this.client = client;
    }

    async signupUser(data: { firstName?: string; lastName?: string; email: string; password: string; budget?: string }): Promise<User> {
        try {
            const users: User[] = await this.client.get(`/users?email=${data.email}`);

            if (users.length > 0) {
                throw new Error('Email already registered');
            }
            const newUser = { ...data };
            return await this.client.post('/users', newUser);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async loginUser(email: string, password: string): Promise<User | null> {
        try {
            const users: User[] = await this.client.get(`/users?email=${email}&password=${password}`);

            if (users.length > 0) {
                return users[0];
            }
            return null;
        } catch (error) {
            console.error('Login failed:', error);
            return null;
        }
    }

    async findUserByEmail(email: string): Promise<User | null> {
        const users: User[] = await this.client.get(`/users?email=${email}`);
        return users.length > 0 ? users[0] : null;
    }

    async getAllUsers(): Promise<User[]> {
        return await this.client.get('/users');
    }

    async getUser(id: string): Promise<User | null> {
        try {
            return await this.client.get(`/users/${id}`);
        } catch (error) {
            console.error('User not found:', error);
            return null;
        }
    }
}
