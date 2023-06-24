import React from "react";
import style from "./style.module.css";
import useProducts from "@/hooks/useProducts";
import { Product } from "@/types/types";
import ProductCard from "@/components/ProductCard/ProductCard";
import SearchForm from "@/components/SearchForm/SearchForm";
import Title from "@/components/Title/Title";

function ProductSection() {
	const { error, products, setSearch } = useProducts();

	return (
		<div className="bigcontainer">
			<Title title="Productos" />
			<SearchForm setSearch={setSearch} />
			<div className={style.productContainer}>
				{products?.map((product: Product) => (
					<ProductCard key={product.id} {...product} />
				))}
			</div>
			<h2>{error}</h2>
		</div>
	);
}

export default ProductSection;
