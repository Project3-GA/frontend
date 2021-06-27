//////////////////UPDATE BEFORE PUSHING TO MAIN//////////////////////////

//setting the token in localStorage to use for authentication
const token = localStorage.getItem('token');
// const urlBase = 'http://localhost:3000';
const urlBase = 'https://hatcrew-be.herokuapp.com';
//Authentication//

//Creates a new user in the database
export const postSignUp = (user, setError) => {
	const url = `${urlBase}/api/users/signup`;
	fetch(url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
		body: JSON.stringify(user),
	})
		.then((res) => res.json())
		.then((data) => console.log(data))
		.catch(() => setError(true));
};

//Authenticates user and provides token
export const postSignIn = (user, setError) => {
	const url = `${urlBase}/api/users/signin`;
	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
		body: JSON.stringify(user),
	})
		.then((res) => res.json())
		.catch(() => setError(true));
};

//Cards//

//Get all cards from the database and display in the gallery
export const getGallery = (setError) => {
	const url = `${urlBase}/api/cards`;
	return fetch(url, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	})
		.then((res) => res.json())
		.then((data) => data)
		.catch(() => setError(true));
};

//Create a new card
export const createCard = (card, setError) => {
	const url = `${urlBase}/api/cards`;
	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
		body: JSON.stringify(card),
	})
		.then((res) => res.json())
		.catch(() => setError(true));
};

//Get a specific a card from the database and displays on Card Details
export const getCardDetails = (params, setCards, setCardEdit, setError) => {
	const url = `${urlBase}/api/cards/${params.id}`;
	fetch(url, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	})
		.then((res) => res.json())
		.then((data) => {
			setCards(data);
			setCardEdit(data);
		})
		.catch(() => setError(true));
};

//Adding new tags to an individual card
export const cardUpdate = (tag, params, setError) => {
	const url = `${urlBase}/api/cards/${params.id}`;
	return fetch(url, {
		method: 'PATCH',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
		body: JSON.stringify({ tag }),
	})
		.then((res) => res.json())
		.catch(() => setError(true));
};

//Deletes a card from the database
export const cardDelete = (params, history, setError) => {
	const url = `${urlBase}/api/cards/${params.id}`;
	fetch(url, {
		method: 'DELETE',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	})
		.then(history.goBack())
		.catch(() => setError(true));
};

//Deletes a tag from an individual card
export const tagDelete = (tagName, params, setError) => {
	const url = `${urlBase}/api/cards/tags/${params.id}`;
	return fetch(url, {
		method: 'PATCH',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
		body: JSON.stringify({ tags: tagName }),
	})
		.then((res) => res.json())
		.catch(() => setError(true));
};

//Gets all cards created by the authenticated user
export const getPersonal = (setError) => {
	const url = `${urlBase}/api/cards/personal/1`;
	return (
		fetch(url, {
			method: 'GET',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		})
			.then((res) => res.json())
			// .then((data) => setCards(data))
			.catch(() => setError(true))
	);
};

//////////LOCALHOST TESTING//////////

// const token = localStorage.getItem('token');
// export const getGallery = (setCards, setError) => {
// 	const url = 'http://localhost:3000/api/cards';
// 	fetch(url, {
// 		method: 'GET',
// 		headers: {
// 			'Content-type': 'application/json; charset=UTF-8',
// 			Authorization: `Bearer ${token}`,
// 		},
// 	})
// 		.then((res) => res.json())
// 		.then((data) => setCards(data))
// 		.catch(() => setError(true));
// };

// export const createCard = (card, setError) => {
// 	const url = 'http://localhost:3000/api/cards';
// 	return fetch(url, {
// 		method: 'POST',
// 		headers: {
// 			'Content-type': 'application/json; charset=UTF-8',
// 			Authorization: `Bearer ${token}`,
// 		},
// 		body: JSON.stringify(card),
// 	})
// 		.then((res) => res.json())
// 		.catch(() => setError(true));
// };
// export const getCardDetails = (params, setCards, setCardEdit, setError) => {
// 	const url = `http://localhost:3000/api/cards/${params.id}`;
// 	fetch(url, {
// 		method: 'GET',
// 		headers: {
// 			'Content-type': 'application/json; charset=UTF-8',
// 			Authorization: `Bearer ${token}`,
// 		},
// 	})
// 		.then((res) => res.json())
// 		.then((data) => {
// 			setCards(data);
// 			setCardEdit(data);
// 		})
// 		.catch(() => setError(true));
// };

// //// CARD DETAILS
// export const cardUpdate = (params, cardEdit, setCardEdit, setError) => {
// 	const url = `http://localhost:3000/api/cards/${params.id}`;
// 	fetch(url, {
// 		method: 'PATCH',
// 		headers: {
// 			'Content-type': 'application/json; charset=UTF-8',
// 			Authorization: `Bearer ${token}`,
// 		},
// 		body: JSON.stringify(cardEdit),
// 	})
// 		.then((res) => res.json())
// 		.then((data) => (data ? setCardEdit(data) : null))
// 		.catch(() => setError(true));
// };

// export const postSignUp = (user, setError) => {
// 	const url = 'http://localhost:3000/api/users/signup';
// 	fetch(url, {
// 		method: 'POST',
// 		headers: {
// 			'Content-type': 'application/json; charset=UTF-8',
// 		},
// 		body: JSON.stringify(user),
// 	})
// 		.then((res) => res.json())
// 		.then((data) => console.log(data))
// 		.catch(() => setError(true));
// };
// export const postSignIn = (user, setError) => {
// 	const url = 'http://localhost:3000/api/users/signin';
// 	return fetch(url, {
// 		method: 'POST',
// 		headers: {
// 			'Content-type': 'application/json; charset=UTF-8',
// 		},
// 		body: JSON.stringify(user),
// 	})
// 		.then((res) => res.json())
// 		.catch(() => setError(true));
// };

// export const cardDelete = (params, history, setError) => {
// 	const url = `http://localhost:3000/api/cards/${params.id}`;
// 	fetch(url, {
// 		method: 'DELETE',
// 		headers: {
// 			'Content-type': 'application/json; charset=UTF-8',
// 			Authorization: `Bearer ${token}`,
// 		},
// 	})
// 		.then(history.goBack())
// 		.catch(() => setError(true));
// };
// export const tagDelete = (tagName, params, setError) => {
// 	const url = `http://localhost:3000/api/cards/tags/${params.id}`;
// 	fetch(url, {
// 		method: 'PATCH',
// 		headers: {
// 			'Content-type': 'application/json; charset=UTF-8',
// 			Authorization: `Bearer ${token}`,
// 		},
// 		body: JSON.stringify({ tags: tagName }),
// 	}).catch(() => setError(true));
// };

// export const getPersonal = (activeUser, setCards, setError) => {
// 	const url = `http://localhost:3000/api/cards/personal/${activeUser}`;
// 	return fetch(url, {
// 		method: 'GET',
// 		headers: {
// 			'Content-type': 'application/json; charset=UTF-8',
// 			Authorization: `Bearer ${token}`,
// 		},
// 	})
// 		.then((res) => res.json())
// 		.then((data) => setCards(data))
// 		.catch(() => setError(true));
// };
