import { ProductForm } from "@/types/types";
import style from "./style.module.css";

type Props = {
	product: ProductForm | undefined;
	setOpen: (isOpen: boolean) => void;
};

function CreateInputs({ product, setOpen }: Props) {
	return (
		<>
			<label htmlFor="code">Código</label>
			<input type="text" name="code" id="code" />
			<label htmlFor="name">Nombre</label>
			<input type="text" name="name" id="name" />
			<label htmlFor="type">Tipo</label>
			<input type="text" name="type" id="type" />
			<label htmlFor="size">Tamaño</label>
			<input type="text" name="size" id="size" />
			<label htmlFor="weight">Peso</label>
			<input type="text" name="weight" id="weight" />
			<div className={style.buttonContainer}>
				<button type="submit">Actualizar</button>
				<button type="button" onClick={() => setOpen(false)}>
					Cancelar
				</button>
			</div>
		</>
	);
}

export default CreateInputs;
