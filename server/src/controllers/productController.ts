import { Request, Response } from "express";
import { ProductService } from "../services/productService";

export const ProductController = {
	async getAllProducts(req: Request, res: Response) {
		const products = await ProductService.getAllProducts();
		console.log(products);
		res.json(products || []);
	},
	async getProductById(req: Request, res: Response) {
		const { id } = req.params;
		const product = await ProductService.getProductById(id);
		res.json(product || {});
	},
	async createProduct(req: Request, res: Response) {
		const product = req.body;
		const newProduct = await ProductService.createProduct(product);
		res.json(newProduct || {});
	},
	async updateProduct(req: Request, res: Response) {
		const { id } = req.params;
		const product = req.body;
		const updatedProduct = await ProductService.updateProduct(id, product);
		res.json(updatedProduct || {});
	},
	async deleteProduct(req: Request, res: Response) {
		const { id } = req.params;
		const deletedProduct = await ProductService.deleteProduct(id);
		res.json(deletedProduct || {});
	},
};
