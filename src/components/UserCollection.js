import React, { useEffect, useState } from 'react';
import * as api from './APIFile';
import { Link } from 'react-router-dom';

//Pulling cards for the authenticated user on mount and mapping over the array to display all cards for that user
const UserCollection = ({ activeUser, setCards, cards }) => {
	const [error, setError] = useState(false);
	useEffect(() => {
		api.getPersonal(activeUser, setError).then((res) => setCards(res));
	}, []);
	return (
		<div>
			<div className='gallery'>
				{cards &&
					cards.map((card) => {
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
