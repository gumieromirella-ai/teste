import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface CarouselProps {
	title: string;
	children: React.ReactNode;
}

const Carousel = ({ title, children }: CarouselProps) => {
	const carousel: React.RefObject<HTMLDivElement> =
		useRef<HTMLDivElement>(null);

	const handleLeftSwap = () => {
		if (carousel.current) {
			carousel.current.scrollLeft -= carousel.current.offsetWidth;
		}
	};

	const handleRightSwap = () => {
		if (carousel.current) {
			carousel.current.scrollLeft += carousel.current.offsetWidth;
		}
	};

	return (
		<>
			{/* Carousel Container */}
			<div className="flex flex-col items-start justify-center space-y-3 w-full">
				{/* Carousel header */}
				<div className="flex items-center justify-between w-full mb-5">
					{/* left */}
					<div className="flex items-center space-x-5 ">
						<h1 className="text-xl font-bold">{title}</h1>
						{/* Carousel Controls */}
						<div className="flex items-center text-text w-10">
							<ChevronLeft
								onClick={handleLeftSwap}
								className="cursor-pointer opacity-40 transition-all hover:opacity-100"
							/>
							<ChevronRight
								onClick={handleRightSwap}
								className="cursor-pointer opacity-40 transition-all hover:opacity-100"
							/>
						</div>
					</div>
					{/* Right */}
					<div className="flex items-center space-x-1 cursor-pointer">
						<span className="text-text text-xs font-semibold">
							Ver todos
						</span>{" "}
						<ChevronRight />
					</div>
				</div>
				{/* Carousel content */}
				<div
					ref={carousel}
					className="max-w-full flex items-center justify-start space-x-7 overflow-hidden shrink-0 scroll-smooth"
				>
					{children}
				</div>
			</div>
		</>
	);
};

export default Carousel;
