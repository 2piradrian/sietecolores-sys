import { Product } from "./../data/types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ProductService = {
	async getAllProducts(): Promise<Product[]> {
		return await prisma.product.findMany();
	},
	async getProductById(id: string): Promise<Product | null> {
		return await prisma.product.findUnique({
			where: {
				id,
			},
		});
	},
	async createProduct(product: Product): Promise<Product> {
		return await prisma.product.create({
			data: product,
		});
	},
	async updateProduct(id: string, product: Product): Promise<Product> {
		return await prisma.product.update({
			where: {
				id,
			},
			data: product,
		});
	},
};
