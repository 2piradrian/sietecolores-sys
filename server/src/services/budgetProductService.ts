import { PrismaClient, BudgetProduct } from "@prisma/client";

const prisma = new PrismaClient();

export const BudgetProductService = {
	async getAllBudgetProducts(): Promise<BudgetProduct[]> {
		return await prisma.budgetProduct.findMany();
	},
	async getBudgetProductById(id: string): Promise<BudgetProduct | null> {
		return await prisma.budgetProduct.findUnique({
			where: {
				id,
			},
		});
	},
	async createBudgetProduct(budgetProduct: BudgetProduct): Promise<BudgetProduct> {
		return await prisma.budgetProduct.create({
			data: budgetProduct,
		});
	},
	async deleteBudgetProduct(id: string): Promise<BudgetProduct> {
		return await prisma.budgetProduct.delete({
			where: {
				id,
			},
		});
	},
};
