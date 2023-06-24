import React from "react";
import style from "./style.module.css";
import useProducts from "@/hooks/useProducts";
import { Product } from "@/types/types";

function ProductSection() {
	const { error, products } = useProducts();
	return (
		<div className="bigcontainer">
			<h1>Productos</h1>
			<div className={style.productContainer}>
				{products?.map((product: Product) => (
					<p>{product.name}</p>
				))}
			</div>
			<p>{error}</p>
		</div>
	);
}

export default ProductSection;
