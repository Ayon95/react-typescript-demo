import { Person } from '../definitions';

type Props = {
	people: Person[];
};

export default function List({ people }: Props) {
	return (
		<ul className="list">
			{people.map(person => (
				<li className="list__item" key={person.id}>
					<h3 className="list__item-name">{person.name}</h3>
					<p className="list__item-age">{person.age} years old</p>
					<p className="list__item-note">{person.note}</p>
				</li>
			))}
		</ul>
	);
}
