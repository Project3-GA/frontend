import React, { useState } from 'react';

const Cardform = ({ user, setUser }) => {
	const [card, setCard] = useState({
		tags: '',
		comments: '',
		author: '',
	});
	const [error, setError] = useState(false);
	const handleChange = (event) => {
		setCard({ ...card, [event.target.id]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const url = 'http://localhost:3000/api/cards';
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
				Authorization: `Bearer ${localStorage.getItem}`,
			},
			body: JSON.stringify(card),
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch(() => setError(true));
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor='tags'>Tags</label>
				<input id='tags' type='text' onChange={handleChange} />
				<label htmlFor='comments'>Comments</label>
				<input id='comments' type='text' onChange={handleChange} />
				<label htmlFor='comments'>Comments</label>
				<button type='submit'>submit</button>
			</form>
		</>
	);
};

export default Cardform;
