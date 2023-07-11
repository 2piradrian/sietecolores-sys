import { BudgetProduct } from "@/types/types";
import useBudget from "./useBudget";

function useStadistics() {
	const { budgetList: budgets } = useBudget();

	// Cantidad de productos vendidos en el mes
	const productsSoldInMonth = budgets.reduce((count, budget) => {
		return (
			count +
			budget.products.reduce((productCount, product) => {
				return productCount + product.quantity;
			}, 0)
		);
	}, 0);

	// Cantidad de gramos vendidos en el mes
	const gramsSoldInMonth = budgets.reduce((count, budget) => {
		return (
			count +
			budget.products.reduce((gramsCount, product) => {
				return gramsCount + product.quantity * product.weight;
			}, 0)
		);
	}, 0);

	// Producto más vendido del mes
	const soldProductsInMonth = budgets.flatMap((budget) => budget.products);

	const productSoldMostInMonth = soldProductsInMonth.reduce(
		(mostSoldProduct: BudgetProduct | null, product) => {
			if (!mostSoldProduct || product.quantity > mostSoldProduct.quantity) {
				return product;
			}
			return mostSoldProduct;
		},
		null
	);

	// Producto más vendido del año
	const productSoldMostInYear = soldProductsInMonth.reduce(
		(mostSoldProduct: BudgetProduct | null, product) => {
			if (!mostSoldProduct || product.quantity > mostSoldProduct.quantity) {
				return product;
			}
			return mostSoldProduct;
		},
		null
	);

	// Top 10 de productos más vendidos en el año
	const productSalesByYear: Record<string, number> = soldProductsInMonth.reduce(
		(salesByProduct: Record<string, number>, product) => {
			if (!salesByProduct[product.code]) {
				salesByProduct[product.code] = 0;
			}
			salesByProduct[product.code] += product.quantity;
			return salesByProduct;
		},
		{}
	);

	const top10ProductsByYear = Object.entries(productSalesByYear)
		.sort((a, b) => b[1] - a[1])
		.slice(0, 5)
		.map(([code, sales]) => ({ code, sales }));

	// Top 10 de productos más vendidos en el mes
	const productSalesByMonth: Record<string, number> = soldProductsInMonth.reduce(
		(salesByProduct: Record<string, number>, product) => {
			if (!salesByProduct[product.code]) {
				salesByProduct[product.code] = 0;
			}
			salesByProduct[product.code] += product.quantity;
			return salesByProduct;
		},
		{}
	);

	const top10ProductsByMonth = Object.entries(productSalesByMonth)
		.sort((a, b) => b[1] - a[1])
		.slice(0, 5)
		.map(([code, sales]) => ({ code, sales }));

	// Devuelve las estadísticas o cualquier otro valor que desees exponer como resultado del hook
	return {
		productsSoldInMonth,
		gramsSoldInMonth,
		productSoldMostInMonth,
		productSoldMostInYear,
		top10ProductsByYear,
		top10ProductsByMonth,
	};
}

export default useStadistics;
