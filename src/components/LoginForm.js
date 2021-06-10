import React, { useState } from 'react';

const LoginForm = ({ user, setUser }) => {
	const [error, setError] = useState(false);

	const handleChange = (event) => {
		setUser({ ...user, [event.target.id]: event.target.value });
	};
	const handleSignIn = (event) => {
		event.preventDefault();

		const url = 'http://localhost:3000/api/users/signin';
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => localStorage.setItem('token', JSON.stringify(data)))
			.catch(() => setError(true));
	};
	return (
		<div>
			<div>
				<form onSubmit={handleSignIn}>
					<label htmlFor='email'>Email</label>
					<input id='email' type='text' onChange={handleChange} />
					<label htmlFor='password'>Password</label>
					<input id='password' type='text' onChange={handleChange} />
					<button type='submit'>submit</button>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
