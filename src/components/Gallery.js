import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as api from './APIFile';
const Gallery = () => {
	const [error, setError] = useState(false);
	const [cards, setCards] = useState([]);

	useEffect(() => {
		api.getGallery(setCards, setError);
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
