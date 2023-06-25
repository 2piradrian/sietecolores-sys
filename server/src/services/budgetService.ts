import { PrismaClient, Budget } from "@prisma/client";

const prisma = new PrismaClient();

export const BudgetService = {
	async getAllBudgets(): Promise<Budget[]> {
		return await prisma.budget.findMany();
	},
	async getBudgetById(id: string): Promise<Budget | null> {
		return await prisma.budget.findUnique({
			where: {
				id,
			},
			include: {
				products: true,
			},
		});
	},
	async createBudget(budget: any): Promise<Budget> {
		return await prisma.budget.create({
			data: budget,
		});
	},
	async updateBudget(id: string, createdBudgetProducts: Budget[]): Promise<Budget> {
		return await prisma.budget.update({
			where: {
				id,
			},
			include: {
				products: true,
			},
			data: {
				products: {
					connect: createdBudgetProducts.map((product) => ({
						id: product.id,
					})),
				},
			},
		});
	},
	async deleteBudget(id: string): Promise<Budget> {
		return await prisma.budget.delete({
			where: {
				id,
			},
		});
	},
};
