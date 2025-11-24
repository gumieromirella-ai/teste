import Category from "./Category";
import { MdOutlineCasino } from "react-icons/md";

const Categories = () => {
	return (
		<div className="w-full flex items-center justify-start space-x-5">
			<Category active={true} title="Salão" />
			<Category icon={MdOutlineCasino} title="Slots em Destaque" />
			<Category title="Cassino Ao Vivo" />
			<Category title="Jogos Ao vivo" />
		</div>
	);
};

export default Categories;
