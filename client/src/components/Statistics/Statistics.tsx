import React, { use } from "react";
import style from "./style.module.css";
import useStadistics from "@/hooks/useStadistics";

function Statistics() {
	const {
		productsSoldInMonth,
		gramsSoldInMonth,
		productSoldMostInMonth,
		productSoldMostInYear,
		top10ProductsByYear,
		top10ProductsByMonth,
	} = useStadistics();

	return (
		<div className={style.container}>
			<div className={style.card}>
				<h3 className={style.h3}>Productos</h3>
				<h4 className={style.h4}>vendidos en el mes</h4>
				<p>{productsSoldInMonth}</p>
			</div>
			<div className={style.card}>
				<h3 className={style.h3}>Gramos</h3>
				<h4 className={style.h4}>vendidos en el mes</h4>
				<p>{gramsSoldInMonth}</p>
			</div>
			<div className={style.card}>
				<h3 className={style.h3}>Producto</h3>
				<h4 className={style.h4}>mas vendido en el mes</h4>
				<p>{productSoldMostInMonth?.code || ""}</p>
			</div>
			<div className={style.card}>
				<h3 className={style.h3}>Producto</h3>
				<h4 className={style.h4}>mas vendido en el año</h4>
				<p>{productSoldMostInYear?.code || ""}</p>
			</div>
		</div>
	);
}

export default Statistics;
