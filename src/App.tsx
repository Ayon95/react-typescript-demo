import { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import data from './data.js';
import { Person } from './definitions';

function App() {
	const [people, setPeople] = useState<Person[]>(data);
	return (
		<div className="App">
			<h1>Chelsea Players</h1>
			<List people={people} />
			<Form people={people} setPeople={setPeople} />
		</div>
	);
}

export default App;
