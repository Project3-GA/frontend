import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs'

import * as api from './APIFile';
const CardDetail = ({ match }) => {
	const token = localStorage.getItem('token');
	const [error, setError] = useState(false);
	const [cards, setCards] = useState({});
	const [cardEdit, setCardEdit] = useState({});
	const [tags, setTags] = useState([])

	// const id = match.id
	let params = useParams();
	// console.log(params);
	const history = useHistory();

	const handleChange = (event) => {
		if (event.target.id === 'tags') {
			const copy = [...cardEdit.tags]
			copy.push(event.target.value)
			setTags(copy)
		} else {
			setCardEdit({ ...cardEdit, [event.target.id]: event.target.value });
		}
	};


	useEffect(() => {
		api.getCardDetails(params, setCards, setCardEdit, setError);
	}, [cardEdit]);




	const cardUpdate = async (event) => {
		event.preventDefault();
		if (tags.length && tags[tags.length - 1]) {
			const copy = { ...cardEdit }
			copy.tags.push(tags[tags.length - 1])
			await setCardEdit(copy)
		}
		api.cardUpdate(params, cardEdit, setCardEdit, setError);
	};

	return (
		<div className='gallerydetails'>
			<img src={cards.url} alt='picture' />

			<BsTrash className="trash" onClick={() => api.cardDelete(params, history, setError)
			}>Delete IMG</BsTrash>

			<form onSubmit={cardUpdate}>
				{/* <label htmlFor='url'>image/gif url:</label>
				<input id='url' type='text' onChange={handleChange} /> */}
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
