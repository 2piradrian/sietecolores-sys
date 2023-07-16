import { Request, Response } from "express";
import { ProductService } from "../services/productService";

export const ProductController = {
	async getAll(req: Request, res: Response) {
		const products = await ProductService.getAll();
		return res.json(products || []);
	},
	async getById(req: Request, res: Response) {
		const { id } = req.params;
		const product = await ProductService.getById(id);
		return res.json(product || {});
	},
	async create(req: Request, res: Response) {
		const product = req.body;
		const newProduct = await ProductService.create(product);
		return res.json(newProduct || {});
	},
	async update(req: Request, res: Response) {
		const { id } = req.params;
		const product = req.body;
		const updatedProduct = await ProductService.update(id, product);
		return res.json(updatedProduct || {});
	},
	async delete(req: Request, res: Response) {
		const { id } = req.params;
		const deletedProduct = await ProductService.delete(id);
		return res.json(deletedProduct || {});
	},
};
