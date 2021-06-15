import React, { useEffect, useState } from 'react';
import * as api from './APIFile';
import { Link } from 'react-router-dom';
const UserCollection = ({ activeUser, setCards, cards }) => {
	const [error, setError] = useState(false);

	useEffect(async () => {
		let data = await api.getPersonal(activeUser, setCards, setError);
		setCards(data);
	}, []);

	return (
		<div>
			<div className='gallery'>
				{cards?.map((card) => {
					return (
						<>
							<Link to={`/gallery/${card._id}`}>
								{' '}
								<img src={card.url} alt='picture' key={card.id} />
							</Link>
						</>
					);
				})}
			</div>
		</div>
	);
};

export default UserCollection;
