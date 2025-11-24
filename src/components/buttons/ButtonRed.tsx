interface ButtonRedProps {
	children: React.ReactNode;
}

const ButtonRed = ({ children }: ButtonRedProps) => {
	return (
		<button className="bg-red h-[40px] px-7 font-bold text-[.8em] rounded-[3px] flex items-center justify-center transition-colors hover:bg-red_hovered">
			{children}
		</button>
	);
};

export default ButtonRed;
