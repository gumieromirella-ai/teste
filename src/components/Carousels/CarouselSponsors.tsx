import { ContextProvider } from "../../Context/Context";
import Card from "./Card";
import Carousel from "./Carousel";
import { useContext } from "react";

const CarouselSponsors = () => {
	const contextObject = useContext(ContextProvider);

	const sponsors = contextObject?.sponsorsObject;

	return (
		<Carousel title="Provedores de Jogos">
			{sponsors?.map((sponsor) => (
				<Card
					key={sponsor.id}
					logo={sponsor.logo_path}
					number_games={sponsor.quantity_games}
					height="100px"
					bg_color="#1A242D"
				/>
			))}
		</Carousel>
	);
};

export default CarouselSponsors;
