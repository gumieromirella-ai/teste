import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface SectionProps {
	title: string;
}

const Section = ({ title }: SectionProps) => {
	const [isSectionOpen, setIsSectionOpen] = useState<boolean>(false);

	return (
		<div className="text-text w-full">
			{/* Section name */}
			<div
				onClick={() => setIsSectionOpen(!isSectionOpen)}
				className="uppercase font-bold text-xs flex items-center justify-between cursor-pointer
                px-8 pb-4 w-full h-[40px]"
			>
				{title}
				<ChevronDown className="h-4 w-4" />
			</div>
			{/* Section content */}
			{isSectionOpen && (
				<motion.div
					initial={{ height: 0 }}
					animate={{ height: "260px" }}
					transition={{
						type: "spring",
						stiffness: 260,
						damping: 20,
					}}
					className="mb-5 space-y-5 px-9 font-semibold text-sm text-text/75"
				>
					<a
						href="#"
						className="flex items-center justify-start "
					>
						Crash
					</a>
					<a
						href="#"
						className="flex items-center justify-start "
					>
						Double
					</a>
					<a
						href="#"
						className="flex items-center justify-start "
					>
						Mines
					</a>
					<a
						href="#"
						className="flex items-center justify-start "
					>
						Dice
					</a>
					<a
						href="#"
						className="flex items-center justify-start "
					>
						Plink
					</a>
					<a
						href="#"
						className="flex items-center justify-start "
					>
						Limbo
					</a>
					<a
						href="#"
						className="flex items-center justify-start "
					>
						Tower
					</a>
				</motion.div>
			)}
			{/* Section line */}
			<div className="h-[1px] bg-border mt-2 w-full top-7" />
		</div>
	);
};

export default Section;
