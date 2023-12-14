import { Request, Response } from "express";

import { ErrorType } from "../error/ErrorType";
import { ProductService } from "../services/product";

export const ProductController = {
	async getAll(req: Request, res: Response) {
		try {
			const products = await ProductService.getAll();
			return res.json(products || []);
		} catch (err) {
			return res.status(500).json({ message: ErrorType.internalError });
		}
	},
	async getById(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const product = await ProductService.getById(id);
			return res.json(product || {});
		} catch (err) {
			return res.status(500).json({ message: ErrorType.internalError });
		}
	},
	async create(req: Request, res: Response) {
		try {
			const product = req.body;
			const newProduct = await ProductService.create(product);
			return res.json(newProduct || {});
		} catch (err) {
			return res.status(500).json({ message: ErrorType.internalError });
		}
	},
	async update(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const product = req.body;
			const updatedProduct = await ProductService.update(id, product);
			return res.json(updatedProduct || {});
		} catch (err) {
			return res.status(500).json({ message: ErrorType.internalError });
		}
	},
	async delete(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const deletedProduct = await ProductService.delete(id);
			return res.json(deletedProduct || {});
		} catch (err) {
			return res.status(500).json({ message: ErrorType.internalError });
		}
	},
};
