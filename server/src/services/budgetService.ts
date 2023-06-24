import { PrismaClient, Budget } from "@prisma/client";

const prisma = new PrismaClient();

export const BudgetService = {
	async getAllBudgets(): Promise<Budget[]> {
		return await prisma.budget.findMany();
	},
	async getBudgetById(id: number): Promise<Budget | null> {
		return await prisma.budget.findUnique({
			where: {
				id,
			},
		});
	},
	async createBudget(budget: Budget): Promise<Budget> {
		return await prisma.budget.create({
			data: budget,
		});
	},
	async updateBudget(id: number, createdBudgetProducts: Budget[]): Promise<Budget> {
		return await prisma.budget.update({
			where: {
				id,
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
	async deleteBudget(id: number): Promise<Budget> {
		return await prisma.budget.delete({
			where: {
				id,
			},
		});
	},
};
