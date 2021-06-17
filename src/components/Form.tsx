import { useState } from 'react';
import InputField from './InputField';

export default function Form() {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [note, setNote] = useState('');
	return (
		<form className="form">
			<h2 className="form__title">Add Person</h2>
			<div className="form__inputs">
				<InputField
					label="Name*"
					name="name"
					type="text"
					required={true}
					value={name}
					setValue={setName}
					placeholder="Enter the person's name"
				/>

				<InputField
					label="Age*"
					name="age"
					type="text"
					required={true}
					value={age}
					setValue={setAge}
					placeholder="Enter the person's age"
				/>

				<InputField
					label="Note"
					name="note"
					type="text"
					value={note}
					setValue={setNote}
					placeholder="Say something about the person"
				/>
			</div>
			<button type="submit" className="btn">
				Submit
			</button>
		</form>
	);
}
