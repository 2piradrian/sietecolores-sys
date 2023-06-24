import { Product } from "@/types/types";
import style from "./style.module.css";
import React from "react";

function ProductCard({ id, name, type, size, weight }: Product) {
	return (
		<div className={style.container}>
			<p className={style.id}>{id}</p>
			<p className={style.name}>{name}</p>
			<p className={style.type}>{type}</p>
			<p className={style.weight}>Peso : {weight}</p>
		</div>
	);
}

export default ProductCard;
