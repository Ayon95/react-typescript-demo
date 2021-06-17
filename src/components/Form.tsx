import { useState } from 'react';
import InputField from './InputField';
import { IPerson } from '../App';
import { v4 } from 'uuid';

interface FormProps {
	people: IPerson[];
	setPeople: React.Dispatch<React.SetStateAction<IPerson[]>>;
}

export default function Form({ people, setPeople }: FormProps) {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [note, setNote] = useState('');

	function clearInputs() {
		setName('');
		setAge('');
		setNote('');
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (!name || !age) return;
		const newPerson: IPerson = { id: v4(), name, age: Number.parseFloat(age), note };
		setPeople([...people, newPerson]);
		clearInputs();
	}
	return (
		<form className="form" onSubmit={handleSubmit}>
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
					type="number"
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
