import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as api from './APIFile';
const CardCreate = () => {
	let history = useHistory();
	const [card, setCard] = useState({ url: '', tags: [] });
	const [error, setError] = useState(false);
	const token = localStorage.getItem('token');

	const handleChange = (event) => {
		setCard({ ...card, [event.target.id]: event.target.value });
	};
	const handleCardCreate = async (event) => {
		event.preventDefault();
		await api.createCard(card, setError);
		history.push('/gallery');
	};
	return (
		<div>
			<div className='form'>
				<form onSubmit={handleCardCreate}>
					<label htmlFor='url'>image/gif url:</label>
					<input id='url' type='text' onChange={handleChange} />
					<label htmlFor='tags'>tags:</label>
					<input id='tags' type='text' onChange={handleChange} />
					<button type='submit' className='submit-button'>
						submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default CardCreate;
