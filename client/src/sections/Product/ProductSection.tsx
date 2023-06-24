import React from "react";
import style from "./style.module.css";
import useProducts from "@/hooks/useProducts";
import { Product } from "@/types/types";
import ProductCard from "@/components/ProductCard/ProductCard";

function ProductSection() {
	const { error, products, setSearch } = useProducts();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const searchData = Object.fromEntries(new FormData(e.currentTarget));
		setSearch(searchData.search as string);
	};

	return (
		<div className="bigcontainer">
			<h1>Productos</h1>
			<form onSubmit={handleSubmit}>
				<input className={style.input} type="text" placeholder="Buscar" name="search" />
			</form>
			<div className={style.productContainer}>
				{products?.map((product: Product) => (
					<ProductCard key={product.id} {...product} />
				))}
			</div>
			<p>{error}</p>
		</div>
	);
}

export default ProductSection;
