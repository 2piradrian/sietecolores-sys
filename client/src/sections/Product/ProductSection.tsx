import React, { useState } from "react";
import useProducts from "@/hooks/useProducts";
import SearchForm from "@/components/SearchForm/SearchForm";
import Title from "@/components/Title/Title";
import ProductTable from "@/components/ProductTable/ProductTable";
import style from "./style.module.css";
import UpdateForm from "@/components/UpdateForm/UpdateForm";

function ProductSection() {
	const { error, products, setSearch, getProductById, updateProduct } = useProducts();

	const [open, setOpen] = useState(false);
	const [id, setId] = useState("");

	const handleForm = (id: string) => {
		setOpen(true);
		setId(id);
	};

	return (
		<>
			<div className="bigcontainer">
				<Title title="Productos" />
				<SearchForm setSearch={setSearch} />
				{products.length > 0 && (
					<ProductTable products={products} onClick={handleForm} isComplete />
				)}
				<h2 className={style.error}>{error}</h2>
			</div>
			{open && (
				<UpdateForm
					id={id}
					setOpen={setOpen}
					getProductById={getProductById}
					updateProduct={updateProduct}
				/>
			)}
		</>
	);
}

export default ProductSection;
