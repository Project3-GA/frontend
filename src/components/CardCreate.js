import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as api from './APIFile';
const CardCreate = () => {
	let history = useHistory();
	const [card, setCard] = useState({ url: '', tags: [] });
	const [error, setError] = useState(false);

	//Setting card state with the value from the input fields 
	const handleChange = (event) => {
		setCard({ ...card, [event.target.id]: event.target.value });
	};

	//Sending the user input to create a card in the database, then awaiting the promise from the api to push the user to the gallery with the newly created card added to the display. 
	const handleCardCreate = async (event) => {
		event.preventDefault();
		await api.createCard(card, setError);
		history.push('/gallery');
	};
	return (
		<div>
			<div className='form create-card'>
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
