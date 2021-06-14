//////////////////UPDATE BEFORE PUSHING TO MAIN//////////////////////////

// const token = localStorage.getItem('token');
// export const getGallery = (setCards, setError) => {
// 	const url = 'https://hatcrew-be.herokuapp.com/api/cards';
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
// 	const url = 'https://hatcrew-be.herokuapp.com/cards';
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
// 	const url = `https://hatcrew-be.herokuapp.com/api/cards/${params.id}`;
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
// 	const url = `https://hatcrew-be.herokuapp.com/api/cards/${params.id}`;
// 	fetch(url, {
// 		method: 'PATCH',
// 		headers: {
// 			'Content-type': 'application/json; charset=UTF-8',
// 			Authorization: `Bearer ${token}`,
// 		},
// 		body: JSON.stringify(cardEdit),
// 	})
// 		.then((res) => res.json())
// 		.then((data) => setCardEdit(data))
// 		.catch(() => setError(true));
// };

// export const postSignUp = (user, setError) => {
// 	const url = 'https://hatcrew-be.herokuapp.com/api/users/signup';
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
// 	const url = 'https://hatcrew-be.herokuapp.com/api/users/signin';
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
// 	const url = `https://hatcrew-be.herokuapp.com/api/cards/${params.id}`;
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

//////////LOCALHOST TESTING//////////

const token = localStorage.getItem('token');
export const getGallery = (setCards, setError) => {
	const url = 'http://localhost:3000/api/cards';
	fetch(url, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
			Authorization: `Bearer ${token}`,
		},
	})
		.then((res) => res.json())
		.then((data) => setCards(data))
		.catch(() => setError(true));
};

export const createCard = (card, setError) => {
	const url = 'http://localhost:3000/api/cards';
	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(card),
	})
		.then((res) => res.json())
		.catch(() => setError(true));
};
export const getCardDetails = (params, setCards, setCardEdit, setError) => {
	const url = `http://localhost:3000/api/cards/${params.id}`;
	fetch(url, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
			Authorization: `Bearer ${token}`,
		},
	})
		.then((res) => res.json())
		.then((data) => {
			setCards(data);
			setCardEdit(data);
		})
		.catch(() => setError(true));
};

//// CARD DETAILS
export const cardUpdate = (params, cardEdit, setCardEdit, setError) => {
	const url = `http://localhost:3000/api/cards/${params.id}`;
	fetch(url, {
		method: 'PATCH',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(cardEdit),
	})
		.then((res) => res.json())
		.then((data) => setCardEdit(data))
		.catch(() => setError(true));
};

export const postSignUp = (user, setError) => {
	const url = 'http://localhost:3000/api/users/signup';
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
export const postSignIn = (user, setError) => {
	const url = 'http://localhost:3000/api/users/signin';
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

export const cardDelete = (params, history, setError) => {
	const url = `http://localhost:3000/api/cards/${params.id}`;
	fetch(url, {
		method: 'DELETE',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
			Authorization: `Bearer ${token}`,
		},
	})
		.then(history.goBack())
		.catch(() => setError(true));
};
