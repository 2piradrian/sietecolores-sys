import { ProductForm } from "@/types/types";
import { useEffect, useState } from "react";

type Props = {
	product: ProductForm | undefined;
};

function UpdateInputs({ product }: Props) {
	const [formData, setFormData] = useState<ProductForm>({
		code: product!.code,
		name: product!.name,
		type: product!.type,
		size: product!.size,
		weight: product!.weight,
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	return (
		<>
			<label htmlFor="code">Código</label>
			<input
				type="text"
				name="code"
				id="code"
				value={formData.code}
				onChange={handleInputChange}
			/>
			<label htmlFor="name">Nombre</label>
			<input
				type="text"
				name="name"
				id="name"
				value={formData.name}
				onChange={handleInputChange}
			/>
			<label htmlFor="type">Tipo</label>
			<input
				type="text"
				name="type"
				id="type"
				value={formData.type}
				onChange={handleInputChange}
			/>
			<label htmlFor="size">Tamaño</label>
			<input
				type="text"
				name="size"
				id="size"
				value={formData.size}
				onChange={handleInputChange}
			/>
			<label htmlFor="weight">Peso</label>
			<input
				type="text"
				name="weight"
				id="weight"
				value={formData.weight}
				onChange={handleInputChange}
			/>
			<button type="submit">Actualizar</button>
		</>
	);
}

export default UpdateInputs;
