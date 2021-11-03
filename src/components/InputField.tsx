type Props = {
	label: string;
	name: string;
	type: 'text' | 'number' | 'email';
	required?: boolean;
	placeholder: string;
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function InputField(props: Props) {
	return (
		<>
			<label htmlFor={props.name} className="form__label">
				{props.label}
			</label>
			<input
				className="form__input-box"
				type={props.type}
				id={props.name}
				value={props.value}
				onChange={e => props.setValue(e.target.value)}
				placeholder={props.placeholder}
				required={props.required}
			/>
		</>
	);
}
