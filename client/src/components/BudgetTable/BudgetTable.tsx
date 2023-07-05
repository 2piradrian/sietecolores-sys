import React from "react";
import style from "./style.module.css";
import { QuantityProduct } from "@/types/types";

type Props = {
	products: QuantityProduct[];
	price: number;
	onClick: (id: string) => void;
};

function BudgetTable({ products, onClick, price }: Props) {
	return (
		<table className={style.productTable}>
			<tr>
				<th className={style.tableHeader}>Código</th>
				<th className={style.tableHeader}>Nombre</th>
				<th className={style.tableHeader}>Cant.</th>
				<th className={style.tableHeader}>Precio</th>
			</tr>
			{products.map((product) => (
				<tr className={style.tableRow} key={product.id} onClick={() => onClick(product.id)}>
					<td className={style.tableCell}>{product.code}</td>
					<td className={style.tableCell}>{product.name}</td>
					<td className={style.tableCell}>{product.quantity}</td>
					<td className={style.tableCell}>{product.weight * price * product.quantity}</td>
				</tr>
			))}
		</table>
	);
}

export default BudgetTable;
