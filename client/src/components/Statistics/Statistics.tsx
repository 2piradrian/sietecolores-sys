import React from "react";
import style from "./style.module.css";

function Statistics(stadistics: any) {
	return (
		<div className={style.container}>
			<div className={style.card}>
				<h3 className={style.h3}>Productos</h3>
				<h4 className={style.h4}>vendidos en el mes</h4>
				<p>124</p>
			</div>
			<div className={style.card}>
				<h3 className={style.h3}>Gramos</h3>
				<h4 className={style.h4}>vendidos en el mes</h4>
				<p>1300</p>
			</div>
			<div className={style.card}>
				<h3 className={style.h3}>Presupuestos</h3>
				<h4 className={style.h4}>calculados en el mes</h4>
				<p>5</p>
			</div>
		</div>
	);
}

export default Statistics;
