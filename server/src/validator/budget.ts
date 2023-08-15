import { NextFunction, Request, Response } from "express";

export const BudgetValidator = {
	getAll(req: Request, res: Response, next: NextFunction) {
		next();
	},
	getById(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;

		if (!id) {
			return res.status(400).json({ error: "Missing params" });
		}

		next();
	},
	create(req: Request, res: Response, next: NextFunction) {
		const { budget } = req.body;

		if (!budget) {
			return res.status(400).json({ error: "Missing params" });
		}

		if (!budget.products || !budget.products.length) {
			return res.status(400).json({ error: "Missing products" });
		}

		if (!budget.price) {
			return res.status(400).json({ error: "Missing price" });
		}

		next();
	},
};
