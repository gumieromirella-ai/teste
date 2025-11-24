interface InputProps {
	type?: string;
	placeholder?: string;
}

const Input = ({ type, placeholder }: InputProps) => {
	return (
		<input
			className="h-full w-full bg-gray rounded-md pl-12 text-sm font-semibold focus: outline-none border border-solid border-[#323b45]"
			type={type ? type : "text"}
			placeholder={placeholder}
		/>
	);
};

export default Input;
