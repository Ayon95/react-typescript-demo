import { IPerson } from '../App';

interface ListProps {
	people: IPerson[];
}

export default function List({ people }: ListProps) {
	return (
		<ul className="list">
			{people.map(person => (
				<li className="list__item">
					<h3 className="list__item-name">{person.name}</h3>
					<p className="list__item-age">{person.age} years old</p>
					<p className="list__item-note">{person.note}</p>
				</li>
			))}
		</ul>
	);
}
