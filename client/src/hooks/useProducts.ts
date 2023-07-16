import { Product, ProductForm } from "@/types/types";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

function useProducts() {
	const [products, setProducts] = useState<Product[]>([]);
	const [search, setSearch] = useState<string>("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const instance = axios.create({
		baseURL: "http://localhost:3333/products",
	});

	const fetchProducts = async () => {
		try {
			const response: AxiosResponse<Product[]> = await instance.get("");
			// sort by code
			response.data.sort((a, b) => {
				if (a.code < b.code) {
					return -1;
				}
				if (a.code > b.code) {
					return 1;
				}
				return 0;
			});
			setProducts(response.data || []);
			setError(null);
			return response.data || [];
		} catch (error) {
			setError("Error fetching products");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		const filterProducts = async () => {
			const data = await fetchProducts();
			const filteredProducts = data!.filter((product) => {
				return (
					product.name.toLowerCase().includes(search.toLowerCase()) ||
					product.code.toLowerCase().includes(search.toLowerCase())
				);
			});
			setProducts(filteredProducts);
		};
		filterProducts();
	}, [search]);

	useEffect(() => {
		fetchProducts();
	}, []);

	const getProductById = async (id: string): Promise<Product | null> => {
		try {
			const response: AxiosResponse<Product> = await instance.get(id);
			setError(null);
			return response.data || null;
		} catch (error) {
			setError("Error fetching product");
			return null;
		}
	};

	const createProduct = async (product: ProductForm): Promise<Product | null> => {
		if (!product.name || !product.code || !product.size || !product.weight || !product.type) {
			setError("Error creating product");
			alert("Rellena todos los campos");
			return null;
		}
		// already exists
		const exists = products.find((p) => p.code === product.code);
		if (exists) {
			setError("Error creating product");
			alert("El código ya existe");
			return null;
		}
		try {
			const response: AxiosResponse<Product> = await instance.post("", product);
			setError(null);
			await fetchProducts();
			return response.data || null;
		} catch (error) {
			alert((error as any).error);
			setError("Error creating product");
			return null;
		}
	};

	const updateProduct = async (id: string, product: ProductForm): Promise<Product | null> => {
		if (!product.name || !product.code || !product.size || !product.weight || !product.type) {
			setError("Error creating product");
			alert("Rellena todos los campos");
			return null;
		}
		try {
			const response: AxiosResponse<Product> = await instance.put(id, product);
			await fetchProducts();
			setError(null);
			return response.data || null;
		} catch (error) {
			setError("Error updating product");
			return null;
		}
	};

	const deleteProduct = async (id: string): Promise<Product | null> => {
		try {
			const response: AxiosResponse<Product> = await instance.delete(id);
			await fetchProducts();
			setError(null);
			return response.data || null;
		} catch (error) {
			setError("Error deleting product");
			return null;
		}
	};

	return {
		setSearch,
		products,
		loading,
		error,
		getProductById,
		createProduct,
		updateProduct,
		deleteProduct,
	};
}

export default useProducts;
