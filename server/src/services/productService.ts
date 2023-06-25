import { Products, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ProductService = {
	async getAllProducts(): Promise<Products[]> {
		return await prisma.products.findMany();
	},
	async getProductById(id: string): Promise<Products | null> {
		return await prisma.products.findUnique({
			where: {
				id,
			},
		});
	},
	async createProduct(product: Products): Promise<Products> {
		return await prisma.products.create({
			data: product,
		});
	},
	async updateProduct(id: string, product: Products): Promise<Products> {
		return await prisma.products.update({
			where: {
				id,
			},
			data: product,
		});
	},
	async deleteProduct(id: string): Promise<Products> {
		return await prisma.products.delete({
			where: {
				id,
			},
		});
	},
};
