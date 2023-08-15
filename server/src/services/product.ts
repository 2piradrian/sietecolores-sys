import { Products, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ProductService = {
	async getAll(): Promise<Products[]> {
		return await prisma.products.findMany();
	},
	async getById(id: string): Promise<Products | null> {
		return await prisma.products.findUnique({
			where: {
				id,
			},
		});
	},
	async create(product: Products): Promise<Products> {
		return await prisma.products.create({
			data: product,
		});
	},
	async update(id: string, product: Products): Promise<Products> {
		return await prisma.products.update({
			where: {
				id,
			},
			data: product,
		});
	},
	async delete(id: string): Promise<Products> {
		return await prisma.products.delete({
			where: {
				id,
			},
		});
	},
};
