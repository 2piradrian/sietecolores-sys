import React from "react";
import style from "./style.module.css";
import { Budget, BudgetProduct } from "@/types/types";

type Props = {
	budgets: Budget[];
	setProducts: (products: BudgetProduct[]) => void;
	setOpen: (open: boolean) => void;
	setPrice: (price: number) => void;
	setTotal: (total: number) => void;
};

function AllBudgetsTable({ budgets, setProducts, setOpen, setPrice, setTotal }: Props) {
	const sortedBudgets = budgets.sort((a, b) => {
		const dateA = a.createdAt instanceof Date ? a.createdAt : new Date(a.createdAt);
		const dateB = b.createdAt instanceof Date ? b.createdAt : new Date(b.createdAt);
		return dateB.getTime() - dateA.getTime();
	});

	return (
		<table className={style.budgetsTable}>
			<tr>
				<th className={style.tableHeader}>Orden</th>
				<th className={style.tableHeader}>Cliente</th>
				<th className={style.tableHeader}>Fecha</th>
				<th className={style.tableHeader}>Cant. Productos</th>
				<th className={style.tableHeader}>Total</th>
			</tr>
			{sortedBudgets.map((budget, index) => {
				const createdAtDate = new Date(budget.createdAt);

				const day = createdAtDate.getDate();
				const month = createdAtDate.getMonth() + 1;
				const year = createdAtDate.getFullYear();

				const formattedDate = `${day}-${month}-${year}`;

				// suma de todas las cantidades de cada producto
				const quantity = budget.products.reduce((acc, product) => {
					return acc + product.quantity;
				}, 0);

				return (
					<tr
						className={style.tableRow}
						key={budget.id}
						onClick={() => {
							setProducts(budget.products);
							setPrice(budget.price);
							setTotal(budget.total);
							setOpen(true);
						}}>
						<td className={style.tableCell}>{index + 1}</td>
						<td className={style.tableCell}>{budget.client}</td>
						<td className={style.tableCell}>{formattedDate}</td>
						<td className={style.tableCell}>{quantity}</td>
						<td className={style.tableCell}>${budget.total}</td>
					</tr>
				);
			})}
		</table>
	);
}

export default AllBudgetsTable;
