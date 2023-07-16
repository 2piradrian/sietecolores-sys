import React from "react";
import style from "./style.module.css";
import BudgetTable from "../BudgetTable/BudgetTable";
import { BudgetProduct } from "@/types/types";

type Props = {
	products: BudgetProduct[];
	price: number;
	total: number;
};

function TableToPrint({ products, price, total }: Props) {
	const handlePrint = () => {
		window.print();
	};

	return (
		<div className={style.tableContainer}>
			<h1>Presupuesto: Siete Colores</h1>
			<h4>Documento no válido como factura</h4>
			<div className={style.tablediv}>
				<BudgetTable products={products} price={price} />
			</div>
			<p className={style.total}>Total: $ {total}</p>
			<div className={style.button} onClick={handlePrint}>
				Imprimir
			</div>
		</div>
	);
}

export default TableToPrint;
