import { Product } from "@/types/types";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

function useProducts() {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const instance = axios.create({
		baseURL: "http://localhost:3333/products",
	});

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response: AxiosResponse<Product[]> = await instance.get("");
				setProducts(response.data || []);
				setError(null);
				console.log(response);
			} catch (error) {
				setError("Error fetching products");
			} finally {
				setLoading(false);
			}
		};

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

	const createProduct = async (product: Product): Promise<Product | null> => {
		try {
			const response: AxiosResponse<Product> = await instance.post("", product);
			setError(null);
			return response.data || null;
		} catch (error) {
			setError("Error creating product");
			return null;
		}
	};

	const updateProduct = async (id: string, product: Product): Promise<Product | null> => {
		try {
			const response: AxiosResponse<Product> = await instance.put(id, product);
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
			setError(null);
			return response.data || null;
		} catch (error) {
			setError("Error deleting product");
			return null;
		}
	};

	return {
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
