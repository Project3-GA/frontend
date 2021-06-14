import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import * as api from './APIFile';
const CardDetail = ({ match }) => {
	const token = localStorage.getItem('token');
	const [error, setError] = useState(false);
	const [cards, setCards] = useState({});
	const [cardEdit, setCardEdit] = useState({});
	// const id = match.id
	let params = useParams();
	// console.log(params);
	const history = useHistory();

	const handleChange = (event) => {
		setCardEdit({ ...cardEdit, [event.target.id]: event.target.value });
	};

	useEffect(() => {
		api.getCardDetails(params, setCards, setError);
	}, [cardEdit]);

	function cardDelete() {
		const url = `https://hatcrew-be.herokuapp.com/api/cards/${params.id}`;
		fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
				Authorization: `Bearer ${token}`,
			},
		})
			.then(history.goBack())
			.catch(() => setError(true));
	}

	const cardUpdate = (event) => {
		event.preventDefault();
		api.cardUpdate(params, cardEdit, setCardEdit, setError);
	};

	return (
		<div className='gallery'>
			<img src={cards.url} alt='picture' />

			<button onClick={cardDelete}>Delete IMG</button>

			<form onSubmit={cardUpdate}>
				<label htmlFor='url'>image/gif url:</label>
				<input id='url' type='text' onChange={handleChange} />
				<label htmlFor='tags'>tags:</label>
				<input id='tags' type='text' onChange={handleChange} />
				<button type='submit' className='submit-button'>
					submit
				</button>
			</form>
			{!cards.tags ? null : (
				<ul>
					{cards.tags.map((tag) => (
						<li>{tag}</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default CardDetail;
