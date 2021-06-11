import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const SignupForm = ({ user, setUser }) => {
	const [error, setError] = useState(false);
	// const [user, setUser] = useState({ email: '', password: '' });
	const handleChange = (event) => {
		setUser({ ...user, [event.target.id]: event.target.value });
	};
	const handleSignUp = (event) => {
		event.preventDefault();

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
	return (
		<div className="form">
			<form onSubmit={handleSignUp}>
				<label htmlFor='email'>Email</label>
				<input id='email' type='text' onChange={handleChange} />
				<label htmlFor='password'>Password</label>
				<input id='password' type='text' onChange={handleChange} />
				<label htmlFor='Confirm password'> Confirm Password</label>
				<input id='confirm' type='text' />
				<button type='submit' className="submit-button">submit</button>
				<p>already have an account? sign-in <Link to="/signin"><span>here</span></Link>.</p>
			</form>
		</div>
	);
};

export default SignupForm;
