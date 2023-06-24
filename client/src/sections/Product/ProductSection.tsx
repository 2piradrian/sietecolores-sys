import React from "react";
import style from "./style.module.css";

function ProductSection() {
	return (
		<div className="bigcontainer">
			<h1>Productos</h1>
			<div className={style.productContainer}></div>
		</div>
	);
}

export default ProductSection;
