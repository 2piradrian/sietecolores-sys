import { BudgetProduct } from "../data/types";
import { Request, Response } from "express";
import { BudgetService } from "../services/budget";

export const BudgetController = {
	async getAll(req: Request, res: Response) {
		const budgets = await BudgetService.getAll();
		res.json(budgets || []);
	},
	async getById(req: Request, res: Response) {
		const { id } = req.params;
		const budget = await BudgetService.getById(id);
		res.json(budget || {});
	},
	async create(req: Request, res: Response) {
		const budget = req.body;

		let total = 0;

		budget.products.map((product: BudgetProduct) => {
			total += product.weight * budget.price * product.quantity;
		});

		budget.total = total;

		delete budget.id;

		const newBudget = await BudgetService.create(budget);

		res.json(newBudget);
	},
	async delete(req: Request, res: Response) {
		const { id } = req.params;
		const deletedBudget = await BudgetService.delete(id);
		res.json(deletedBudget);
	},
};
