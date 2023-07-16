import { NextFunction, Request, Response } from "express";

export const ProductValidator = {
	create(req: Request, res: Response, next: NextFunction) {
		const { name, weight, size, code, type } = req.body;
		if (!name || !weight || !size || !code || !type) {
			return res.status(400).json({ error: "Missing params" });
		}
		next();
	},
	update(req: Request, res: Response, next: NextFunction) {
		const { name, price, weight, size } = req.body;
		if (!name || !price || !weight || !size) {
			return res.status(400).json({ error: "Missing params" });
		}
		next();
	},
	delete(req: Request, res: Response, next: NextFunction) {
		next();
	},
	getById(req: Request, res: Response, next: NextFunction) {
		next();
	},
	getAll(req: Request, res: Response, next: NextFunction) {
		next();
	},
};
