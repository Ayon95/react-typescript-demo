import { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import data from './data.js';

export interface IPerson {
	id: number;
	name: string;
	age: number;
	note?: string;
}

function App() {
	const [people, setPeople] = useState<IPerson[]>(data);
	return (
		<div className="App">
			<h1>People Invited To My Party</h1>
			<List people={people} />
			<Form />
		</div>
	);
}

export default App;
