import React from "react";
import useProducts from "@/hooks/useProducts";
import SearchForm from "@/components/SearchForm/SearchForm";
import Title from "@/components/Title/Title";
import ProductTable from "@/components/ProductTable/ProductTable";
import style from "./style.module.css";

function ProductSection() {
	const { error, products, setSearch } = useProducts();

	return (
		<div className="bigcontainer">
			<Title title="Productos" />
			<SearchForm setSearch={setSearch} />
			<ProductTable products={products} />
			<h2>{error}</h2>
		</div>
	);
}

export default ProductSection;
