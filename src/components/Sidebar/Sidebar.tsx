import { useContext } from "react";
import ButtonRed from "../Buttons/ButtonRed";
import Section from "../Section/Section";
import { ContextProvider } from "../../Context/Context";

const Sidebar = () => {
	const contextProps = useContext(ContextProvider);

	const isMenuOpen = contextProps?.isMenuOpen;

	return (
		// Sidebar container
		<div
			style={{ borderRight: "1px solid #323B45" }}
			className={`fixed ${
				isMenuOpen && "hidden"
			} flex flex-col items-center justify-start h-screen w-[230px] gap-6 z-30 bg-bg_color top-[70px] pt-8`}
		>
			<div className="py-2">
				<ButtonRed>💵 Ganhe $ Grátis</ButtonRed>
			</div>
			{/* Sections */}
			<Section title="Originais da Blaze" />
			<Section title="Cassino" />
			<Section title="Sports" />
			{/* Support */}
			<div className="text-white uppercase w-full flex flex-col items-start justify-center text-xs font-semibold px-8 space-y-9">
				<a href="#">Suporte ao vivo</a>
				<a href="#">Promoções</a>
				<a href="#">Indique um amigo</a>
				<a href="#">Central de apoio</a>
			</div>
		</div>
	);
};

export default Sidebar;
