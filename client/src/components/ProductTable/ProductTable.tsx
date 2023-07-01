import React from "react";
import style from "./style.module.css";
import { Product } from "@/types/types";

type Props = {
	products: Product[];
};

function ProductTable({ products }: Props) {
	return (
		<table className={style.productTable}>
			<tr>
				<th className={style.tableHeader}>Código</th>
				<th className={style.tableHeader}>Nombre</th>
				<th className={style.tableHeader}>Tipo</th>
				<th className={style.tableHeader}>Peso</th>
			</tr>

			{products?.map((product) => (
				<tr className={style.tableRow} key={product.id}>
					<td className={style.tableCell}>{product.code}</td>
					<td className={style.tableCell}>{product.name}</td>
					<td className={style.tableCell}>{product.type}</td>
					<td className={style.tableCell}>{product.weight}</td>
				</tr>
			))}
		</table>
	);
}

export default ProductTable;
