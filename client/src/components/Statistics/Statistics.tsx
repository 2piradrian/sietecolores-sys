import React, { use } from "react";
import style from "./style.module.css";
import useStadistics from "@/hooks/useStatistics";

function Statistics() {
	const {
		gramsSoldInMonth,
		topProductsByYear,
		topProductsByMonth,
		totalProductsSoldByMonth,
		totalProductsSoldByYear,
	} = useStadistics();

	return (
		<>
			<div className={style.container}>
				<div className={style.card}>
					<h3 className={style.h3}>Productos</h3>
					<h4 className={style.h4}>vendidos en el mes</h4>
					<p>{totalProductsSoldByMonth}</p>
				</div>
				<div className={style.card}>
					<h3 className={style.h3}>Productos</h3>
					<h4 className={style.h4}>vendidos en el año</h4>
					<p>{totalProductsSoldByYear}</p>
				</div>
				<div className={style.card}>
					<h3 className={style.h3}>Gramos</h3>
					<h4 className={style.h4}>vendidos en el mes</h4>
					<p>{gramsSoldInMonth}</p>
				</div>
				<div className={style.card}>
					<h3 className={style.h3}>Producto</h3>
					<h4 className={style.h4}>mas vendido en el mes</h4>
					<p>{topProductsByMonth[0]?.code || ""}</p>
				</div>
				<div className={style.card}>
					<h3 className={style.h3}>Producto</h3>
					<h4 className={style.h4}>mas vendido en el año</h4>
					<p>{topProductsByYear[0]?.code || ""}</p>
				</div>
			</div>
			<div className={style.topContainer}>
				<div className={style.top}>
					Top del mes
					<ul>
						{topProductsByMonth.map((product) => {
							return (
								<li key={product.code}>
									<p>
										{product.code}: {product.sales}
									</p>
								</li>
							);
						})}
					</ul>
				</div>
				<div className={style.top}>
					Top del año
					<ul>
						{topProductsByYear.map((product) => {
							return (
								<li key={product.code}>
									<p>
										{product.code}: {product.sales}
									</p>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
}

export default Statistics;
