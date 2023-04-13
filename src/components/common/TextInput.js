const TextInput = ({
	labelText,
	value,
	prependValue,
	onChange,
	name,
	id,
	placeholder,
	containerStyle,
	inputStyle,
	labelStyle,
	type,
	maxLength,
	min,
	disabled,
	ref,
	onBlur,
	onKeyDown,
	max,
	autoFocus = true,
	...props
}) => {
	return (
		<div className={` ${containerStyle} `}>
			<label className={`  `} htmlFor={id}>
				<div className={` margin_label my-2 mt-3 font-semibold text-[#262626] ${labelStyle}`}>{labelText}</div>
				<div className=" h-full ">
					<div className="">{prependValue}</div>
					<input
						className={`w-full h-full px-4 rounded-md ${inputStyle}`}
						placeholder={placeholder}
						autoFocus={autoFocus}
					/>
				</div>
			</label>
		</div>
	);
};

export default TextInput;