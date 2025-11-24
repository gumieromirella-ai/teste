import { useState } from "react";
import ButtonRed from "../Buttons/ButtonRed";

interface CardProps {
	title?: string;
	subtitle?: string;
	image?: string;
	height?: string;
	width?: string;
	bg_color?: string;
	logo?: string;
	number_games?: number;
}

const Card = ({
	title,
	subtitle,
	image,
	height,
	width,
	bg_color,
	logo,
	number_games,
}: CardProps) => {
	const [isHovered, setIsHovered] = useState<boolean>(false);

	const onHoverButton = () => {
		setIsHovered(!isHovered);
	};

	return (
		<>
			{/* Card container */}
			<div
				onMouseEnter={onHoverButton}
				onMouseLeave={onHoverButton}
				className={`h-60 w-44 rounded-md cursor-pointer shrink-0 overflow-hidden relative flex flex-col items-start justify-end p-2 bg-cover`}
				style={{
					backgroundImage: `url(${image})`,
					height: `${height && height}`,
					width: `${width && width}`,
					backgroundColor: `${bg_color && bg_color}`,
				}}
			>
				<h1 className="text-md w-[50%] font-semibold">{title}</h1>
				{logo ? (
					<div className="p-2 space-y-3">
						<img src={logo} />
						<p className="text-xs font-semibold text-text">
							{number_games} jogos
						</p>
					</div>
				) : (
					<>
						<p className="text-xs font-light">{subtitle}</p>
						{isHovered && (
							<div className="absolute top-0 left-0 h-full w-full transition-colors bg-black/40 flex items-center justify-center">
								<ButtonRed>Jogar</ButtonRed>
							</div>
						)}
					</>
				)}
			</div>
		</>
	);
};

export default Card;
