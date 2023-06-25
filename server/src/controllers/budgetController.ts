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
		const { budgetProducts, client, total } = req.body;

		const createdBudgetProducts = await Promise.all(
			budgetProducts.map(async (budgetProduct: BudgetProduct) => {
				return await BudgetProductService.createBudgetProduct(budgetProduct);
			})
		);

		const newBudget = await BudgetService.createBudget({
			client: client,
			total: total,
			createdAt: new Date(),
			id: "",
		});

		await BudgetService.updateBudget(newBudget.id, createdBudgetProducts);

		res.json(newBudget || {});
	},
};
