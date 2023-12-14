import { Request, Response } from "express";

import { BudgetProduct } from "../data/types";
import { BudgetService } from "../services/budget";
import { ErrorType } from "../error/ErrorType";

export const BudgetController = {
	async getAll(req: Request, res: Response) {
		try {
			const budgets = await BudgetService.getAll();
			return res.json(budgets || []);
		} catch (err) {
			return res.status(500).json({ message: ErrorType.internalError });
		}
	},
	async getById(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const budget = await BudgetService.getById(id);
			return res.json(budget || {});
		} catch (err) {
			return res.status(500).json({ message: ErrorType.internalError });
		}
	},
	async create(req: Request, res: Response) {
		try {
			const { budget } = req.body;

			let total = 0.0;

			budget.products.map((product: BudgetProduct) => {
				total += product.weight * budget.price * product.quantity;
			});

			budget.total = parseFloat(total.toFixed(2));

			delete budget.id;

			const newBudget = await BudgetService.create(budget);

			return res.status(200).json(newBudget);
		} catch (err) {
			return res.status(500).json({ message: ErrorType.internalError });
		}
	},
	async delete(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const deletedBudget = await BudgetService.delete(id);
			res.json(deletedBudget);
		} catch (err) {
			return res.status(500).json({ message: ErrorType.internalError });
		}
	},
};
