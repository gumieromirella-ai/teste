import logoBlaze from "../../assets/logo-blaze.png";
import ButtonRed from "../Buttons/ButtonRed";
import { Menu } from "lucide-react";
import { useContext } from "react";
import { CiBasketball } from "react-icons/ci";
import { GiCardBurn } from "react-icons/gi";
import { ContextProvider } from "../../Context/Context";

const Header = () => {
	const contextObj = useContext(ContextProvider);

	const setMenuOpen = contextObj?.setIsMenuOpen;
	const menuOpen = contextObj?.isMenuOpen;

	const handleMenuOpen = () => {
		setMenuOpen(!menuOpen);
	};

	console.log(menuOpen);

	return (
		<header
			style={{ borderBottom: "1px solid #323B45" }}
			className="fixed flex items-center justify-between h-[70px] w-full py-3 px-6 z-20 bg-bg_color"
		>
			{/* Left header session */}
			<div className="font-semibold text-xs uppercase flex items-center space-x-8">
				<a
					href="#"
					className="flex items-center justify-between gap-2"
				>
					<GiCardBurn className="text-xl" />
					<h1>Cassino</h1>
				</a>
				<a
					href="#"
					className="pr-4 text-white/75 flex items-center justify-between gap-2"
				>
					<CiBasketball className="text-xl" />
					<h1>Esportes</h1>
				</a>
				<div className="flex items-center space-x-5">
					<Menu
						onClick={handleMenuOpen}
						className="h-8 w-8 rounded-full p-1 transition-colors hover:bg-white/10  cursor-pointer "
					/>
					<img src={logoBlaze} alt="Logo blaze" />
				</div>
			</div>
			{/* Right header session */}
			<div className="flex items-center  gap-5">
				<a href="#" className="font-bold text-[.8em]">
					Entrar
				</a>
				<ButtonRed>Cadastre-se</ButtonRed>
			</div>
		</header>
	);
};

export default Header;
