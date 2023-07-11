import { BudgetProduct } from "../data/types";
import { Request, Response } from "express";
import { BudgetService } from "../services/budgetService";

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
		const budget = req.body;

		console.log(budget);

		let total = 0;

		budget.products.map((product: BudgetProduct) => {
			total += product.weight * budget.price * product.quantity;
		});

		budget.total = total;

		delete budget.id;

		const newBudget = await BudgetService.createBudget(budget);

		res.json(newBudget);
	},
};
