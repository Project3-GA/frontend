import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import * as api from './APIFile';
const CardDetail = () => {
	const [error, setError] = useState(false);
	const [cards, setCards] = useState({});
	const [cardEdit, setCardEdit] = useState({});
	const [tags, setTags] = useState([]);
	const [tagName, setTagName] = useState('');
	let params = useParams();
	const history = useHistory();
	const [tag, setTag] = useState('');

	//Storing the newly created tags in the Tags state based off of the user input
	// const handleChange = (event) => {
	// 	if (event.target.id === 'tags') {
	// 		const copy = [...cardEdit.tags];
	// 		copy.push(event.target.value);
	// 		setTags(copy);
	// 	} else {
	// 		setCardEdit({ ...cardEdit, [event.target.id]: event.target.value });
	// 	}
	// };

	//Setting the tag to be deleted from the database
	const deleteTag = (e) => {
		setTagName(e.target.id);
		api.tagDelete(tagName, params, setError).then((res) => setCards(res));
	};

	//Displaying the selected card
	useEffect(() => {
		api.getCardDetails(params, setCards, setCardEdit, setError);
	}, [tags, tagName]);

	//Adding most recently created tag to the tags array, to be added to the specific card in the database
	// const cardUpdate = async (event) => {
	// 	event.preventDefault();
	// 	if (tags.length && tags[tags.length - 1]) {
	// 		const copy = { ...cardEdit };
	// 		copy.tags.push(tags[tags.length - 1]);
	// 		await setCardEdit(copy);
	// 	}
	// 	api.cardUpdate(params, cardEdit, setCardEdit, setError);
	// };

	return (
		<div className='gallerydetails'>
			<img src={cards && cards.url} alt='picture' className='detail-image' />

			<div className='tags-div'>
				{cards &&
					cards.tags &&
					cards.tags.map((tag) => (
						<div>
							<h3>
								{tag}
								<button onClick={deleteTag} id={tag}>
									X
								</button>
							</h3>
						</div>
					))}
			</div>

			<form
				onSubmit={(evt) => {
					evt.preventDefault();
					api.cardUpdate(tag, params, setError).then((res) => {
						setCards(res);
						setTag('');
					});
				}}>
				<label htmlFor='tags'>tags:</label>
				<input
					id='tags'
					type='text'
					value={tag}
					onChange={(evt) => {
						setTag(evt.target.value);
					}}
				/>
				<button type='submit' className='submit-button'>
					submit
				</button>
			</form>
			<button
				className='delete-button'
				onClick={() => api.cardDelete(params, history, setError)}>
				Delete Image
			</button>
		</div>
	);
};

export default CardDetail;
