import React, { useState } from "react";
import style from "./style.module.css";
import useProducts from "@/hooks/useProducts";
import ProductBudgetTable from "@/components/BudgetTable/ProductBudgetTable";
import BudgetTable from "@/components/BudgetTable/BudgetTable";
import Title from "@/components/Title/Title";
import { QuantityProduct } from "@/types/types";

function BudgetSection() {
	const { products } = useProducts();
	const [state, setState] = useState<QuantityProduct[]>([]);
	const [price, setPrice] = useState<number>(0);

	const addProduct = (id: string) => {
		const existingProduct = state.find((product) => product.id === id);

		if (existingProduct) {
			// Si el producto ya existe, aumenta su cantidad en 1
			setState((prevState) =>
				prevState.map((product) =>
					product.id === id ? { ...product, quantity: product.quantity + 1 } : product
				)
			);
		} else {
			// Si el producto no existe, añádelo con cantidad inicial de 1
			const product = products.find((product) => product.id === id);
			const quantityProduct = {
				id: product!.id,
				code: product!.code,
				name: product!.name,
				weight: product!.weight,
				quantity: 1,
			};

			setState((prevState) => [...prevState, { ...quantityProduct }]);
		}
	};

	const subtractProduct = (id: string) => {
		setState((prevState) =>
			prevState
				.map((product) => {
					if (product.id === id) {
						// Restar 1 a la cantidad si es mayor a 1
						if (product.quantity >= 1) {
							return { ...product, quantity: product.quantity - 1 };
						}
					}
					return product;
				})
				.filter((product) => product.quantity > 0)
		);
	};

	const getTotal = () => {
		let total = 0;
		state.map((product) => {
			total += product.weight * price * product.quantity;
		});
		return total;
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { value } = e.currentTarget[0] as HTMLInputElement;
		setPrice(Number(value));
	};

	return (
		<div className="bigcontainer">
			<Title title="Presupuesto" />
			<form onSubmit={handleSubmit}>
				<input type="number" placeholder="Precio del gramo" className={style.input} />
			</form>
			<div className="rowbigcontainer">
				<div className={style.tablecontainer}>
					<ProductBudgetTable
						products={products}
						onClick={(id: string) => addProduct(id)}
					/>
				</div>
				<div className={style.tablecontainer}>
					<BudgetTable
						products={state}
						price={price}
						onClick={(id: string) => subtractProduct(id)}
					/>
				</div>
			</div>
			<p className={style.total}>Total: {getTotal()}</p>
		</div>
	);
}

export default BudgetSection;
