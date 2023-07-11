export type Product = {
	id: string;
	name: string;
	type: string;
	size: string;
	weight: number;
};

export type BudgetProduct = {
	code: string;
	name: string;
	quantity: number;
	weight: number;
};

export type Budget = {
	id: string;
	price: number;
	client: string;
	createdAt: number;
	products: BudgetProduct[];
	total: number;
};
