import { Search } from "lucide-react";
import hero from "../../assets/hero-blaze.png";
import ButtonRed from "../../components/Buttons/ButtonRed";
import CarouselCards from "../../components/Carousels/CarouselCards";
import Categories from "../../components/Categories/Categories";
import Input from "../../components/Input/Input";
import CarouselSponsors from "../../components/Carousels/CarouselSponsors";

const Home = () => {
	return (
		<>
			{/* Container Home */}
			<div className="flex flex-col items-center justify-start h-screen w-full mt-[70px] pl-[250px] ">
				{/* Container hero */}
				<div className="relative flex flex-col items-center justify-center max-w-[1070px] flex-wrap pb-8 space-y-8 ">
					{/* Hero text */}
					<div className="absolute flex-1 top-[10%] left-[5%] space-y-4">
						<h1 className="text-4xl font-semibold">
							Pacote de boas-vindas de R$ 1.000 💸
						</h1>
						<p>
							Receba um bônus de até R$ 1.000 e 40 rodadas
							grátis
						</p>
						<ButtonRed>Cadastre-se</ButtonRed>
					</div>
					<img
						className="rounded-md"
						src={hero}
						alt="Hero initial blaze"
					/>
					<div className="w-full h-12 relative text-text">
						<Search className="absolute top-1/2 left-7 -translate-x-1/2 -translate-y-1/2 w-5" />
						<Input placeholder="Procure Jogos ou Provedores" />
					</div>
					{/* Categories */}
					<Categories />
					{/* Carousels */}
					<CarouselCards />
					<CarouselSponsors />
				</div>
			</div>
		</>
	);
};

export default Home;
