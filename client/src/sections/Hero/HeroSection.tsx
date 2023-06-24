import React from "react";
import style from "./style.module.css";
import Link from "next/link";

function HeroSection() {
	return (
		<div className="bigcontainer">
			<h2>Bienvenido</h2>
			<h1 className={style.h1}>Siete Colores</h1>
			<h3 className={style.h3}>Elegí una herramienta 👇</h3>
			<div className={style.buttonContainer}>
				<Link href="/products" className={style.button}>
					Productos
				</Link>
				<Link href="/budgets" className={style.button}>
					Ver Presupuestos
				</Link>
				<Link href="/newbudget" className={style.button}>
					Hacer un Presupuesto
				</Link>
			</div>
		</div>
	);
}

export default HeroSection;
