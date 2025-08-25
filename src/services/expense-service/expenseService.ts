import { ApiClient } from '../api-client/apiClient';
import type { Expense } from '../../types/expense.types';

export class ExpenseService {
    private client: ApiClient;

    constructor(client: ApiClient) {
        this.client = client;
    }

    async getExpensesByUserId(userId: string): Promise<Expense[]> {
        return this.client.get(`/expenses?userId=${userId}`);
    }

    async getAllExpenses(): Promise<Expense[]> {
        return this.client.get(`/expenses`);
    }

    async addExpense(expense: Omit<Expense, "expenseId">): Promise<Expense> {
        return await this.client.post('/expenses', expense);
    }

    async updateExpense(expenseId: string, updatedExpense: Partial<Expense>): Promise<Expense> {
        return await this.client.put(`/expenses/${expenseId}`, updatedExpense);
    }

    async deleteExpense(expenseId: string) {
        return await this.client.delete(`/expenses/${expenseId}`);
    }
}
