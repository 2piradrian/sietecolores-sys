import { PrismaClient, BudgetProduct } from "@prisma/client";

const prisma = new PrismaClient();

export const BudgetProductService = {
	async getAllBudgetProducts(): Promise<BudgetProduct[]> {
		return await prisma.budgetProduct.findMany();
	},
	async getBudgetProductById(id: number): Promise<BudgetProduct | null> {
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
	async deleteBudgetProduct(id: number): Promise<BudgetProduct> {
		return await prisma.budgetProduct.delete({
			where: {
				id,
			},
		});
	},
};
