import { Request, Response } from "express";
import { BudgetService } from "../services/budgetService";
import { BudgetProductService } from "../services/budgetProductService";
import { BudgetProduct } from "@prisma/client";

export const BudgetController = {
	async getAllBudgets(req: Request, res: Response) {
		const budgets = await BudgetService.getAllBudgets();
		res.json(budgets || []);
	},
	async getBudgetById(req: Request, res: Response) {
		const { id } = req.params;
		const budget = await BudgetService.getBudgetById(id);
		res.json(budget || {});
	},
	async createBudget(req: Request, res: Response) {
		const { products, client } = req.body;

		const total = products.reduce((acc: number, curr: any) => {
			return acc + curr.price * curr.quantity;
		}, 0);

		const newBudget = await BudgetService.createBudget({
			client: client,
			total: Number(total),
			createdAt: new Date(),
		});

		const createdBudgetProducts = await Promise.all(
			products.map(async (budgetProduct: BudgetProduct) => {
				budgetProduct.budgetId = newBudget.id;
				return await BudgetProductService.createBudgetProduct(budgetProduct);
			})
		);

		const finalBudget = await BudgetService.updateBudget(newBudget.id, createdBudgetProducts);

		res.json(finalBudget || {});
	},
};
