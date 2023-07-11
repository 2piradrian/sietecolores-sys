import React, { useState } from "react";
import style from "./style.module.css";
import useProducts from "@/hooks/useProducts";
import ProductBudgetTable from "@/components/BudgetTable/ProductBudgetTable";
import BudgetTable from "@/components/BudgetTable/BudgetTable";
import Title from "@/components/Title/Title";
import useBudget from "@/hooks/useBudget";

function BudgetSection() {
	const { products, budget, addProduct, subtractProduct, getTotal, setPrice } = useBudget();

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
						onClick={(code: string) => addProduct(code)}
					/>
				</div>
				<div className={style.tablecontainer}>
					<BudgetTable
						budget={budget}
						onClick={(code: string) => subtractProduct(code)}
					/>
				</div>
			</div>
			<p className={style.total}>Total: {getTotal()}</p>
		</div>
	);
}

export default BudgetSection;
