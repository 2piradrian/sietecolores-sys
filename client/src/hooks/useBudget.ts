import { Budget, BudgetProduct, Product } from "@/types/types";
import { useState } from "react";
import useProducts from "./useProducts";

function useBudget() {
	const { products } = useProducts();

	const [budget, setBudget] = useState<Budget>({
		id: "",
		client: "",
		price: 0,
		createdAt: Date.now(),
		products: [],
		total: 0,
	});

	const addProduct = (code: string) => {
		const existingProduct = budget.products.find((product) => product.code === code);

		if (existingProduct) {
			// Si el producto ya existe, aumenta su cantidad en 1
			const newProductList = budget.products.map((product) =>
				product.code === code ? { ...product, quantity: product.quantity + 1 } : product
			);
			setBudget({ ...budget, products: newProductList });
		} else {
			// Si el producto no existe, añádelo con cantidad inicial de 1
			const product = products.find((product) => product.code === code);

			const quantityProduct = {
				code: product!.code,
				name: product!.name,
				weight: product!.weight,
				quantity: 1,
			};
			setBudget({ ...budget, products: [...budget.products, { ...quantityProduct }] });
		}
	};

	const subtractProduct = (code: string) => {
		const newProductList = budget.products
			.map((product) => {
				if (product.code === code) {
					// Restar 1 a la cantidad si es mayor a 1
					if (product.quantity >= 1) {
						return { ...product, quantity: product.quantity - 1 };
					}
				}
				return product;
			})
			.filter((product: BudgetProduct) => product.quantity > 0);

		setBudget({ ...budget, products: newProductList });
	};

	const getTotal = () => {
		let total = 0;
		budget.products.map((product) => {
			total += product.weight * budget.price * product.quantity;
		});
		return total;
	};

	const setPrice = (price: number) => {
		setBudget({ ...budget, price });
	};

	return { products, budget, addProduct, subtractProduct, getTotal, setPrice };
}

export default useBudget;
