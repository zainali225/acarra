const Button = ({
	bg,
	color,
	textDir,
	fontSize,
	fontWeight,
	onClick,
	text,
	padding,
	type,
	disabledClass,
	disabled,
	customClass,
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`w-full h-full blocks  ${padding} ${bg} ${color} ${textDir} ${fontSize} ${fontWeight} ${disabledClass} ${customClass}`}
		>
			{text}
		</button>
	);
};

export default Button;