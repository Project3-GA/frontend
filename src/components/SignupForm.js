import React, { useState } from 'react';

const SignupForm = ({ user, setUser }) => {
	const [error, setError] = useState(false);
	// const [user, setUser] = useState({ email: '', password: '' });
	const handleChange = (event) => {
		setUser({ ...user, [event.target.id]: event.target.value });
	};
	const handleSignUp = (event) => {
		event.preventDefault();

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
	return (
		<div>
			<form onSubmit={handleSignUp}>
				<label htmlFor='email'>Email</label>
				<input id='email' type='text' onChange={handleChange} />
				<label htmlFor='password'>Password</label>
				<input id='password' type='text' onChange={handleChange} />
				<label htmlFor='Confirm password'> Confirm Password</label>
				<input id='confirm' type='text' />
				<button type='submit'>submit</button>
			</form>
		</div>
	);
};

export default SignupForm;
