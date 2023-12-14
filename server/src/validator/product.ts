import { NextFunction, Request, Response } from "express";

import { ErrorType } from "../error/ErrorType";

export const ProductValidator = {
	create(req: Request, res: Response, next: NextFunction) {
		try {
			const { name, weight, size, code, type } = req.body;
			if (!name || !weight || !size || !code || !type) {
				return res.status(400).json({ error: ErrorType.missingFields });
			}
			next();
		} catch (err) {
			return res.status(500).json({ error: ErrorType.internalError });
		}
	},
	update(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params;
			if (!id) {
				return res.status(400).json({ error: ErrorType.missingFields });
			}
			const { name, weight, size, code, type } = req.body;
			if (!name || !weight || !size || !code || !type) {
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
	getAll(req: Request, res: Response, next: NextFunction) {
		next();
	},
};
