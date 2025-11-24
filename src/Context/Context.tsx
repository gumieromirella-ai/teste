import React, { createContext, useState } from "react";

interface ContextProviderProps {
	gamesObject: GamesObj[];
	isMenuOpen: boolean;
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
	sponsorsObject: SponsorsObj[];
}

interface GamesObj {
	category: string;
	games: {
		name: string;
		subtitle: string;
		posterPath: string;
	}[];
}

interface SponsorsObj {
	name: string;
	logo_path: string;
	quantity_games: number;
	id: number;
}

interface ContextProps {
	children: React.ReactNode;
}

export const ContextProvider = createContext<
	ContextProviderProps | undefined
>(undefined);

export const Context = ({ children }: ContextProps) => {
	const gamesObject: GamesObj[] = [
		{
			category: "Originais",
			games: [
				{
					name: "Double",
					subtitle: "Blaze originals",
					posterPath:
						"https://d3fwl9ttzumvxe.cloudfront.net/games/2f18f52868c92fc1c9325e2f6f8cd81e.png",
				},
				{
					name: "Crash",
					subtitle: "Blaze originals",
					posterPath:
						"https://d3fwl9ttzumvxe.cloudfront.net/games/2183ed1ae2b2eac427c48867dcda7b71.png",
				},
				{
					name: "Plinko",
					subtitle: "Blaze originals",
					posterPath:
						"https://d3fwl9ttzumvxe.cloudfront.net/games/def4b0bce9b39e471011dba754662f79.png",
				},
				{
					name: "Limbo",
					subtitle: "Blaze originals",
					posterPath:
						"https://d3fwl9ttzumvxe.cloudfront.net/games/2f18f52868c92fc1c9325e2f6f8cd81e.png",
				},
				{
					name: "Mines",
					subtitle: "Blaze originals",
					posterPath:
						"https://d3fwl9ttzumvxe.cloudfront.net/games/daf35843bae3cd72f3713d20120bda50.png",
				},
				{
					name: "Tower",
					subtitle: "Blaze originals",
					posterPath:
						"https://d3fwl9ttzumvxe.cloudfront.net/games/158cef92f8f25955525fbfea04f0cb88.png",
				},
				{
					name: "Dice",
					subtitle: "Blaze originals",
					posterPath:
						"https://d3fwl9ttzumvxe.cloudfront.net/games/5d3d08656fedb39a696d8edfa12c7040.png",
				},
			],
		},
		{
			category: "Popular",
			games: [
				{
					name: "Gates of Olympus",
					subtitle: "Pragmatic Play",
					posterPath:
						"https://d3fwl9ttzumvxe.cloudfront.net/games/29d8559e14cc09c33509d4e455e4ada8.png",
				},
				{
					name: "Crazy Time",
					subtitle: "Evolution Gaming",
					posterPath:
						"https://d3fwl9ttzumvxe.cloudfront.net/games/2183ed1ae2b2eac427c48867dcda7b71.png",
				},
				{
					name: "Sweet Bonanza",
					subtitle: "Pragmatic Play",
					posterPath:
						"https://d3fwl9ttzumvxe.cloudfront.net/games/def4b0bce9b39e471011dba754662f79.png",
				},
				{
					name: "Lightning Roulette",
					subtitle: "Evolution Gaming",
					posterPath:
						"https://d3fwl9ttzumvxe.cloudfront.net/games/0c23c2d049b82e1bcc57b7ea910545bb.png",
				},
				{
					name: "Blaze Million",
					subtitle: "BGAMING",
					posterPath:
						"https://d3fwl9ttzumvxe.cloudfront.net/games/a392dec8433160c378d3e2ea752e614c.png",
				},
				{
					name: "Wolf Fang - Volcano",
					subtitle: "Spinomenal",
					posterPath:
						"https://d3fwl9ttzumvxe.cloudfront.net/games/9feb8870e2c4c2a6ed4f058c2cd3fbd6.png",
				},
				{
					name: "Massive Luck",
					subtitle: "Evoplay Entertainment",
					posterPath:
						"https://d3fwl9ttzumvxe.cloudfront.net/games/5d3d08656fedb39a696d8edfa12c7040.png",
				},
				{
					name: "Release The Kraken",
					subtitle: "Pragmatic Play",
					posterPath:
						"https://d3fwl9ttzumvxe.cloudfront.net/games/036a1bb8d8cad50bfeb78aa3f491e3d4.png",
				},
				{
					name: "Fruit Million",
					subtitle: "BIGAMING",
					posterPath:
						"https://d3fwl9ttzumvxe.cloudfront.net/games/c76ebc9f72532eb02cca18c7eec3fd6a.png",
				},
				{
					name: "Fruit Party 2",
					subtitle: "Pragmatic Play",
					posterPath:
						"https://d3fwl9ttzumvxe.cloudfront.net/games/21f4ad254388f81f1af9b4d5d3e1097c.png",
				},
				{
					name: "Big Bass Bonanza",
					subtitle: "Pragmatic Play",
					posterPath:
						"https://d3fwl9ttzumvxe.cloudfront.net/games/722aeceb69dd18fb02b3f0dca848901a.png",
				},
				{
					name: "Book of Blaze",
					subtitle: "BIGAMING",
					posterPath:
						"https://d3fwl9ttzumvxe.cloudfront.net/games/3fcbbcc0ba1d824d1052ffa0aa02ce03.png",
				},
			],
		},
	];

	const sponsorsObject: SponsorsObj[] = [
		{
			name: "Evolution Gaming",
			logo_path:
				"https://blaze.com/static/media/evolution.2567cd67.svg",
			quantity_games: 119,
			id: 1,
		},
		{
			name: "Pragmatic Play",
			logo_path:
				"https://blaze.com/static/media/pragmaticexternal.8113815c.svg",
			quantity_games: 390,
			id: 2,
		},
		{
			name: "Plays in Go",
			logo_path:
				"https://blaze.com/static/media/playngo.fd89b6d0.svg",
			quantity_games: 301,
			id: 3,
		},
		{
			name: "No limit Elite",
			logo_path:
				"https://blaze.com/static/media/nolimit.4633dfa6.svg",
			quantity_games: 69,
			id: 4,
		},
		{
			name: "YGGDRASIL",
			logo_path:
				"https://blaze.com/static/media/yggdrasil.8148a49b.svg",
			quantity_games: 242,
			id: 5,
		},
		{
			name: "Caleta",
			logo_path:
				"https://blaze.com/static/media/caleta.8e13c454.svg",
			quantity_games: 74,
			id: 6,
		},
		{
			name: "EvoPlay",
			logo_path:
				"https://blaze.com/static/media/evoplay.562a71b6.svg",
			quantity_games: 196,
			id: 8,
		},
	];

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<ContextProvider.Provider
			value={{
				gamesObject,
				isMenuOpen,
				setIsMenuOpen,
				sponsorsObject,
			}}
		>
			{children}
		</ContextProvider.Provider>
	);
};
