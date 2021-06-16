import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as api from './APIFile';

//Pulling cards on mount and mapping over the array to display all cards
const Gallery = ({ cards, setCards, activeUser }) => {
	const [error, setError] = useState(false);

	useEffect(() => {
		api.getGallery(setError).then((res) => {
			setCards(res);
		});
	}, []);

	return (
		<div className='gallery'>
			{cards.map((card) => {
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
	);
};

export default Gallery;
