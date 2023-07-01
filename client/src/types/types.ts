export type Product = {
	id: string;
	code: string;
	name: string;
	type: string;
	size: string;
	weight: number;
};

export type ProductForm = {
	code: string;
	name: string;
	type: string;
	size: string;
	weight: number;
};

export type BudgetProduct = {
	id: string;
	price: number;
	quantity: number;
	product: Product;
	budget: Budget;
};

export type Budget = {
	id: string;
	client: string;
	createAt: Date;
	products: Product[];
	total: number;
};
