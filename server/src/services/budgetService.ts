import { PrismaClient, Budget } from "@prisma/client";

const prisma = new PrismaClient();

export const BudgetService = {
	async getAll(): Promise<Budget[]> {
		return await prisma.budget.findMany();
	},
	async getById(id: string): Promise<Budget | null> {
		return await prisma.budget.findUnique({
			where: {
				id,
			},
		});
	},
	async create(budget: any): Promise<Budget> {
		return await prisma.budget.create({
			data: budget,
		});
	},
	async delete(id: string): Promise<Budget> {
		return await prisma.budget.delete({
			where: {
				id,
			},
		});
	},
};
