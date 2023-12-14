import { NextFunction, Request, Response } from "express";

import { ErrorType } from "../error/ErrorType";

export const BudgetValidator = {
	getAll(req: Request, res: Response, next: NextFunction) {
		next();
	},
	getById(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params;
			if (!id) {
				return res.status(400).json({ error: ErrorType.missingFields });
			}
			next();
		} catch (err) {
			return res.status(500).json({ error: ErrorType.internalError });
		}
	},
	create(req: Request, res: Response, next: NextFunction) {
		try {
			const { budget } = req.body;

			if (budget === undefined) {
				return res.status(400).json({ error: ErrorType.missingFields });
			}

			if (budget.products === undefined || !budget.products.length) {
				return res.status(400).json({ error: ErrorType.missingFields });
			}

			if (!budget.price) {
				return res.status(400).json({ error: ErrorType.missingFields });
			}
			next();
		} catch (err) {
			return res.status(500).json({ error: ErrorType.internalError });
		}
	},
	delete(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params;
			if (!id) {
				return res.status(400).json({ error: ErrorType.missingFields });
			}
			next();
		} catch (err) {
			return res.status(500).json({ error: ErrorType.internalError });
		}
	},
};
