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
			<input type="text" name="code" id="code" placeholder="A999" />
			<label htmlFor="name">Nombre</label>
			<input type="text" name="name" id="name" placeholder="CARA DE LEON" />
			<label htmlFor="type">Tipo</label>
			<select name="type" id="type" placeholder="Cortante y sellador">
				<option>Abecedario</option>
				<option>Cortante</option>
				<option>Cortante y sellador</option>
				<option>Mandalas</option>
				<option>Scraper</option>
				<option>Sello</option>
				<option>Texturizadores</option>
				<option>Toppers</option>
			</select>
			<label htmlFor="size">Tamaño</label>
			<input type="text" name="size" id="size" placeholder="55mm x 89mm" />
			<label htmlFor="weight">Peso</label>
			<input type="text" name="weight" id="weight" placeholder="45" />
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
