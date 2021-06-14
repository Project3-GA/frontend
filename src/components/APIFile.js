const token = localStorage.getItem('token');
export const getGallery = (setCards, setError) => {
	const url = 'https://hatcrew-be.herokuapp.com/api/cards';
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
	const url = 'https://hatcrew-be.herokuapp.com/api/cards';
	fetch(url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(card),
	})
		.then((res) => res.json())
		.then((data) => console.log(data))
		.catch(() => setError(true));
};
export const getCardDetails = (params, setCards, setError) => {
	const url = `https://hatcrew-be.herokuapp.com/api/cards/${params.id}`;
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

//// CARD DETAILS
export const cardUpdate = (params, cardEdit, setCardEdit, setError) => {
	const url = `https://hatcrew-be.herokuapp.com/api/cards/${params.id}`;
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
	const url = 'https://hatcrew-be.herokuapp.com/api/users/signup';
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
	const url = 'https://hatcrew-be.herokuapp.com/api/users/signin';
	fetch(url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
		body: JSON.stringify(user),
	})
		.then((res) => res.json())
		.then((data) => localStorage.setItem('token', data.token))
		.catch(() => setError(true));
};
