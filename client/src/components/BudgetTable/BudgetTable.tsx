import React from "react";
import style from "./style.module.css";
import { BudgetProduct } from "@/types/types";

type Props = {
	products: BudgetProduct[];
	onClick?: (id: string) => void;
	price: number;
};

function BudgetTable({ products, price, onClick }: Props) {
	return (
		<table className={style.productTable}>
			<tr>
				<th className={style.tableHeader}>Código</th>
				<th className={style.tableHeader}>Nombre</th>
				<th className={style.tableHeader}>Cant.</th>
				<th className={style.tableHeader}>Precio</th>
			</tr>
			{products.map((product) => (
				<tr
					className={style.tableRow}
					key={product.code}
					onClick={onClick ? () => onClick(product.code) : () => {}}>
					<td className={style.tableCell}>{product.code}</td>
					<td className={style.tableCell}>{product.name}</td>
					<td className={style.tableCell}>{product.quantity}</td>
					<td className={style.tableCell}>
						$ {product.weight * price * product.quantity}
					</td>
				</tr>
			))}
		</table>
	);
}

export default BudgetTable;
