import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as api from './APIFile';
const Gallery = () => {
	const token = localStorage.getItem('token');
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
						{/* <h1>{card._id}</h1> */}

						<Link to={`/gallery/${card._id}`}>
							{' '}
							<img src={card.url} alt='picture' key={card.id} />
						</Link>
						{/* <p>{card.tags}</p> */}
					</>
				);
			})}
		</div>
	);
};

export default Gallery;
