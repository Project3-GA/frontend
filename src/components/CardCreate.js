import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const CardCreate = () => {
	const [card, setCard] = useState({ url: "", tags: [] })
	const [error, setError] = useState(false);
	const token = localStorage.getItem('token')

	const handleChange = (event) => {
		setCard({ ...card, [event.target.id]: event.target.value });
	};
	const handleSignIn = (event) => {
		event.preventDefault();

		const url = 'https://hatcrew-be.herokuapp.com/api/cards';
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify(card),
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch(() => setError(true));
	};
	return (
		<div>
			<div className="form">
				<form onSubmit={handleSignIn}>
					<label htmlFor='url'>image/gif url:</label>
					<input id='url' type='text' onChange={handleChange} />
					<label htmlFor='tags'>tags:</label>
					<input id='tags' type='text' onChange={handleChange} />
					<button type='submit' className="submit-button">submit</button>
				</form>
			</div>
		</div>
	);
};

export default CardCreate