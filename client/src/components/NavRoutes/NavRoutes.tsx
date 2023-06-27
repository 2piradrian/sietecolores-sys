import NavItem from "../NavItem/NavItem";
import { AiFillHome } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import style from "./style.module.css";

type Props = {
	state: boolean;
};

function NavRoutes({ state }: Props) {
	return (
		<div className={style.routes}>
			<NavItem icon={<AiFillHome />} name="Home" route="/" state={state} />
			<NavItem icon={<FaSearch />} name="Productos" route="/products" state={state} />
			<NavItem icon={<FaBook />} name="Presupuestos" route="/budgets" state={state} />
		</div>
	);
}

export default NavRoutes;
