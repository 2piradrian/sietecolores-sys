import AllBudgetsTable from "@/components/AllBudgetsTable/AllBudgetsTable";
import Title from "@/components/Title/Title";
import useBudget from "@/hooks/useBudget";
import React, { useState } from "react";
import { BudgetProduct } from "@/types/types";
import BudgetTable from "@/components/BudgetTable/BudgetTable";
import style from "./style.module.css";

function AllBudgetsSection() {
	const { budgetList } = useBudget();
	const [open, setOpen] = useState(false);
	const [products, setProducts] = useState<BudgetProduct[]>([]);
	const [price, setPrice] = useState(0);
	const [total, setTotal] = useState(0);

	const handlePrint = () => {
		window.print();
	};

	return (
		<div className="bigcontainer">
			<Title title="Lista de presupuestos" />
			<AllBudgetsTable
				budgets={budgetList}
				setProducts={setProducts}
				setPrice={setPrice}
				setOpen={setOpen}
				setTotal={setTotal}
			/>
			{open && (
				<div className={`bigcontainer ${style.tableContainer}`}>
					<h1>Presupuesto: Siete Colores</h1>
					<h4>Documento no válido como factura</h4>
					<BudgetTable products={products} price={price} onClick={() => setOpen(false)} />
					<p>Total: $ {total}</p>
					<div className={style.button} onClick={handlePrint}>
						Imprimir
					</div>
				</div>
			)}
		</div>
	);
}

export default AllBudgetsSection;
