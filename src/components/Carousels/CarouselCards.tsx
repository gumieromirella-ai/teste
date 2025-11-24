import { ContextProvider } from "../../Context/Context";
import Card from "./Card";
import Carousel from "./Carousel";
import { useContext } from "react";

const CarouselCards = () => {
	const dataOfContext = useContext(ContextProvider);

	const gamesObj = dataOfContext?.gamesObject;

	return (
		<>
			{gamesObj?.map((game) => (
				<Carousel title={game.category}>
					{game.games.map((card, index) => (
						<Card
							key={index}
							title={card.name}
							image={card.posterPath}
							subtitle={card.subtitle}
						/>
					))}
				</Carousel>
			))}
		</>
	);
};

export default CarouselCards;
