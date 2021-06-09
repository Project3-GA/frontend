import React, { useState } from 'react';

const Form = ({ loginForm, setLoginForm, setUser }) => {
	const [error, setError] = useState(false);
	const handleChange = (event) => {
		setLoginForm({ ...loginForm, [event.target.id]: event.target.value });
	};

	const handleSignUp = (event) => {
		event.preventDefault();
		const url = 'http://localhost:3000/api/users/signup';
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(loginForm),
		})
			.then((res) => res.json())
			.then((data) => setUser(data))
			.catch(() => setError(true));
	};
	const handleSignIn = (event) => {
		event.preventDefault();
		const url = 'http://localhost:3000/api/users/signin';
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(loginForm),
		})
			.then((res) => res.json())
			.then((data) => localStorage.setItem('token', data))
			.catch(() => setError(true));
	};

	return (
		<>
			<form onSubmit={handleSignUp}>
				<label htmlFor='email'>sign up</label>
				<input id='email' type='text' onChange={handleChange} />
				<label htmlFor='password'>Password</label>
				<input id='password' type='text' onChange={handleChange} />
				<button type='submit'>submit</button>
			</form>

			<form onSubmit={handleSignIn}>
				<label htmlFor='sign'>sign in</label>
				<input id='email' type='text' onChange={handleChange} />
				<label htmlFor='password'>Password</label>
				<input id='password' type='text' onChange={handleChange} />
				<button type='submit'>submit</button>
			</form>
		</>
	);
};

export default Form;
